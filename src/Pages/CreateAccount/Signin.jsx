"use client"

import React from "react"
import { motion } from "framer-motion"

const SignIn = () => {
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

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@domain.com"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mb-6">
        <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          id="Password"
          type="Password"
          placeholder="Abc@123"
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out"
        />
      </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold py-3 rounded-lg mb-6 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-lg"
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


        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:underline"
          >
            Sign Up Here
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
    </div>
  )
}

export default SignIn

