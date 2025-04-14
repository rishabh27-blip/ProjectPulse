import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is ProjectPulse?",
    answer:
      "ProjectPulse is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does ProjectPulse compare to other project management tools?",
    answer:
      "ProjectPulse offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is ProjectPulse suitable for small teams?",
    answer:
      "Absolutely! ProjectPulse is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ProjectPulse's features.",
  },
  {
    question: "What key features does ProjectPulse offer?",
    answer:
      "ProjectPulse provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can ProjectPulse handle multiple projects simultaneously?",
    answer:
      "Yes, ProjectPulse is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ProjectPulse ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While ProjectPulse is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
    color: "from-emerald-500 to-emerald-600",
  },
];

const benefits = [
  {
    title: "Boost Productivity",
    description: "Increase team output by streamlining workflows and eliminating bottlenecks",
    icon: CheckCircle,
  },
  {
    title: "Global Collaboration",
    description: "Work seamlessly with team members across different time zones and locations",
    icon: Globe,
  },
  {
    title: "Team Alignment",
    description: "Keep everyone aligned with clear objectives, priorities, and deadlines",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto py-24 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Streamline Your Workflow with ProjectPulse
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empower your team with our intuitive project management solution designed for modern workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/onboarding">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0">
                  Get Started <ChevronRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl">
              <Image
                src="/logo2.png"
                alt="Logo" 
                width={500}
                height={350}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your projects effectively in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Card className="relative h-full bg-gray-800 border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color} mb-5`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ProjectPulse</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We help teams deliver better results with less effort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
                <benefit.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-400">Join thousands of teams already improving their workflow</p>
          </div>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about ProjectPulse</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of teams already using ProjectPulse to streamline their projects and boost productivity.
              </p>
              <Link href="/onboarding">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 px-8 py-6 text-lg">
                  Start For Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}