import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaPhoneAlt, FaFileAlt, FaMapMarkerAlt, FaBuilding, FaVolumeUp } from 'react-icons/fa';

// Animated Stat Component
function AnimatedStat({ endValue, label, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = endValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, endValue]);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {new Intl.NumberFormat().format(count)}
        {suffix}
      </div>
      <div className="text-white text-xs md:text-sm lg:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('candidates'); // Manage active tab
  const features = [
    {
      icon: FaBrain,
      title: "Smart Interview Simulation",
      description: "Our advanced AI bot is trained to conduct realistic mock interviews, simulating various scenarios and industries."
    },
    {
      icon: FaPhoneAlt,
      title: "Audio Mock Interview Simulations",
      description: "Conduct AI-driven audio interviews simulating real scenarios. Get personalized feedback and performance analysis in real-time. Boost confidence and excel in professional interviews"
    },
    {
      icon: FaFileAlt,
      title: "Personalized  Script Customization",
      description: " Craft personalized interview scripts tailored to specific roles and career goals. Empower users with relevant, role-specific preparation."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Practice Anytime, Anywhere",
      description: "Seamlessly integrate interview practice into your busy schedule. Access our platform anytime, on any device, allowing you to hone your skills at your own pace and convenience."
    },
    {
      icon: FaBuilding,
      title: "Automated Feedback with Scoring",
      description: "Get instant AI feedback with scoring to track progress, identify strengths, improve performance, refine skills, and boost confidence for real-world success."
    },
    {
      icon: FaVolumeUp,
      title: "Resource for Continuous Learning",
      description: "Access curated resources linked to feedback to refine skills, bridge knowledge gaps, enhance learning, accelerate career growth, and build confidence for future success."
    }
  ];

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

      {/* Tab Heading Section */}
      <div className="flex justify-center space-x-8 mb-10 text-center ">
        <button
          onClick={() => setActiveTab('candidates')}
          className={`text-3xl font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'candidates'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700 '
          }`}
        >
          Candidates
        </button>
        <button
          onClick={() => setActiveTab('companies')}
          className={`text-3xl font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'companies'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Companies
        </button>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 mb-4 text-white" />
                  <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="shadow-lg rounded-lg p-10 bg-[#0E1526] shadow-slate-800	">
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              <AnimatedStat endValue={150000} label="Interviews Conducted in 2023" />
              <AnimatedStat endValue={120000} label="Candidates Passed Interviews" />
              <AnimatedStat endValue={30000} label="Candidates Rejected" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <AnimatedStat endValue={85} label="Success Rate" suffix="%" />
              <AnimatedStat endValue={50} label="Average Interviews Taken per Candidate" />
            </div>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/>


      <div className="max-w-6xl mx-auto p-4">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/SJKr7BPOXY0"
          title="Prepare for your Interview!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
      <div className="mt-4">
        <p className="mt-2 text-gray-500">
          Watch this inspiring video about making learning accessible for everyone.
        </p>
      </div>
    </div><br/><br/><br/>

    
    </div> 
  ); 
}
