import React from 'react';

function Upgrade() {
  return (

        <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* Plan Card Component */}
          {[
            {
              name: "Basic",
              price: "Free",
              features: [
                "Limited to 20 mock interviews per month",
                "AI-generated feedback",
                "Access to common interview questions",
                "Email support",
                "Basic tips and tricks",
              ],
            },
            {
              name: "Pro",
              price: "$15",
              features: [
                "Unlimited mock interviews",
                "AI-driven insights & detailed analysis",
                "Personalized question bank",
                "Advanced tips and strategies",
                "Priority email support",
                "Access to webinars",
              ],
            },
            {
              name: "Premium",
              price: "$30",
              features: [
                "Unlimited mock interviews",
                "1-on-1 expert coaching",
                "Live feedback & performance tracking",
                "Comprehensive interview courses",
                "Exclusive content",
                "24/7 support",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#1E293B] rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300 border border-gray-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:blur-lg before:opacity-20 hover:before:opacity-40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 relative">
                  {plan.name}
                </h3>
                <ul className="text-white list-disc pl-5 mt-2 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 relative text-center">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-white"> /Year</span>}
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-purple-600 focus:outline-none focus:ring focus:ring-purple-300">
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
