import React from 'react'

function Upgrade() {
  return (
    <div className='mt-28'>
      <h1 className='text-white'>Upgrade page </h1>
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
     


     
    </div>
  )
}

export default Upgrade