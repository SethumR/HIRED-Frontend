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
    <div>
      {/* Content in here */}
    </div>
  );
};
export default InterviewAI;