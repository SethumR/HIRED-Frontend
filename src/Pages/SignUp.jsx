import React from "react"
import { Apple, Facebook, Mail } from "lucide-react"

function SignUp() {
  return (
    <div className="min-h-screen bg-[#0E1526] text-white flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="w-[48px] h-[48px] mb-8">
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[450px] flex flex-col items-center">
        <h1 className="text-[48px] leading-[52px] font-bold text-center mb-10">
          Sign up 
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
          Already have an account?{" "}
          <a href="/login" className="text-white hover:underline">
            Log in here
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

export default SignUp

