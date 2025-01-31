import React from "react";

function Upgrade() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b0f1c] p-6">
      <div className="w-full max-w-6xl p-10 bg-[#0b0f1c] rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-white text-transparent bg-clip-text mb-4 leading-snug mt-12">
          Upgrade Your Experience
        </h2>
        <p className="text-center text-gray-300 text-xl ">
          Unlock exclusive features and take your interview preparation to the next level.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            name: "Basic",
            price: "Free",
            features: [
              "20 mock interviews/month",
              "AI-generated feedback",
              "Common interview questions",
              "Email support",
              "Basic tips & tricks",
              "Interview progress tracking",
              "24/7 priority support",
              "Resume formatting tips",
            ],
          },
          {
            name: "Pro",
            price: "$15",
            features: [
              "Unlimited mock interviews",
              "AI-driven insights & analysis",
              "Personalized question bank",
              "Advanced strategies",
              "Priority email support",
              "24/7 priority support",
              "Role-specific interview sets",
              "AI-powered voice tone analysis",
            ],
          },
          {
            name: "Premium",
            price: "$30",
            features: [
              "Unlimited mock interviews",
              "1-on-1 expert coaching",
              "Live feedback & tracking",
              "Comprehensive courses",
              "Exclusive resources",
              "24/7 priority support",
              "Mock panel interviews",
              "Private career counseling session",
            ],
          },
          ].map((plan, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-gray-800 shadow-lg bg-opacity-10 backdrop-blur-xl transition-transform transform hover:scale-105 duration-300"
              style={{
                background: "#161a26",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-center">{plan.name}</h3>
              <ul className="text-gray-300 mt-4 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-purple-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-400"> /Year</span>}
              </div>
              <button className="mt-6 w-full py-3 rounded-lg font-medium transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/20">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;