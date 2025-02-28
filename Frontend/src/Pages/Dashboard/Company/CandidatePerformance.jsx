"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Download, Play, Pause } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

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
]

const performanceData = [
  { name: "Technical", John: 90, Jane: 92 },
  { name: "Communication", John: 80, Jane: 85 },
  { name: "Confidence", John: 85, Jane: 88 },
  { name: "Problem Solving", John: 85, Jane: 87 },
]

export default function CandidatePerformancePage() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(0)
  const router = useRouter()

  const handleCandidateChange = (candidateId) => {
    const candidate = candidates.find((c) => c.id === Number.parseInt(candidateId))
    if (candidate) {
      setSelectedCandidate(candidate)
    }
  }

  const handleAudioPlayback = () => {
    setIsPlaying(!isPlaying)
    // Simulating audio progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 100)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <nav className="flex items-center space-x-4">
            <Select onValueChange={handleCandidateChange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Candidate" />
              </SelectTrigger>
              <SelectContent>
                {candidates.map((candidate) => (
                  <SelectItem key={candidate.id} value={candidate.id.toString()}>
                    {candidate.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Candidate Performance & Reports</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{selectedCandidate.name}</h2>
                <p className="text-muted-foreground">
                  {selectedCandidate.role} | Interview Date: {selectedCandidate.date}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-bold">{selectedCandidate.overallScore}%</span>
                  <span className="text-muted-foreground">Overall Score</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Technical</span>
                  <span>{selectedCandidate.technicalScore}%</span>
                </div>
                <Progress value={selectedCandidate.technicalScore} />
                <div className="flex justify-between">
                  <span>Communication</span>
                  <span>{selectedCandidate.communicationScore}%</span>
                </div>
                <Progress value={selectedCandidate.communicationScore} />
                <div className="flex justify-between">
                  <span>Confidence</span>
                  <span>{selectedCandidate.confidenceScore}%</span>
                </div>
                <Progress value={selectedCandidate.confidenceScore} />
                <div className="flex justify-between">
                  <span>Problem Solving</span>
                  <span>{selectedCandidate.problemSolvingScore}%</span>
                </div>
                <Progress value={selectedCandidate.problemSolvingScore} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="John" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Jane" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Detailed Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="question1" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="question1">Question 1</TabsTrigger>
                <TabsTrigger value="question2">Question 2</TabsTrigger>
              </TabsList>
              {selectedCandidate.questions.map((q, index) => (
                <TabsContent key={index} value={`question${index + 1}`}>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold">Question:</h3>
                      <p>{q.question}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Candidate's Answer:</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Button size="sm" onClick={handleAudioPlayback}>
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Slider value={[audioProgress]} max={100} step={1} className="w-full" />
                        </div>
                        <p>{q.answer}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">AI Feedback:</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        <p>{q.feedback}</p>
                        <div className="mt-2 flex items-center">
                          <span className="font-semibold mr-2">Score:</span>
                          <Progress value={q.score} className="w-full" />
                          <span className="ml-2">{q.score}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Shortlisting Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Overall Score</TableHead>
                  <TableHead>Technical</TableHead>
                  <TableHead>Communication</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Problem Solving</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>{candidate.name}</TableCell>
                    <TableCell>{candidate.overallScore}%</TableCell>
                    <TableCell>{candidate.technicalScore}%</TableCell>
                    <TableCell>{candidate.communicationScore}%</TableCell>
                    <TableCell>{candidate.confidenceScore}%</TableCell>
                    <TableCell>{candidate.problemSolvingScore}%</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="default">
                          Shortlist
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                        <Button size="sm" variant="outline">
                          Follow-Up
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}