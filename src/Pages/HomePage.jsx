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
    <div ref={ref} className="text-center p-4" data-aos="fade">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {new Intl.NumberFormat().format(count)}
        {suffix}
      </div>
      <div className="text-white text-sm md:text-sm lg:text-base font-medium">
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
    <div className="min-h-screen bg-[#0b0f1c] text-white">
    {/* Hero Section */}
      <div className="container mx-auto px-6 pt-48 lg:pt-56 lg:pb-48 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-[55px] font-bold leading-tight text-white tracking-wide ">
              Are You Looking{" "}
              <span className="block">
                <TypeAnimation
                  sequence={[
                    'To Get Hired?',
                    1000,
                    'To Land Your Job?',
                    1000,
                    // 'To Ace Your Interviews?',
                    // 1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                />
              </span>
            </h1>
            <div className="space-y-6 text-gray-400 leading-relaxed tracking-wide">
              <p className="text-[16px] sm:text-lg">
              Prepare for interviews with AI-powered mock sessions to gain confidence, overcome anxiety, and excel in any role or industry. Get detailed feedback and suggestions to improve your responses, ensuring you're ready to land your dream job.
              </p>
            </div>
            <div data-aos="fade-right">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-5 py-3 text-lg font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
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

          <div data-aos="fade">
            <div className="max-w-xs sm:max-w-lg overflow-hidden mx-auto ml-1 -mt-2 bg-[#0d1221] shadow-lg shadow-cyan-500/10 h-20 sm:h-24 rounded-xl sm:mb-1 mb-28">
              <motion.div
                className="flex space-x-8 justify-center"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <img src="Google.png" alt="Google" className="w-28 h-24 object-contain" /> {/* Reduced image size */}
                <img src="Meta.png" alt="Meta" className="w-28 h-24 object-contain" />
                <img src="Amazon.png" alt="Amazon" className="w-28 h-24 object-contain" />
                <img src="Netflix.png" alt="Netfix" className="w-28 h-24 object-contain" />
                <img src="Mic.png" alt="Microsoft" className="w-28 h-24 object-contain" />
                <img src="Airbnb.png" alt="Microsoft" className="w-28 h-24 object-contain" />
                <img src="Op.png" alt="Microsoft" className="w-28 h-24 object-contain" />

                {/* Duplicate the images to make the animation seamless */}
                <img src="Google.png" alt="Google" className="w-28 h-24 object-contain" /> 
                <img src="Meta.png" alt="Meta" className="w-28 h-24 object-contain" />
                <img src="Amazon.png" alt="Amazon" className="w-28 h-24 object-contain" />
                <img src="Netflix.png" alt="Netfix" className="w-28 h-24 object-contain" />
                <img src="Mic.png" alt="Microsoft" className="w-28 h-24 object-contain" />
                <img src="Airbnb.png" alt="Microsoft" className="w-28 h-24 object-contain" />
                <img src="Op.png" alt="Microsoft" className="w-28 h-24 object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-center -space-x-1 sm:space-x-4 mb-16 text-center" data-aos="fade">
        <button
          onClick={() => setActiveTab('candidates')}
          className={`text-[27px] sm:text-3xl md:text-[33px] font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'candidates'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Candidates
        </button>
        <button
          onClick={() => setActiveTab('companies')}
          className={`text-[27px] sm:text-3xl md:text-[33px] font-bold py-2 px-4 rounded-lg transition duration-200 ${
            activeTab === 'companies'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Companies
        </button>
      </div>


      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors duration-300 flex flex-col h-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
              data-aos="fade"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  className="w-12 h-12 mb-6 text-white flex items-center justify-center"
                  animate={{
                    x: [0, 10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* Animated Stats Section */}
      <div className="container mx-auto px-4 py-16 mb-28">
        <div className="shadow-lg rounded-lg p-10 bg-[#0d1221] shadow-slate-800" >
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

      <div data-aos="fade">
        <h1 className="text-center text-3xl md:text-5xl font-semibold mb-8 md:mb-12">
          Try an Interactive Demo
        </h1>
        <div className="w-full md:w-4/5 lg:w-3/4 mx-auto border border-gray-400 p-6 md:p-12 lg:p-20 rounded-lg mb-20 md:mb-40 h-96 md:h-[500px] lg:h-[560px]">
          <img
            src=""
            alt="Demo Screenshot"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>


        {/* Interview */}
        <div className="min-h-screen  text-white p-8 ">
        <div data-aos="fade">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-center mb-20 sm:mb-32">
            Breeze through your interviews
          </h1>
        </div>

        <div data-aos="fade-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-28 sm:mb-40">
            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">Customize Mock Interviews for any Job Industry</h2>
              <p className="text-gray-400 leading-relaxed ">
                Take charge of your interview preparation journey! Our supercharged Mock Interviewer AI empowers you to
                create custom mock interviews for any job industry. Specify your job title, paste the job description, and
                choose the interview type — Behavioral, Technical, Leadership, or HR. Practice with precision, preparing for
                your upcoming interviews with questions tightly tailored to the provided job description, ensuring a
                comprehensive and job position-specific preparation.
              </p>
            </div>

            {/* Interview List Image */}
            <div className="relative">
              <img
                src=""
                alt="Interview list showing different job positions and their schedules"
                className="rounded-xl w-full h-64 sm:h-80 lg:h-96 object-cover border border-purple-700 shadow-purple-900 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-right">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-28 sm:mb-40">

            {/* Interview List Image */}
            <div className="relative">
              <img
                src=""
                alt="Interview list showing different job positions and their schedules"
                className="rounded-xl w-full h-64 sm:h-80 lg:h-96 object-cover border border-gray-300 shadow-slate-500 shadow-md"
              />
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">Customize Mock Interviews for any Job Industry</h2>
              <p className="text-gray-400 leading-relaxed">
                Take charge of your interview preparation journey! Our supercharged Mock Interviewer AI empowers you to
                create custom mock interviews for any job industry. Specify your job title, paste the job description, and
                choose the interview type — Behavioral, Technical, Leadership, or HR. Practice with precision, preparing for
                your upcoming interviews with questions tightly tailored to the provided job description, ensuring a
                comprehensive and job position-specific preparation.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-28 sm:mb-40">
            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">Customize Mock Interviews for any Job Industry</h2>
              <p className="text-gray-400 leading-relaxed">
                Take charge of your interview preparation journey! Our supercharged Mock Interviewer AI empowers you to
                create custom mock interviews for any job industry. Specify your job title, paste the job description, and
                choose the interview type — Behavioral, Technical, Leadership, or HR. Practice with precision, preparing for
                your upcoming interviews with questions tightly tailored to the provided job description, ensuring a
                comprehensive and job position-specific preparation.
              </p>
            </div>

            {/* Interview List Image */}
            <div className="relative">
              <img
                src=""
                alt="Interview list showing different job positions and their schedules"
                className="rounded-xl w-full h-64 sm:h-80 lg:h-96 object-cover border border-purple-700 shadow-purple-900 shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div data-aos="fade-right">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-28 sm:mb-40">
            {/* Interview List Image */}
            <div className="relative">
              <img
                src=""
                alt="Interview list showing different job positions and their schedules"
                className="rounded-xl w-full h-64 sm:h-80 lg:h-96 object-cover border  border-gray-300 shadow-slate-500 shadow-md"
              />
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">Customize Mock Interviews for any Job Industry</h2>
              <p className="text-gray-400 leading-relaxed">
                Take charge of your interview preparation journey! Our supercharged Mock Interviewer AI empowers you to
                create custom mock interviews for any job industry. Specify your job title, paste the job description, and
                choose the interview type — Behavioral, Technical, Leadership, or HR. Practice with precision, preparing for
                your upcoming interviews with questions tightly tailored to the provided job description, ensuring a
                comprehensive and job position-specific preparation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade">
        <h1 className="text-center text-3xl sm:text-4xl md:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12">
          Unleash Your Career Potential
        </h1>
        <p className="space-y-6 text-gray-400 leading-relaxed tracking-wide text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8 md:mb-10 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
          Land your dream job at your dream company by showcasing your skills, passion, and determination.
          Prepare, stand out, and take the first step toward the career you’ve always wanted.
        </p>

        <div className="max-w-sm sm:max-w-5xl overflow-hidden mx-auto bg-[#0d1221] shadow-lg shadow-cyan-500/10 h-24 sm:h-[120px] rounded-xl mb-32"> {/* Reduced height */}
          <motion.div
            className="flex space-x-12"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <img src="Google.png" alt="Image 1" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Meta.png" alt="Image 2" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Amazon.png" alt="Image 3" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Netflix.png" alt="Image 4" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Mic.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Airbnb.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Op.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />

            {/* Duplicate the images to make the animation seamless */}
            <img src="Google.png" alt="Image 1" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Meta.png" alt="Image 2" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Amazon.png" alt="Image 3" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Netflix.png" alt="Image 4" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Mic.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Airbnb.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
            <img src="Op.png" alt="Image 5" className="w-28 h-32 sm:w-32 sm:h-36 object-contain" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center mb-40">
          <img src="Map1.png" alt="" />
        </div>
      </div>


      {/* <div>
        <h1 className='text-center text-5xl font-semibold mb-12'>Unleash Your Career Potential</h1>
        <p className='text-gray-400 text-xl leading-relaxed text-center mb-16'>Maximizing your skills and talents to achieve professional success and personal growth. 
          It’s about taking charge of your career, embracing new opportunities, and striving for 
          continuous improvement to reach your fullest potential.</p>
          <div className="flex justify-center">
            <button className="mb-32 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-4 text-lg font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Try a Free Mock Interview
            </button>
          </div>
      </div> */}

      <ContactPage />
    </div>
  );
}
