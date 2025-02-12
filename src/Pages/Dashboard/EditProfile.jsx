import { Link } from "react-router-dom";
import { useState } from "react";
import { Camera, Linkedin, Github, Twitter } from "lucide-react";

export default function EditProfile() {
  const [profileData, setProfileData] = useState({
    fullName: "John Anderson",
    currentRole: "Senior Software Engineer",
    industry: "Technology",
    yearsOfExperience: "5 Years",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johnanderson.dev",
    summary:
      "Experienced software engineer with a strong background in full-stack development and cloud architecture.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/johnanderson",
      github: "https://github.com/johnanderson",
      twitter: "https://twitter.com/johnanderson",
    },
  });

  const handleSave = () => {
    console.log("Saving profile:", profileData);
  };

  const handleFileUpload = (e) => {
    console.log("File uploaded:", e.target.files?.[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold mt-24 md:mt-20 sm:mt-10">Edit Your Profile</h1>
        <p className="text-gray-600 text-base md:text-lg">
          Update your personal information and upload your latest resume.
        </p>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Profile Completion</span>
            <span className="text-sm text-blue-500">85%</span>
          </div>
          <div className="h-2 bg-gray-300 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24">
          {/* Left Column - Profile Image and Basic Info */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://via.placeholder.com/120"
                  alt="Profile"
                  className="rounded-full w-24 h-24 mx-auto"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <button className="text-blue-500 text-sm mt-2">Change Photo</button>
            </div>

            <div className="space-y-4">
              {["Full Name", "Current Role", "Industry", "Years of Experience"].map((field, index) => (
                <div key={index}>
                  <label className="text-sm text-gray-600">{field}</label>
                  <input
                    type="text"
                    value={profileData[field.toLowerCase().replace(/ /g, "")]}
                    onChange={(e) =>
                      setProfileData({ ...profileData, [field.toLowerCase().replace(/ /g, "")]: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-gray-300 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info, Resume, and Social Links */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Email", "Phone", "Location", "Website"].map((field, index) => (
                <div key={index}>
                  <label className="text-sm text-gray-600">{field}</label>
                  <input
                    type="text"
                    value={profileData[field.toLowerCase()]}
                    onChange={(e) =>
                      setProfileData({ ...profileData, [field.toLowerCase()]: e.target.value })
                    }
                    className="w-full p-2 bg-white border border-gray-300 rounded-lg"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-sm text-gray-600">Professional Summary</label>
              <textarea
                value={profileData.summary}
                onChange={(e) => setProfileData({ ...profileData, summary: e.target.value })}
                className="w-full p-2 bg-white border border-gray-300 rounded-lg h-32"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Skills</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
                <button className="px-3 py-1 border border-dashed border-gray-300 rounded-full text-sm text-gray-600">
                  + Add Skill
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Resume</label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-gray-100 rounded-full">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Drag and drop your resume here or</p>
                    <p className="text-sm text-blue-500">browse files</p>
                    <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm text-gray-600">Social Links</label>
              <div className="space-y-3">
                {Object.keys(profileData.socialLinks).map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    {platform === "linkedin" && <Linkedin className="w-5 h-5 text-gray-500" />}
                    {platform === "github" && <Github className="w-5 h-5 text-gray-500" />}
                    {platform === "twitter" && <Twitter className="w-5 h-5 text-gray-500" />}
                    <input
                      type="text"
                      value={profileData.socialLinks[platform]}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          socialLinks: { ...profileData.socialLinks, [platform]: e.target.value },
                        })
                      }
                      className="w-full p-2 bg-white border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
