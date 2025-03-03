from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import requests
import logging

# Load environment variables
load_dotenv()

app = FastAPI()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB (using Motor for async support)
mongo_uri = os.getenv("MONGO_URI", "mongodb+srv://Hired:hired123@hired.pni4x.mongodb.net/?retryWrites=true&w=majority&appName=Hired")
client = AsyncIOMotorClient(mongo_uri)
db = client["mydatabase"]
collection = db["users"]

# GitHub OAuth constants
GITHUB_CLIENT_ID = "Ov23liujKfeX3V2GnVZs"  # Your GitHub client ID
GITHUB_CLIENT_SECRET = "f25e76d3327c9556209e2f6eb636a0889f28f32a"  # Your GitHub client secret
GITHUB_API_URL = "https://api.github.com/user"  # GitHub API to fetch user data

class GitHubAuthRequest(BaseModel):
    code: str

@app.post('/auth/github')
async def github_login(auth_request: GitHubAuthRequest):
    code = auth_request.code
    if not code:
        raise HTTPException(status_code=400, detail="Code is required")

    # Step 1: Exchange the code for an access token
    url = "https://github.com/login/oauth/access_token"
    params = {
        'client_id': GITHUB_CLIENT_ID,
        'client_secret': GITHUB_CLIENT_SECRET,
        'code': code,  # The code received from GitHub login response
    }
    headers = {
        'Accept': 'application/json'
    }

    # Step 2: Get access token from GitHub
    response = requests.post(url, data=params, headers=headers)
    data = response.json()

    if 'access_token' not in data:
        raise HTTPException(status_code=400, detail="Failed to get access token")

    # Step 3: Use the access token to get user data
    access_token = data['access_token']
    user_response = requests.get(GITHUB_API_URL, headers={
        'Authorization': f'token {access_token}'
    })

    user_data = user_response.json()

    if user_response.status_code != 200:
        raise HTTPException(status_code=400, detail="Failed to fetch user data")
    
    # Step 4: Check if this GitHub user already exists in the database
    github_id = user_data.get('id')
    existing_user = await collection.find_one({"github_id": github_id})
    
    if existing_user:
        # User already exists in the database
        return {
            "status": "existing_user",
            "message": "You have already registered with this GitHub account. Please use a different account or sign in directly.",
            "user": {
                "name": user_data.get('name', 'No name'),
                "email": user_data.get('email', 'No email'),
                "avatar_url": user_data.get('avatar_url', 'No avatar URL'),
                "login": user_data.get('login', 'No login')
            }
        }

    # Step 5: User does not exist, save to database
    new_user = {
        "github_id": github_id,
        "name": user_data.get('name', 'No name'),
        "email": user_data.get('email', 'No email'),
        "avatar_url": user_data.get('avatar_url', 'No avatar URL'),
        "login": user_data.get('login', 'No login'),
        "auth_provider": "github"
    }
    
    try:
        await collection.insert_one(new_user)
        logger.info(f"New GitHub user registered: {new_user['login']}")
    except Exception as e:
        logger.error(f"Error saving GitHub user to database: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error during user registration: {str(e)}")

    # Step 6: Return success response with user data
    return {
        "status": "success",
        "message": "Login successful. Welcome to Hired!",
        "user": {
            "name": user_data.get('name', 'No name'),
            "email": user_data.get('email', 'No email'),
            "avatar_url": user_data.get('avatar_url', 'No avatar URL'),
            "login": user_data.get('login', 'No login')
        }
    }

# Run the server with uvicorn on all interfaces for external access
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)