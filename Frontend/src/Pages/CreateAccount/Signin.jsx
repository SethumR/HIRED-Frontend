"use client"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const SignInCompany = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Invalid email or password")
      return
    }

    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Login Successful:", email)
      navigate("/dashboard")
    } catch (err) {
      setError("Authentication failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-8 mt-16 relative">
      {/* Modern Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center"
          >
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Circles */}
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient1)"
                  strokeWidth="8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="url(#gradient2)"
                  strokeWidth="6"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Pulsing Dot */}
              <motion.div
                className="absolute w-4 h-4 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Loading Text */}
              <motion.p 
                className="mt-8 text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Authenticating
              </motion.p>
              <motion.div className="flex space-x-1 mt-2">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-sm bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Unlock Your Access
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              required
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full mb-3 bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold py-2 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </motion.button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-gray-600" />
          <span className="text-sm text-gray-400">or continue with</span>
          <div className="h-px flex-1 bg-gray-600" />
        </div>

        <div className="space-y-4">
          {[
            { image: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", text: "Login with Google" },
            { image: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png", text: "Login with Apple" }
          ].map((button, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border border-gray-700 rounded-3xl py-[7px] flex items-center hover:bg-gray-800 transition-all duration-300 ease-in-out"
              disabled={isLoading}
            >
              <img src={button.image || "/placeholder.svg"} alt={button.text} className="w-8 h-8 ml-4" />
              <span className="flex-1 text-center">{button.text}</span>
            </motion.button>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:underline"
            disabled={isLoading}
          >
            Sign Up Here
          </button>
        </p>

        <p className="mt-6 text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <button
            onClick={() => navigate("/privacy")}
            className="text-gray-400 hover:underline"
            disabled={isLoading}
          >
            Privacy Policy
          </button>{" "}
          and{" "}
          <button
            onClick={() => navigate("/terms")}
            className="text-gray-400 hover:underline"
            disabled={isLoading}
          >
            Terms of Service
          </button>{" "}
          apply.
        </p>
      </motion.div>
    </div>
  )
}

export default SignInCompany