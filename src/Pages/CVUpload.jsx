import React from "react";
import { ArrowRight, Upload, Bot, Edit, Check } from "lucide-react";

export default function CVUpload() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 mt-20">Generate Your AI-Powered Introduction</h1>
            <p className="text-gray-600 text-lg">
              Transform your resume into a compelling self-introduction in seconds
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex justify-center items-center gap-2 mb-12">
            <div className="flex items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Upload className="w-4 h-4" />
              </div>
              <span className="ml-2">Upload Resume</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <span className="ml-2">AI Processing</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Edit className="w-4 h-4" />
              </div>
              <span className="ml-2">Edit Script</span>
            </div>
          </div>

          {/* Upload and Preview Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="p-8 border-dashed border-2 border-gray-200">
              <div className="text-center">
                <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-gray-600 mb-4">Drag and drop your resume file here, or click to browse</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Browse Files</button>
                <p className="text-sm text-gray-500 mt-4">Supported formats: PDF, DOCX (Max 10MB)</p>
              </div>
            </div>

            {/* Preview Area */}
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Your AI-Generated Script</h3>
              <p className="text-gray-600 mb-8">
                Your professional introduction will appear here after processing your resume...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">0 words</span>
                <div className="space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded">Download</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Generate Script</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 p-6 bg-blue-50">
            <h3 className="font-semibold mb-4">Tips for Better Results</h3>
            <ul className="space-y-2">
              {[
                "Ensure your resume is up-to-date",
                "Include relevant skills and experiences",
                "Highlight key achievements",
              ].map((tip) => (
                <li key={tip} className="flex items-center text-gray-700">
                  <Check className="w-4 h-4 text-blue-600 mr-2" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "How does the AI generate the script?",
                  a: "Our AI analyzes your resume to create a natural, professional introduction highlighting your key experiences and skills.",
                },
                {
                  q: "Can I edit the generated script?",
                  a: "Yes, you can edit and customize the AI-generated script to better match your style and preferences.",
                },
                {
                  q: "Is my resume data secure?",
                  a: "We take data security seriously. Your resume is encrypted and automatically deleted after processing.",
                },
                {
                  q: "What file formats are supported?",
                  a: "We currently support PDF and DOCX file formats for resume uploads.",
                },
              ].map((faq) => (
                <div key={faq.q} className="p-6 border rounded">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
