import { useState } from "react";
import { FiArrowLeft, FiDownload, FiPlay, FiPause } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data for demonstration
const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    date: "2023-06-15",
    overallScore: 85,
    technicalScore: 90,
    communicationScore: 80,
    confidenceScore: 85,
    problemSolvingScore: 85,
    questions: [
      {
        question: "Explain the concept of recursion and provide an example.",
        answer:
          "Recursion is a programming concept where a function calls itself to solve a problem by breaking it down into smaller, more manageable pieces. A common example is calculating factorial...",
        feedback:
          "Good explanation of recursion with a relevant example. Consider discussing base cases and potential pitfalls.",
        score: 85,
      },
      {
        question: "What are the key differences between REST and GraphQL?",
        answer:
          "REST and GraphQL are both API architectural styles. REST uses multiple endpoints for different resources, while GraphQL uses a single endpoint. GraphQL allows clients to request specific data...",
        feedback:
          "Excellent comparison of REST and GraphQL. You could improve by mentioning performance considerations and use cases for each.",
        score: 90,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Software Engineer",
    date: "2023-06-16",
    overallScore: 88,
    technicalScore: 92,
    communicationScore: 85,
    confidenceScore: 88,
    problemSolvingScore: 87,
    questions: [
      {
        question: "Explain the concept of recursion and provide an example.",
        answer:
          "Recursion is a technique where a function calls itself to solve a problem. It's often used for tasks that can be broken down into similar subtasks. An example is the Fibonacci sequence...",
        feedback:
          "Very clear explanation with a good example. You could improve by discussing the importance of base cases in recursive functions.",
        score: 88,
      },
      {
        question: "What are the key differences between REST and GraphQL?",
        answer:
          "REST and GraphQL are two approaches to building APIs. REST uses multiple endpoints, each returning fixed data structures. GraphQL, on the other hand, uses a single endpoint and allows clients to request exactly the data they need...",
        feedback:
          "Excellent comparison. You demonstrated a good understanding of both technologies. Consider mentioning real-world scenarios where one might be preferred over the other.",
        score: 92,
      },
    ],
  },
];

const performanceData = [
  { name: "Technical", John: 90, Jane: 92 },
  { name: "Communication", John: 80, Jane: 85 },
  { name: "Confidence", John: 85, Jane: 88 },
  { name: "Problem Solving", John: 85, Jane: 87 },
];

export default function CandidatePerformancePage() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const handleCandidateChange = (candidateId) => {
    const candidate = candidates.find((c) => c.id === parseInt(candidateId));
    if (candidate) {
      setSelectedCandidate(candidate);
    }
  };

  const handleAudioPlayback = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f1c]">
      <main className="flex-1 container pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Page Title and Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Candidate Performance & Reports</h1>
          <div className="flex items-center space-x-4">
            <select
              className="px-4 py-2 border border-gray-800 rounded-lg bg-[#161a26] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => handleCandidateChange(e.target.value)}
            >
              {candidates.map((candidate) => (
                <option key={candidate.id} value={candidate.id.toString()}>
                  {candidate.name}
                </option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-500">
              <FiDownload className="h-4 w-4" />
              <span>Export Report</span>
            </button>
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-[#161a26] text-gray-300 rounded-lg hover:bg-gray-800 border border-gray-800"
              onClick={() => window.history.back()}
            >
              <FiArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* Candidate Details and Performance Chart */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#161a26] rounded-lg shadow p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">{selectedCandidate.name}</h2>
            <p className="text-gray-300 mb-4">
              {selectedCandidate.role} | Interview Date: {selectedCandidate.date}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-bold text-white">{selectedCandidate.overallScore}%</span>
              <span className="text-gray-300">Overall Score</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-300">
                <span>Technical</span>
                <span>{selectedCandidate.technicalScore}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${selectedCandidate.technicalScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Communication</span>
                <span>{selectedCandidate.communicationScore}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${selectedCandidate.communicationScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Confidence</span>
                <span>{selectedCandidate.confidenceScore}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${selectedCandidate.confidenceScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Problem Solving</span>
                <span>{selectedCandidate.problemSolvingScore}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${selectedCandidate.problemSolvingScore}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-[#161a26] rounded-lg shadow p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Performance Comparison</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip contentStyle={{ backgroundColor: "#161a26", border: "1px solid rgba(255, 255, 255, 0.2)" }} />
                  <Legend />
                  <Line type="monotone" dataKey="John" stroke="#a855f7" />
                  <Line type="monotone" dataKey="Jane" stroke="#ec4899" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="bg-[#161a26] rounded-lg shadow p-6 mt-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Detailed Question Review</h2>
          <div className="space-y-4">
            {selectedCandidate.questions.map((q, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-300">Question {index + 1}</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#0b0f1c] p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-400">Question:</h3>
                    <p className="text-gray-300">{q.question}</p>
                  </div>
                  <div className="bg-[#0b0f1c] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-purple-400">Candidate's Answer:</h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <button
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-500"
                        onClick={handleAudioPlayback}
                      >
                        {isPlaying ? <FiPause className="h-4 w-4" /> : <FiPlay className="h-4 w-4" />}
                        <span>Playback</span>
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={audioProgress}
                        className="w-full"
                        disabled
                      />
                    </div>
                    <p className="text-gray-300">{q.answer}</p>
                  </div>
                  <div className="bg-[#0b0f1c] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-purple-400">AI Feedback:</h3>
                    <p className="text-gray-300">{q.feedback}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-300">Score:</span>
                        <div className="h-2 bg-gray-800 rounded-full">
                          <div
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            style={{ width: `${q.score}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-300">{q.score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisting Panel */}
        <div className="bg-[#161a26] rounded-lg shadow p-6 mt-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-white">Shortlisting Panel</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-300">Candidate</th>
                  <th className="text-left py-3 px-4 text-gray-300">Overall Score</th>
                  <th className="text-left py-3 px-4 text-gray-300">Technical</th>
                  <th className="text-left py-3 px-4 text-gray-300">Communication</th>
                  <th className="text-left py-3 px-4 text-gray-300">Confidence</th>
                  <th className="text-left py-3 px-4 text-gray-300">Problem Solving</th>
                  <th className="text-left py-3 px-4 text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white">{candidate.name}</td>
                    <td className="py-3 px-4 text-white">{candidate.overallScore}%</td>
                    <td className="py-3 px-4 text-white">{candidate.technicalScore}%</td>
                    <td className="py-3 px-4 text-white">{candidate.communicationScore}%</td>
                    <td className="py-3 px-4 text-white">{candidate.confidenceScore}%</td>
                    <td className="py-3 px-4 text-white">{candidate.problemSolvingScore}%</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                          Shortlist
                        </button>
                        <button className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                          Reject
                        </button>
                        <button className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                          Follow-Up
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}