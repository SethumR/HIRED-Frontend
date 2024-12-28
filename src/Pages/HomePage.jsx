import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaPhoneAlt, FaFileAlt, FaMapMarkerAlt, FaBuilding, FaVolumeUp } from 'react-icons/fa';
import ContactPage from './ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


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
    <div ref={ref} className="text-center p-4" data-aos="fade-up">
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

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Trigger animation only once
    });
  }, []);

  const candidateFeatures = [
    {
      icon: FaBrain,
      title: "Smart Interview Simulation",
      description: "Our advanced AI bot is trained to conduct realistic mock interviews, simulating various scenarios and industries."
    },
    {
      icon: FaPhoneAlt,
      title: "Audio Mock Interview Simulations",
      description: "Conduct AI-driven audio interviews simulating real scenarios. Get personalized feedback and performance analysis in real-time."
    },
    {
      icon: FaFileAlt,
      title: "Personalized Script Customization",
      description: "Craft personalized interview scripts tailored to specific roles and career goals. Empower users with relevant, role-specific preparation."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Practice Anytime, Anywhere",
      description: "Access our platform anytime, on any device, allowing you to hone your skills at your own pace and convenience."
    },
    {
      icon: FaBuilding,
      title: "Automated Feedback with Scoring",
      description: "Get instant AI feedback with scoring to track progress, identify strengths, and improve performance."
    },
    {
      icon: FaVolumeUp,
      title: "Resource for Continuous Learning",
      description: "Access curated resources linked to feedback to refine skills, bridge knowledge gaps, and enhance learning."
    }
  ];

  const companyFeatures = [
    {
      icon: FaBrain,
      title: "Smart Interview Simulation",
      description: "Our advanced AI bot is trained to conduct realistic mock interviews, simulating various scenarios and industries."
    },
    {
      icon: FaFileAlt,
      title: "Pre-record Interview Questions",
      description: "Offer pre-recorded interview questions with model answers to facilitate standardized evaluations for recruiters and candidates."
    },
    {
      icon: FaPhoneAlt,
      title: "Automated interview Screening ",
      description: "Recruiters can send pre-recorded automated, structured video interviews to candidates to streamline and optimize the initial screening process."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Anytime, Anywhere, without limits",
      description: "Access our platform anytime, on any device, allowing you to hone your skills at your own pace and convenience."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Score-Based Candidate Filtering",
      description: "Efficiently assess and filter candidates based on predefined criteria, such as skills, experience, and interview performance, to ensure a better match for the role."
    },
    {
      icon: FaVolumeUp,
      title: "Performance Reports and  Metrics",
      description: "Generate detailed performance reports analyzing communication, technical proficiency, and role suitability, highlighting strengths and areas for improvement."
    }
  ];

  const features = activeTab === 'candidates' ? candidateFeatures : companyFeatures;

  return (
    <div className="min-h-screen bg-[#0E1526] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-48  lg:pt-60 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white tracking-wide">
              Are You Looking{" "}
              <span className="block">
                <TypeAnimation
                  sequence={[
                    'To Get Hired?',
                    1000,
                    'To Land Your Dream Job?',
                    1000,
                    'To Ace Your Interviews?',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
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
            <div data-aos="fade-right">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-4 text-lg font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Try a Free Mock Interview
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block relative">
            <img
              // src="HIRED.png"
              alt="AI Interview Assistant"
              className="w-full max-w-[500px] mx-auto transform transition duration-700 hover:scale-105"
              data-aos="zoom-in"
            />
            <div className="absolute -z-10 inset-0 bg-purple-500 blur-[100px] opacity-30"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 text-center" data-aos="fade-up">
        <button
          onClick={() => setActiveTab('candidates')}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'candidates'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Candidates
        </button>
        <button
          onClick={() => setActiveTab('companies')}
          className={`text-xl sm:text-2xl md:text-3xl font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'companies'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Companies
        </button>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300 h-full"
              data-aos="flip-up"
              style={{ height: '320px' }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  className="w-12 h-12 mb-7 text-white flex items-center justify-center"
                  animate={{
                    x: [0, 10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    }
                  }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="container mx-auto px-4 py-16 mb-4">
        <div className="shadow-lg rounded-lg p-10 bg-[#0E1526] shadow-slate-800" data-aos="fade-up">
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
      </div>


      {/* Prototype Section */}
      <div className="flex justify-center items-center h-screen mb-12">
         <img src="Prototype.png" alt="Prototype" className="h-96 w-auto sm:h-[500px] sm:w-auto" />
      </div>


      <div className="max-w-6xl mx-auto p-4 mb-32">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }} data-aos="zoom-in">
          <iframe
            src="https://www.youtube.com/embed/xNu5wGP3UgA "
            title="Prepare for your Interview!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
      <ContactPage />
    </div>
  );
}
