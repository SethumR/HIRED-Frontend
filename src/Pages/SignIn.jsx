import React from "react"
import { Apple, Facebook, Mail } from "lucide-react"

function SignIn() {
  return (
    <div className="min-h-screen bg-[#0E1526] text-white flex flex-col items-center px-4 py-8 mt-24" >
   

      {/* Main Content */}
      <div className="w-full max-w-[450px] flex flex-col items-center">
        <h1 className="text-[48px] leading-[52px] font-bold text-center mb-10">
          Sign In
          <br />
        </h1>

        {/* Email Input */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="block mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@domain.com"
            className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white placeholder:text-gray-500"
          />
        </div>

        {/* Next Button */}
        <button className="w-full bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold py-3 rounded-full mb-8 transition-colors">
          Next
        </button>

        {/* Divider */}
        <div className="w-full flex items-center gap-3 mb-8">
          <div className="h-[1px] flex-1 bg-gray-700" />
          <span className="text-sm">or</span>
          <div className="h-[1px] flex-1 bg-gray-700" />
        </div>

        {/* Social Buttons */}
        <div className="w-full space-y-3">
          <button className="w-full border border-gray-700 rounded-full py-3 flex items-center justify-center gap-2 hover:border-white transition-colors">
            <Mail className="w-6 h-6" />
            Sign up with Google
          </button>
          <button className="w-full border border-gray-700 rounded-full py-3 flex items-center justify-center gap-2 hover:border-white transition-colors">
            <Facebook className="w-6 h-6" />
            Sign up with Facebook
          </button>
          <button className="w-full border border-gray-700 rounded-full py-3 flex items-center justify-center gap-2 hover:border-white transition-colors">
            <Apple className="w-6 h-6" />
            Sign up with Apple
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-8 text-base">
          Don't have an account?{" "}
          <a href="/signup" className="text-white hover:underline">
            Sign up  here
          </a>
        </p>

        {/* Footer Text */}
        <p className="mt-8 text-xs text-gray-400 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="/privacy" className="text-white hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="text-white hover:underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  )
}

export default SignIn

