import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaBuilding, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaIndustry, 
  FaInfoCircle, 
  FaUpload,
  FaSave,
  FaExclamationTriangle
} from "react-icons/fa";

export default function CompanyProfilePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyWebsite: "",
    companyIndustry: "",
    companyLocation: "",
    companyDescription: "",
    companySize: "",
    companyFounded: "",
    companyLogo: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const industryOptions = [
    "Technology", "Healthcare", "Finance", "Education", 
    "Manufacturing", "Retail", "Entertainment", "Hospitality",
    "Transportation", "Construction", "Agriculture", "Other"
  ];

  const companySizeOptions = [
    "1-10 employees", "11-50 employees", "51-200 employees", 
    "201-500 employees", "501-1000 employees", "1000+ employees"
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({...errors, [name]: null});
    }
  }

  function handleLogoChange(e) {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, companyLogo: URL.createObjectURL(e.target.files[0]) });
    }
  }

  function validateForm() {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = "Please enter a valid email address";
    }
    
    if (!formData.companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required";
    } else if (!/^(http|https):\/\/[^ "]+$/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = "Please enter a valid URL (include http:// or https://)";
    }
    
    if (!formData.companyDescription.trim()) {
      newErrors.companyDescription = "Company description is required";
    } else if (formData.companyDescription.length < 50) {
      newErrors.companyDescription = "Description should be at least 50 characters";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo(0, 0);
    } else {
      setIsSubmitting(true);
      setErrors({});
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessMessage(true);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }, 1000);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f1c] text-gray-300">
      <main className="flex-1 container pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/DashboardPage" className="flex items-center mr-4 bg-[#161a26] text-purple-400 p-2 rounded-lg hover:text-purple-300 border border-gray-800 transition-colors">
              <FaArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-white">Company Profile</h1>
          </div>
        </div>

        {showSuccessMessage && (
          <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white">
            <div className="flex items-center">
              <FaInfoCircle className="text-purple-400 mr-2" />
              <p>Company profile successfully updated!</p>
            </div>
          </div>
        )}

        {Object.keys(errors).length > 0 && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50">
            <div className="flex items-center mb-2">
              <FaExclamationTriangle className="text-red-400 mr-2" />
              <p className="font-medium text-red-400">Please correct the following errors:</p>
            </div>
            <ul className="list-disc pl-10 text-red-400 text-sm">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-[#161a26] rounded-2xl p-8 border border-gray-800 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1 flex flex-col items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-[#0b0f1c] border-2 border-dashed border-gray-700 flex items-center justify-center mb-4 overflow-hidden">
                {formData.companyLogo ? (
                  <img src={formData.companyLogo} alt="Company logo" className="w-full h-full object-cover" />
                ) : (
                  <FaBuilding className="text-5xl text-gray-600" />
                )}
              </div>
              <label className="bg-[#161a26] text-purple-400 px-4 py-2 rounded-lg border border-purple-500 cursor-pointer hover:bg-[#1c2235] transition-colors">
                <FaUpload className="inline mr-2" />
                Upload Logo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-gray-500 mt-2 text-center">Recommended: Square image, at least 400x400px</p>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">Company Information</h2>
              <p className="text-gray-400 mb-4">Complete your company profile to help candidates learn more about your organization.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    <FaBuilding className="inline mr-2 text-purple-400" /> Company Name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className={`w-full border p-3 rounded-lg placeholder-gray-500 bg-[#0b0f1c] text-gray-300 ${
                      errors.companyName ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-purple-500'
                    } focus:ring-1 focus:ring-purple-500 transition-colors`}
                  />
                  {errors.companyName && <p className="text-pink-500 text-sm mt-1">{errors.companyName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    <FaEnvelope className="inline mr-2 text-purple-400" /> Company Email*
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Enter your company email"
                    className={`w-full border p-3 rounded-lg placeholder-gray-500 bg-[#0b0f1c] text-gray-300 ${
                      errors.companyEmail ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-purple-500'
                    } focus:ring-1 focus:ring-purple-500 transition-colors`}
                  />
                  {errors.companyEmail && <p className="text-pink-500 text-sm mt-1">{errors.companyEmail}</p>}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <FaGlobe className="inline mr-2 text-purple-400" /> Company Website*
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className={`w-full border p-3 rounded-lg placeholder-gray-500 bg-[#0b0f1c] text-gray-300 ${
                    errors.companyWebsite ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-purple-500'
                  } focus:ring-1 focus:ring-purple-500 transition-colors`}
                />
                {errors.companyWebsite && <p className="text-pink-500 text-sm mt-1">{errors.companyWebsite}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <FaIndustry className="inline mr-2 text-purple-400" /> Industry*
                </label>
                <select
                  name="companyIndustry"
                  value={formData.companyIndustry}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg bg-[#0b0f1c] text-gray-300 border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                >
                  <option value="" disabled>Select an industry</option>
                  {industryOptions.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <FaMapMarkerAlt className="inline mr-2 text-purple-400" /> Location
                </label>
                <input
                  type="text"
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                  placeholder="City, State, Country"
                  className="w-full border p-3 rounded-lg placeholder-gray-500 bg-[#0b0f1c] text-gray-300 border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <FaUsers className="inline mr-2 text-purple-400" /> Company Size
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg bg-[#0b0f1c] text-gray-300 border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                >
                  <option value="" disabled>Select company size</option>
                  {companySizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  <FaCalendar className="inline mr-2 text-purple-400" /> Founded Year
                </label>
                <input
                  type="number"
                  name="companyFounded"
                  value={formData.companyFounded}
                  onChange={handleChange}
                  placeholder="e.g. 2010"
                  min="1900"
                  max={new Date().getFullYear()}
                  className="w-full border p-3 rounded-lg placeholder-gray-500 bg-[#0b0f1c] text-gray-300 border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-1">
                  <FaInfoCircle className="inline mr-2 text-purple-400" /> Company Description*
                </label>
                <textarea
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  placeholder="Write a brief description about your company, its mission, values, and what makes it unique..."
                  className={`w-full border p-3 rounded-lg resize-none placeholder-gray-500 bg-[#0b0f1c] text-gray-300 ${
                    errors.companyDescription ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-purple-500'
                  } focus:ring-1 focus:ring-purple-500 transition-colors`}
                  rows="5"
                />
                {errors.companyDescription && 
                  <p className="text-pink-500 text-sm mt-1">{errors.companyDescription}</p>
                }
                <p className="text-xs text-gray-500 mt-1">
                  {formData.companyDescription.length} character{formData.companyDescription.length !== 1 ? 's' : ''} 
                  (Minimum 50 characters recommended)
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-800 mt-8">
              <button 
                type="button" 
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 mr-4 hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" />
                    Save Company Profile
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

// Missing FaCalendar and FaUsers imports
// We're using the same icons as before, just adding these two
function FaCalendar(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
    </svg>
  );
}

function FaUsers(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
    </svg>
  );
}