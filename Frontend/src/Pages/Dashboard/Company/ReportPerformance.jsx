import { Link } from "react-router-dom";
import { FaArrowLeft, FaChartBar, FaChartPie, FaUsers, FaChartLine } from "react-icons/fa";

export default function ReportsPerformancePage() {
  return (
    <main className="flex-1 container pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0b0f1c]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Reports & Performance</h1>
        <Link to="/companydashboard" className="flex items-center px-4 py-2 rounded bg-[#161a26] text-purple-400 hover:text-purple-300 transition-colors border border-gray-800">
          <FaArrowLeft className="mr-2" /> Back to Dashborad
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl shadow-lg bg-[#161a26] p-6 border border-gray-800 transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Candidate Performance</h2>
          <p className="mb-4 text-sm text-gray-300">
            Detailed analysis of individual candidate performance and AI-generated feedback.
          </p>
          <Link to="/candidateperformancepage" className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all">
            <FaChartBar className="mr-2 h-4 w-4" />
            View Reports
          </Link>
        </div>
        <div className="rounded-2xl shadow-lg bg-[#161a26] p-6 border border-gray-800 transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Interview Analytics</h2>
          <p className="mb-4 text-sm text-gray-300">
            Overall statistics and trends from all conducted interviews.
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all">
            <FaChartPie className="mr-2 h-4 w-4" />
            View Analytics
          </button>
        </div>
      </div>
    </main>
  );
}