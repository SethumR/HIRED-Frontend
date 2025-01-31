import React from "react"
import { motion, AnimatePresence } from "framer-motion"

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

const EmailStep = ({ email, setEmail, error, handleNext }) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
    <h1 className="text-[27px] font-bold text-center mb-8 ">
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
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AnimatePresence>{error && <ErrorMessage message={error} />}</AnimatePresence>
      </div>


      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleNext}
        className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 font-bold rounded-lg mb-6 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-lg"
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
          { image: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", text: "Login with Google" },
          { image: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png", text: "Login with Apple" }
        ].map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full border border-gray-700 rounded-3xl py-2 flex items-center hover:bg-gray-800 transition-all duration-300 ease-in-out"
          >
            <img src={button.image} alt={button.text} className="w-8 h-8 ml-4" />
            <span className="flex-1 text-center">{button.text}</span>
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gray-700" />
      </div>

      <p className="text-center text-gray-400 text-sm">
        Already have an account?{" "}
        <a
          href="/signin"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:underline"
        >
          Sign In Here
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
  )
}

export default EmailStep
