import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const ModernSignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    otp: ["", "", "", "", "", ""],
  })
  const [errors, setErrors] = useState({})
  const otpRefs = useRef([])

  const handleNext = () => {
    const newErrors = {}

    if (currentStep === 1 && !formData.email) {
      newErrors.email = "Email is required"
    } else if (currentStep === 1 && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (currentStep === 2) {
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (!formData.username) newErrors.username = "Username is required"
      if (!formData.password) newErrors.password = "Password is required"
    }

    if (currentStep === 3 && formData.otp.some((digit) => !digit)) {
      newErrors.otp = "Please enter the complete OTP"
    }

    if (Object.keys(newErrors).length === 0) {
      setErrors({})
      setCurrentStep((prevStep) => prevStep + 1)
    } else {
      setErrors(newErrors)
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Account successfully created!")
  }

  const handleOtpChange = (index, value) => {
    const newOtp = [...formData.otp]
    newOtp[index] = value
    setFormData({ ...formData, otp: newOtp })

    if (value && index < 5) {
      otpRefs.current[index + 1].focus()
    }
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"

  const buttonClasses =
    "w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"

  const ErrorMessage = ({ message }) => (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="text-red-500 text-sm mt-1"
    >
      {message}
    </motion.p>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4 py-12 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50"
      >
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text">
                Unlock Your Access
              </h1>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@domain.com"
                  className={inputClasses}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <AnimatePresence>{errors.email && <ErrorMessage message={errors.email} />}</AnimatePresence>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className={`${buttonClasses} mb-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600`}
              >
                Next
              </motion.button>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gray-600" />
                <span className="text-sm text-gray-400">or continue with</span>
                <div className="h-px flex-1 bg-gray-600" />
              </div>

         {/* Social Buttons */}
          <div className="space-y-4 mb-8">
              {[
                { image: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", text: "Sign up with Google" },
                { image: "https://static.vecteezy.com/system/resources/previews/042/127/218/non_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png", text: "Sign up with Facebook" },
                { image: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png", text: "Sign up with Apple" }
              ].map((button, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border border-gray-700 rounded-3xl py-[9px] flex items-center hover:bg-gray-800 transition-all duration-300 ease-in-out"
                >
                  <img src={button.image} alt={button.text} className="w-8 h-8 ml-4" />
                  <span className="flex-1 text-center">{button.text}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-700" />
            </div>


            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:underline"
              >
                Log in here
              </a>
            </p>

            <p className="mt-8 text-xs text-gray-500 text-center">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="/privacy" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-gray-400 hover:underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </motion.div>

            
          )}

          {currentStep === 2 && (
            <motion.form
              key="step2"
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Create Account
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={inputClasses}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                  />
                  <AnimatePresence>{errors.firstName && <ErrorMessage message={errors.firstName} />}</AnimatePresence>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={inputClasses}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                  />
                  <AnimatePresence>{errors.lastName && <ErrorMessage message={errors.lastName} />}</AnimatePresence>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone number
                </label>
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    fontSize: "16px",
                    backgroundColor: "rgb(31, 41, 55)",
                    border: "1px solid rgb(75, 85, 99)",
                    color: "white",
                    borderRadius: "0.5rem",
                  }}
                  dropdownStyle={{
                    backgroundColor: "rgb(31, 41, 55)",
                    color: "white",
                  }}
                />
                <AnimatePresence>{errors.phone && <ErrorMessage message={errors.phone} />}</AnimatePresence>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={inputClasses}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="username"
                />
                <AnimatePresence>{errors.username && <ErrorMessage message={errors.username} />}</AnimatePresence>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={inputClasses}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                />
                <AnimatePresence>{errors.password && <ErrorMessage message={errors.password} />}</AnimatePresence>
              </div>

              <div className="flex justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handlePrevious}
                  className={`${buttonClasses} bg-gray-700 hover:bg-gray-600`}
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleNext}
                  className={`${buttonClasses} bg-gradient-to-r from-indigo-500 to-purple-500`}
                >
                  Next
                </motion.button>
              </div>
            </motion.form>
          )}

          {currentStep === 3 && (
            <motion.form
              key="step3"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Verify OTP
              </h1>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-300 mb-1">
                  Enter OTP
                </label>
                <div className="flex justify-between gap-2">
                  {formData.otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className={`${inputClasses} w-12 text-center`}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      ref={(el) => (otpRefs.current[index] = el)}
                    />
                  ))}
                </div>
                <AnimatePresence>{errors.otp && <ErrorMessage message={errors.otp} />}</AnimatePresence>
              </div>

              <div className="flex justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handlePrevious}
                  className={`${buttonClasses} bg-gray-700 hover:bg-gray-600`}
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`${buttonClasses} bg-gradient-to-r from-green-500 to-emerald-500`}
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-center items-center space-x-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${currentStep >= step ? "bg-indigo-500" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ModernSignupForm
