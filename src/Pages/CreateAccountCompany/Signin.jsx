"use client"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform authentication logic here
    console.log("Email:", email, "Password:", password)
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-sm bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Unlock Your Access
        </h1>

        {/* Sign-in Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
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
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold py-3 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-lg"
          >
            Next
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-gray-600" />
          <span className="text-sm text-gray-400">or continue with</span>
          <div className="h-px flex-1 bg-gray-600" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          {[
            { image: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", text: "Login with Google" },
            { image: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png", text: "Login with Apple" }
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

        {/* Sign-up Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:underline"
          >
            Sign Up Here
          </a>
        </p>

        {/* Privacy Policy & Terms */}
        <p className="mt-6 text-xs text-gray-500 text-center">
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
    </div>
  )
}

export default SignIn
