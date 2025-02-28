"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Building2, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Zod schema for job role
const jobRoleSchema = z.object({
  title: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  interviewType: z.enum(["behavioral", "technical", "hybrid"]),
  experienceLevel: z.enum(["entry", "mid", "senior"]),
  questions: z
    .array(
      z.object({
        question: z.string().min(5, "Question must be at least 5 characters."),
        expectedAnswer: z.string().min(5, "Expected answer must be at least 5 characters."),
      })
    )
    .min(1, "At least one question is required."),
});

// Define job roles
const jobRoles = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "Marketing Specialist"];

export default function JobRolesSetupPage() {
  const [step, setStep] = useState(1);
  const [interviewLink, setInterviewLink] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Use React Hook Form
  const form = useForm({
    resolver: zodResolver(jobRoleSchema),
    defaultValues: {
      title: "",
      interviewType: "behavioral",
      experienceLevel: "mid",
      questions: [{ question: "", expectedAnswer: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  // Handle step change and interview link generation
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

  function onSubmit(data) {
    toast({
      title: "Interview Created",
      description: "Your AI-powered interview has been set up successfully.",
    });
    console.log(data);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">InterviewAI</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-blue-600" href="/">
              <ArrowLeft className="h-4 w-4 inline-block mr-1" />
              Back to Dashboard
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Job Role & Interview Setup</h1>
        <div className="mb-6">
          <nav className="flex space-x-4">
            {[1, 2, 3].map((s) => (
              <Button key={s} variant={s === step ? "default" : "outline"} onClick={() => setStep(s)} disabled={s > step}>
                Step {s}
              </Button>
            ))}
          </nav>
        </div>
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Define Job Role & Interview Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(() => setStep(2))} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a job role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {jobRoles.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Next
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
