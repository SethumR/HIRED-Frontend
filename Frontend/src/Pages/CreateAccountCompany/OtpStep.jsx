import React, { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft } from "react-icons/fa"

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"

const buttonClasses =
  "w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"

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

const OtpStep = ({ formData, setFormData, errors, handleSubmit, handlePrevious }) => {
  const otpRefs = useRef([])

  const handleOtpChange = (index, value) => {
    const newOtp = [...formData.otp]
    newOtp[index] = value
    setFormData({ ...formData, otp: newOtp })

    if (value && index < 5 && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1].focus()
    }
  }

  return (
    <motion.form
      key="step3"
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-8 justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          className="cursor-pointer p-2 rounded-full bg-gray-700 mr-4"
        >
          <FaArrowLeft className="text-slate-300 text-lg" />
        </motion.div>
        <h1 className="text-4xl font-bold text-center">
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            {/* This is optional if you want something inside the span */}
          </motion.span>
          Create Account
        </h1>
      </div>

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
        <AnimatePresence>
          {errors.otp && <ErrorMessage message={errors.otp} />}
        </AnimatePresence>
      </div>

      <div className="flex justify-between gap-4">
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
  )
}

export default OtpStep
