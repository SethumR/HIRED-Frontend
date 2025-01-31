import React from 'react';

function Upgrade() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E1526]">
      <div className="w-full max-w-5xl p-8 bg-[#111827] rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-2 leading-relaxed">
          Upgrade Your Plan
        </h2>
        {/* Rest of component remains the same */}
        <p className="text-center text-white mt-2">
          Enhance your interview preparation with our tailored plans.
        </p>

        <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <div className="relative p-6 bg-[#1E293B] rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:blur-lg before:opacity-20 hover:before:opacity-40 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 relative">Basic</h3>
              <ul className="text-white list-disc pl-5 mt-2 space-y-2">
                <li>Limited to 20 mock interviews per month</li>
                <li>AI-generated feedback</li>
                <li>Access to common interview questions</li>
                <li>Email support</li>
                <li>Basic tips and tricks</li>
              </ul>
            </div>
            <div className="mt-4 relative text-center">
              <span className="text-3xl font-bold text-white">Free</span>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 relative">
              Select Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative p-6 bg-[#1E293B] rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:blur-lg before:opacity-20 hover:before:opacity-40 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 relative">Pro</h3>
              <ul className="text-white list-disc pl-5 mt-2 space-y-2">
                <li>Unlimited mock interviews</li>
                <li>AI-driven insights & detailed analysis</li>
                <li>Personalized question bank</li>
                <li>Advanced tips and strategies</li>
                <li>Priority email support</li>
                <li>Access to webinars</li>
              </ul>
            </div>
            <div className="mt-4 relative text-center">
              <span className="text-3xl font-bold text-white">$15</span>
              <span className="text-white">/Year</span>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 relative">
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative p-6 bg-[#1E293B] rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:blur-lg before:opacity-20 hover:before:opacity-40 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 relative">Premium</h3>
              <ul className="text-white list-disc pl-5 mt-2 space-y-2">
                <li>Unlimited mock interviews</li>
                <li>1-on-1 expert coaching</li>
                <li>Live feedback & performance tracking</li>
                <li>Comprehensive interview courses</li>
                <li>Exclusive content</li>
                <li>24/7 support</li>
              </ul>
            </div>
            <div className="mt-4 relative text-center">
              <span className="text-3xl font-bold text-white">$30</span>
              <span className="text-white">/Year</span>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 relative">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;