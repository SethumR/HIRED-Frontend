import React from "react";
import { FiUser, FiFileText, FiClock } from "react-icons/fi";
import { MdAssessment, MdTimer } from "react-icons/md";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

export default function Candidate() {
  return (
    <div className="container mx-auto p-4 max-w-7xl  text-white">
      {/* Interview prompt card & Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-36 mb-8 mx-auto">
        <div className="lg:col-span-3 border border-gray-600 rounded-3xl p-4 w-full sm:w-[650px] lg:w-[840px] h-[250px] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-1">
                Ready for your next interview?
            </h2>
            <p className="text-purple-100 mb-4">
                Start a mock interview session now
            </p>
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center hover:scale-105">
                <span className="mr-2">▶</span> Start Interview
            </button>
        </div>

        {/* Profile Overview */}
        <div className="lg:col-span-1 bg-white text-black rounded-xl p-6 shadow-sm border w-full sm:w-[380px] h-[460px]">
          <h3 className="text-xl font-semibold mb-6">Profile Overview</h3>
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl font-semibold mb-4">
              JD
            </div>
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-gray-600">Software Engineer</p>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Completed Interviews</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Score</span>
              <span className="font-semibold">88%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Practice Time</span>
              <span className="font-semibold">8.5 hrs</span>
            </div>
          </div>
          <button className="w-full text-purple-600 border border-purple-200 hover:bg-purple-50 px-4 py-2 rounded-lg font-semibold transition-all">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Interviews",
            value: "12",
            subtitle: "Last 30 days",
            icon: <FiUser className="h-5 w-5 text-indigo-400" />,
          },
          {
            title: "Average Score",
            value: "85%",
            subtitle: "All interviews",
            icon: <MdAssessment className="h-5 w-5 text-indigo-400" />,
          },
          {
            title: "Skills Improved",
            value: "8",
            subtitle: "Top skills",
            icon: <FiFileText className="h-5 w-5 text-indigo-400" />,
          },
          {
            title: "Practice Time",
            value: "24h",
            subtitle: "Total time",
            icon: <MdTimer className="h-5 w-5 text-indigo-400" />,
          },
        ].map((item, index) => (
          <div key={index} className="bg-white text-black shadow-md rounded-xl p-4 transition-all hover:bg-purple-50 hover:shadow-xl">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
              {item.icon}
            </div>
            <div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-xs text-gray-400">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Interviews Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 max-w-full lg:max-w-[58rem]">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Recent Interviews</h3>
            <button className="text-purple-500 hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {[
              {
                role: "Software Engineer",
                date: "Mar 15, 2024",
                duration: "45 min",
                score: "85%",
              },
              {
                role: "Product Manager",
                date: "Mar 12, 2024",
                duration: "30 min",
                score: "92%",
              },
            ].map((interview, index) => (
              <div key={index} className="bg-white text-black rounded-xl p-6 shadow-sm border transition-all hover:shadow-xl hover:bg-purple-50">
                <div className="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full w-fit mb-3">
                  {interview.role}
                </div>
                <h4 className="text-lg font-semibold mb-3">Mock Interview</h4>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaRegCalendarAlt className="w-4 h-4" />
                      {interview.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegClock className="w-4 h-4" />
                      {interview.duration}
                    </span>
                  </div>
                  <span className="text-lg font-semibold">{interview.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
