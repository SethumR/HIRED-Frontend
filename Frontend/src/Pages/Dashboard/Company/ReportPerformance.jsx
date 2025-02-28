import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart, PieChart, TrendingUp, Users } from "lucide-react";

export default function ReportsPerformancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <h1 className="text-xl font-bold">Reports & Performance</h1>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Detailed analysis of individual candidate performance and AI-generated feedback.</p>
              <Link href="/candidate-performance">
                <Button>
                  <BarChart className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interview Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Overall statistics and trends from all conducted interviews.</p>
              <Button>
                <PieChart className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hiring Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Track candidates through various stages of the hiring process.</p>
              <Button>
                <TrendingUp className="mr-2 h-4 w-4" />
                View Pipeline
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Analyze the performance of your hiring team and interviewers.</p>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                View Team Stats
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
