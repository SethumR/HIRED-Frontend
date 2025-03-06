import React, { useState } from 'react';
const InterviewAI = () => {
  const [industry, setIndustry] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [questionDifficulty, setQuestionDifficulty] = useState('Medium');

  // Mock data
  const industries = [
    'Technology',
    'Finance',
    'Healthcare',
    'Marketing',
    'Engineering'
  ];
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  return (
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4" style={{ marginTop: '100px' }}>
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Customize Your Mock Interview</h1>
          <p className="text-center text-gray-600 mb-8">Fill in the details below to generate a personalized interview experience</p>
          
          <div className="space-y-6">
            {/* Industry Selection */}
            <div>
              <label className="block text-gray-700 mb-2">Industry</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="">Select an industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            
            {/* Job Role */}
            <div>
              <label className="block text-gray-700 mb-2">Job Role</label>
              <input 
                type="text" 
                placeholder="e.g. Software Engineer, Data Scientist" 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
  
  
  )
  
};
export default InterviewAI;