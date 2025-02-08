"use client"

import { Bell, ChevronRight, Settings } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/candidate%20dashboard%20UI-U3IZroEJ8Vl1XTpfa5al4ZLF57qr2u.png"
              alt="Profile"
            />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Sarah Wilson</h2>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {/* Performance Overview */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Performance Overview</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground">Technical</div>
                    <div className="text-3xl font-bold">85%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground">Communication</div>
                    <div className="text-3xl font-bold">92%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground">Confidence</div>
                    <div className="text-3xl font-bold">78%</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Preparation Progress */}
            <section>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-sm font-medium">Preparation Progress</h4>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </section>

            {/* AI Feedback */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Latest AI Feedback</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg border bg-white p-4">
                  <div className="mt-1 h-4 w-4 rounded bg-blue-100" />
                  <p>Structure your answers using the STAR method</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border bg-white p-4">
                  <div className="mt-1 h-4 w-4 rounded bg-blue-100" />
                  <p>Provide more specific examples in technical responses</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border bg-white p-4">
                  <div className="mt-1 h-4 w-4 rounded bg-blue-100" />
                  <p>Maintain consistent eye contact during video interviews</p>
                </div>
              </div>
            </section>

            {/* Past Interviews */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Past Interviews</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <div className="font-medium">DataTech</div>
                      <div className="text-sm text-muted-foreground">Feb 15</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">88% Score</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <div className="font-medium">CloudSys</div>
                      <div className="text-sm text-muted-foreground">Feb 10</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">92% Score</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Upcoming Interviews */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Upcoming Interviews</h3>
              <div className="space-y-4">
                <Card>
                  <Link href="#" className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">TC</div>
                    <div className="flex-1">
                      <div className="font-medium">TechCorp</div>
                      <div className="text-sm text-muted-foreground">Senior Software Engineer</div>
                      <div className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </Card>
                <Card>
                  <Link href="#" className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">IL</div>
                    <div className="flex-1">
                      <div className="font-medium">InnovateLabs</div>
                      <div className="text-sm text-muted-foreground">Full Stack Developer</div>
                      <div className="text-sm text-muted-foreground">Feb 28, 11:00 AM</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </Card>
              </div>
            </section>

            {/* Mock Interview Button */}
            <Button className="w-full" size="lg">
              Start Mock Interview
            </Button>

            {/* Recommended */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Recommended</h3>
                <Link href="#" className="text-sm text-blue-600">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                <Card>
                  <Link href="#" className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">📄</div>
                    <div className="flex-1">
                      <div className="font-medium">System Design Interview Guide</div>
                      <div className="text-sm text-muted-foreground">Article</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </Card>
                <Card>
                  <Link href="#" className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border">🎥</div>
                    <div className="flex-1">
                      <div className="font-medium">Behavioral Questions Masterclass</div>
                      <div className="text-sm text-muted-foreground">Video</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

