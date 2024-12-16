// import Image from "next/image"

export default function Homepage() {
    return (
      <div className="min-h-screen bg-[#0E1526] text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-48 pb-32 lg:pt-60 lg:pb-48">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white tracking-wide">
                Are You Looking{" "}
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  To Get Hired?
                </span>
              </h1>
              <div className="space-y-6 text-gray-400 leading-relaxed tracking-wide">
                <p className="text-lg">
                  Prepare for your interviews with real-time voice-to-voice mock
                  interviews powered by the world&apos;s most advanced AI.
        
                  Say goodbye to interview performance anxiety. Master any role,
                  level, and industry to land your Dream Job.
      
                  Get detailed feedback on your answers with actionable suggestions
                  to improve them.
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-4 text-lg font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Try a Free Mock Interview
              </button>
            </div>
  
            {/* Image Section */}
            <div className="hidden lg:block relative">
              <img
                src="/robot.png" // Ensure this image is in the public folder
                alt="AI Interview Assistant"
                className="w-full max-w-[500px] mx-auto transform transition duration-700 hover:scale-105"
              />
              <div className="absolute -z-10 inset-0 bg-purple-500 blur-[100px] opacity-30"></div>
            </div>
          </div>
        </div>
  
        {/* Tabs Section */}
        <div className="container mx-auto px-4 py-8 flex justify-center gap-8 text-xl">
          <button className="text-purple-500 font-semibold">Candidates</button>
          <button className="text-gray-400 hover:text-gray-300 transition duration-300">
            Companies
          </button>
        </div>
  
        {/* Features Grid */}
        
      </div>
    );
  }
  