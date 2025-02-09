import { Bell, ChevronRight, Settings } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/candidate%20dashboard%20UI-U3IZroEJ8Vl1XTpfa5al4ZLF57qr2u.png"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold">Sarah Wilson</h2>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {/* Performance Overview */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Performance Overview</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {["Technical", "Communication", "Confidence"].map((skill, index) => (
                  <div key={skill} className="bg-white p-6 rounded-lg shadow">
                    <div className="text-sm text-gray-600">{skill}</div>
                    <div className="text-3xl font-bold">{[85, 92, 78][index]}%</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparation Progress */}
            <section>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-sm font-medium">Preparation Progress</h4>
                <span className="text-sm text-gray-600">75%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </section>

            {/* AI Feedback */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Latest AI Feedback</h3>
              <div className="space-y-3">
                {[
                  "Structure your answers using the STAR method",
                  "Provide more specific examples in technical responses",
                  "Maintain consistent eye contact during video interviews",
                ].map((feedback, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg border bg-white p-4">
                    <div className="mt-1 h-4 w-4 rounded bg-blue-100" />
                    <p>{feedback}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Past Interviews */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Past Interviews</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { company: "DataTech", date: "Feb 15", score: 88 },
                  { company: "CloudSys", date: "Feb 10", score: 92 },
                ].map((interview, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{interview.company}</div>
                      <div className="text-sm text-gray-600">{interview.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">{interview.score}% Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Upcoming Interviews</h3>
              <div className="space-y-4">
                {[
                  { company: "TechCorp", role: "Senior Software Engineer", time: "Tomorrow, 2:00 PM", initials: "TC" },
                  { company: "InnovateLabs", role: "Full Stack Developer", time: "Feb 28, 11:00 AM", initials: "IL" },
                ].map((interview, index) => (
                  <div key={index} className="bg-white rounded-lg shadow">
                    <a href="#" className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                        {interview.initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{interview.company}</div>
                        <div className="text-sm text-gray-600">{interview.role}</div>
                        <div className="text-sm text-gray-600">{interview.time}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Mock Interview Button */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Start Mock Interview
            </button>

            {/* Recommended */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Recommended</h3>
                <a href="#" className="text-sm text-blue-600">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                {[
                  { title: "System Design Interview Guide", type: "Article", icon: "📄" },
                  { title: "Behavioral Questions Masterclass", type: "Video", icon: "🎥" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow">
                    <a href="#" className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border">{item.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.type}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

