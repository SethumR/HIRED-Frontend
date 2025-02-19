import React from "react";
import { Link } from "react-router-dom";
import { Building2, ChevronRight, PieChart, Settings, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">InterviewAI</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-blue-600" to="#">
              Dashboard
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" to="/job-roles-setup">
              Job Roles & Setup
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" to="/reports-performance">
              Reports & Performance
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" to="#">
              Settings & Team
            </Link>
            <Link className="text-sm font-medium hover:text-blue-600" to="/profile">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-6 px-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Dashboard Cards */}
          {dashboardStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-medium">{stat.title}</h2>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mt-2">{stat.value}</div>
              {stat.progress && (
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              )}
              {stat.description && <p className="text-xs text-gray-500 mt-2">{stat.description}</p>}
            </div>
          ))}
        </div>

        {/* Recent Candidate Submissions Table */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Candidate Submissions</h2>
          <div className="overflow-hidden rounded-lg shadow-md bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Candidate Name</th>
                  <th className="px-4 py-2 text-left">Job Role</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">AI Score</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-t">
                    <td className="px-4 py-2">{candidate.name}</td>
                    <td className="px-4 py-2">{candidate.role}</td>
                    <td className="px-4 py-2">{candidate.status}</td>
                    <td className="px-4 py-2">{candidate.score}</td>
                    <td className="px-4 py-2">
                      <Link
                        to={`/candidate-performance?id=${candidate.id}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Report
                      </Link>
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

// Dashboard Stats Data
const dashboardStats = [
  {
    title: "Total Interviews",
    value: "128",
    progress: 75,
    description: "75% completed",
    icon: <PieChart className="h-4 w-4 text-gray-500" />,
  },
  {
    title: "Active Interviews",
    value: "32",
    description: "12 in progress",
    icon: <Users className="h-4 w-4 text-gray-500" />,
  },
  {
    title: "Completed Interviews",
    value: "96",
    description: "24 new reports available",
    icon: <ChevronRight className="h-4 w-4 text-gray-500" />,
  },
  {
    title: "Upcoming Interviews",
    value: "18",
    description: "5 scheduled for today",
    icon: <Settings className="h-4 w-4 text-gray-500" />,
  },
];

// Recent Candidates Data
const candidates = [
  { id: 1, name: "Alice Johnson", role: "Software Engineer", status: "Completed", score: "85%" },
  { id: 2, name: "Bob Smith", role: "Product Manager", status: "In Progress", score: "N/A" },
  { id: 3, name: "Charlie Brown", role: "UX Designer", status: "Scheduled", score: "N/A" },
  { id: 4, name: "Diana Lee", role: "Data Analyst", status: "Completed", score: "92%" },
  { id: 5, name: "Ethan Hunt", role: "Marketing Specialist", status: "In Progress", score: "N/A" },
];
