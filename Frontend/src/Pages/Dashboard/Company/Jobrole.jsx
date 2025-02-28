import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSpinner, FaCheck, FaTrash, FaPlus } from "react-icons/fa";

const jobRoles = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "Marketing Specialist"];
const interviewTypes = ["Technical", "Behavioral", "System Design", "Case Study", "Mixed"];
const experienceLevels = ["Entry Level", "Mid Level", "Senior", "Lead", "Principal"];

export default function JobRolesSetupPage() {
  const [step, setStep] = useState(1);
  const [interviewLink, setInterviewLink] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    interviewType: "",
    experienceLevel: "",
    questions: [{ question: "", answer: "" }],
  });

  useEffect(() => {
    if (step === 3) {
      setIsGenerating(true);
      const timer = setTimeout(() => {
        setIsGenerating(false);
        setInterviewLink(`https://interview.ai/${Math.random().toString(36).substr(2, 9)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleQuestionChange(index, field, value) {
    const newQuestions = [...formData.questions];
    newQuestions[index][field] = value;
    setFormData((prev) => ({ ...prev, questions: newQuestions }));
  }

  function addQuestion() {
    setFormData((prev) => ({ ...prev, questions: [...prev.questions, { question: "", answer: "" }] }));
  }

  function removeQuestion(index) {
    const newQuestions = formData.questions.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, questions: newQuestions }));
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f1c] p-6">
      <main className="flex-1 container pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Job Role & Interview Setup</h1>
          <Link to="/DashboardPage" className="flex items-center px-4 py-2 rounded bg-gray-800 text-purple-400 hover:text-purple-300 transition-colors">
            <FaArrowLeft className="mr-2" /> Back to Dashboard
          </Link>
        </div>

        <div className="mb-8 flex space-x-4">
          {[1, 2, 3].map((s) => (
            <button key={s} className={`px-6 py-3 rounded-lg flex-1 transition-all ${s === step ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`} onClick={() => setStep(s)}>
              Step {s}
              <span className="block text-sm mt-1 opacity-75">{s === 1 ? 'Basic Info' : s === 2 ? 'Questions' : 'Review'}</span>
            </button>
          ))}
        </div>

        {step === 1 && (
          <div className="border border-gray-800 p-8 rounded-lg bg-gray-900 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Step 1: Define Interview Parameters</h2>
            <label className="block text-white mb-2">Job Role</label>
            <select name="title" value={formData.title} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-800 text-white">
              <option value="">Select a role</option>
              {jobRoles.map((role) => (<option key={role} value={role}>{role}</option>))}
            </select>

            <label className="block text-white mb-2">Interview Type</label>
            <select name="interviewType" value={formData.interviewType} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-800 text-white">
              <option value="">Select interview type</option>
              {interviewTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
            </select>

            <label className="block text-white mb-2">Experience Level</label>
            <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="w-full p-2 mb-4 rounded bg-gray-800 text-white">
              <option value="">Select experience level</option>
              {experienceLevels.map((level) => (<option key={level} value={level}>{level}</option>))}
            </select>
            
            <button onClick={() => setStep(2)} className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="border border-gray-800 p-8 rounded-lg bg-gray-900 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Step 2: Define Interview Questions</h2>
            {formData.questions.map((q, index) => (
              <div key={index} className="mb-4">
                <input type="text" placeholder="Question" value={q.question} onChange={(e) => handleQuestionChange(index, "question", e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" />
                <textarea placeholder="Answer" value={q.answer} onChange={(e) => handleQuestionChange(index, "answer", e.target.value)} className="w-full p-2 rounded bg-gray-800 text-white"></textarea>
                <button onClick={() => removeQuestion(index)} className="mt-2 text-red-400 hover:text-red-300"><FaTrash /></button>
              </div>
            ))}
            <button onClick={addQuestion} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"><FaPlus className="mr-2" /> Add Question</button>
            <div className="flex space-x-4 mt-4">
              <button onClick={handlePrevious} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Previous</button>
              <button onClick={() => setStep(3)} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Next</button>
            </div>
          </div>
        )}

{step === 3 && (
          <div className="border border-gray-800 p-8 rounded-lg bg-gray-900 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Step 3: Review & Generate Interview</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-800 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Interview Details</h3>
                  <p className="text-white">Role: {formData.title}</p>
                  <p className="text-white">Type: {formData.interviewType}</p>
                  <p className="text-white">Level: {formData.experienceLevel}</p>
                </div>
                <div className="p-4 border border-gray-800 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Questions</h3>
                  <p className="text-white">{formData.questions.length} questions defined</p>
                </div>
              </div>
              {isGenerating ? (
                <div className="text-center py-8">
                  <FaSpinner className="animate-spin text-purple-500 text-4xl mx-auto mb-4" />
                  <p className="text-gray-300">Generating your interview setup...</p>
                </div>
              ) : interviewLink ? (
                <div className="text-center py-8 space-y-4">
                  <FaCheck className="text-green-500 text-4xl mx-auto" />
                  <p className="text-white">Your interview has been generated!</p>
                  <a href={interviewLink} className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">Start Interview</a>
                </div>
              ) : null}
            </div>
            <div className="flex space-x-4 mt-4">
              <button onClick={handlePrevious} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Previous</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

