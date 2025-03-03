from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
import logging
from bson import ObjectId

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# Add CORS middleware (allow your frontend domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your actual frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB (using Motor for async support)
mongo_uri = os.getenv("MONGO_URI", "mongodb+srv://Hired:hired123@hired.pni4x.mongodb.net/?retryWrites=true&w=majority&appName=Hired")
client = AsyncIOMotorClient(mongo_uri)
db = client["mydatabase"]  # Specify the database name
collection = db["users"]

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define Pydantic model for request validation
class TokenModel(BaseModel):
    token: str

@app.post("/auth/google")
async def google_auth(data: TokenModel):
    try:
        # Verify the Google token
        id_info = id_token.verify_oauth2_token(data.token, google_requests.Request(), os.getenv("GOOGLE_CLIENT_ID"))

        # Extract user information
        google_id = id_info["sub"]  # Use the 'sub' as unique Google ID
        
        # Check if user already exists in the database
        existing_user = await collection.find_one({"google_id": google_id})
        
        if existing_user:
            # If user already exists, return a friendly message
            logger.info(f"User with Google ID {google_id} tried to register again")
            
            # Convert ObjectId to string if it exists
            if "_id" in existing_user:
                existing_user["_id"] = str(existing_user["_id"])
                
            return {
                "status": "existing_user",
                "message": "You've already registered with this Google account. Please use a different account or sign in directly.",
                "user": {
                    "email": existing_user.get("email", ""),
                    "name": existing_user.get("name", ""),
                    "picture": existing_user.get("picture", "")
                }
            }
        
        # Create new user data
        user_data = {
            "google_id": google_id,
            "email": id_info["email"],
            "name": id_info.get("name", ""),
            "picture": id_info.get("picture", ""),
            "auth_provider": "google"
        }

        # Insert new user into the database
        result = await collection.insert_one(user_data)
        logger.info(f"New Google user registered with ID: {result.inserted_id}")
        
        # Add the MongoDB ID to the user data
        user_data["_id"] = str(result.inserted_id)

        return {
            "status": "success",
            "message": "Login successful. Welcome to Hired!",
            "user": user_data
        }

    except Exception as e:
        logger.error(f"Error during Google authentication: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error during Google authentication: {str(e)}")

# Run the server with uvicorn on all interfaces for external access
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)