import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sethum Ruberu",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com/SethumR",
      image: "Sethum.png", 
    },
    {
      name: "Sasindri Siriwardane",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      image: "/placeholder.svg?height=400&width=400", 
    },
    {
      name: "Rehan Mandawala",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      image: "/placeholder.svg?height=400&width=400", 
    },
    {
      name: "Kavindu Gunathilake",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      image: "/placeholder.svg?height=400&width=400", 
    },
    {
      name: "Nehan Karunarathne",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      image: "/placeholder.svg?height=400&width=400", 
    },
    {
      name: "Tilan Wishwajith",
      position: "Co-founder",
      description: "2nd year undergraduate student at University of Westminster",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      image: "/placeholder.svg?height=400&width=400", 
    },
  ];

  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Group collaboration" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Classroom setting" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Break room discussion" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Meeting room view" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Discussion at desk" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Classroom wide view" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Group study session" },
    { src: "/placeholder.svg?height=300&width=400", alt: "One-on-one mentoring" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Presentation in progress" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 3
    );
  };

  const displayedImages = teamMembers.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-[#0E1526]">
      {/* About Project Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-white mb-8">
            What our Solution focuses on
          </h1>
          <button className="inline-flex items-center px-8 py-3 rounded-full bg-slate-200 transition-colors text-lg shadow-lg">
            <span className="mr-2">⚡</span>
            Get to know more about us
          </button>
        </div>


        <div >
          <div className="bg-[#1d2638] rounded-3xl p-12  flex flex-col relative shadow-xl h-[450px]">
            <div className="pr-24">
              <h2 className="text-white text-4xl font-bold mb-4 ">
                You’ve heard about our AI mock interview platform, but what
                exactly is it all about?
              </h2>
              <p className="text-white/90 text-lg">
                Discover how our project aims to revolutionize interview
                preparation through AI-powered simulations, personalized
                feedback, and innovative tools. From enhancing your
                communication skills to analyzing body language and building
                confidence, we provide everything you need to succeed in your
                career journey.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-80 h-80">
              <img
                src=""
                alt="Contact"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-white mb-12">Meet Our Team</h1>
          <p className="text-xl mb-10 leading-9 font-light text-slate-200 text-left">
            We are second-year undergraduate students at the Institute of
            Information Technology (IIT), University of Westminster, pursuing
            the CS-145 course. Our team is dedicated to bringing innovative
            solutions to the field of interview preparation through AI.
          </p>
          <p className="text-xl mb-10 leading-9 font-light text-slate-200 text-left">
            A big thank you to Mr. Banu Athuraliya and Mr. Suresh Peris for
            conducting and guiding us throughout this project. Their support
            has been invaluable in shaping our ideas into a tangible product.
          </p>
          <p className="text-xl mb-10 leading-9 font-light text-slate-200 text-left mb-24">
            Our AI Mock Interviewer platform, HIRED, is designed to help users
            prepare for real-world interviews through AI-powered simulations.
            The platform offers personalized feedback, body language analysis,
            and other innovative features aimed at enhancing communication skills
            and boosting confidence for job seekers.
          </p>
        </div>

        {/* 1-Column Layout for Team Member */}
        <div className="flex justify-center items-center space-x-8 ">
          <button
            onClick={prevSlide}
            className="bg-gray-600 text-white rounded-full p-3 hover:bg-gray-700"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* Three separate boxes for images and descriptions */}
          {displayedImages.map((member, index) => (
            <div
              key={index}
              className="bg-[#1d2638] rounded-lg p-8 shadow-xl w-96 transform transition-transform hover:scale-105 duration-300"
            >
              <img
                src={member.image}
                alt={`Team member ${currentIndex + index}`}
                className="w-72 h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 text-white">{member.position}</p>
              <p className="text-gray-700 mt-4 text-white">{member.description}</p>
              <div className="flex justify-center space-x-6 mt-6">
                <a
                    href={member.linkedin}
                    className="text-white transform hover:scale-110 transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={22} />
                </a>
                <a
                    href={member.github}
                    className="text-white transform hover:scale-110 transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub size={22} />
                </a>
            </div>
            </div>
          ))}

          <button
            onClick={nextSlide}
            className="bg-gray-600 text-white rounded-full p-3 hover:bg-gray-700"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
      </div><br/><br/><br/>
    </div>
  );
}
