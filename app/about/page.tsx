import { Award, GraduationCap, Briefcase, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About Me</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Aspiring cybersecurity professional dedicated to learning how to protect organizations from evolving
                threats.
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Profile Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Harwinder S. Singh</h2>
                <p className="text-xl text-muted-foreground">
                  <span className="text-primary font-semibold">Cybersecurity Consultant & Penetration Tester</span>
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I am a dedicated cybersecurity student with a passion for learning how to help organizations strengthen their
                  security posture and protect their valuable digital assets. Currently honing my skills through rigorous training
                  and practical application, I am eager to apply my knowledge to real-world challenges.
                </p>
                <p className="text-muted-foreground">
                  My developing approach combines technical learning with an appreciation for business needs, aiming to create
                  security solutions that are effective and practical. I believe that cybersecurity is not just about
                  implementing technical controls, but also about building a culture of security awareness and resilience.
                </p>
                <p className="text-muted-foreground">
                  Through my studies and projects, I am learning to identify and address security vulnerabilities, understand
                  robust security programs, and how to respond effectively to security incidents. I am committed to staying
                  at the forefront of the rapidly evolving cybersecurity landscape and continuously expanding my knowledge base.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-background p-2">
                  <Image
                    src="/cyber-guardian.png"
                    alt="Harwinder S. Singh - Cybersecurity Professional"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Education</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education & Learning Path</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Current academic pursuits and certification goals.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cybersecurity Bootcamp</CardTitle>
                <CardDescription>Intensive Training Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive curriculum covering network security, ethical hacking, and defense strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CompTIA Security+</CardTitle>
                <CardDescription>Certification Goal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Preparing for this foundational certification to validate core security knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Network+</CardTitle>
                <CardDescription>Certification Goal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Studying network architecture and operations to build a strong technical foundation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hands-on Labs</CardTitle>
                <CardDescription>Practical Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Regularly practicing skills through virtual labs, CTFs, and project-based learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Expertise</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Competencies</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Core competencies and specialized knowledge areas I am developing.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Network Security Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Vulnerability Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Linux System Administration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Python for Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic Penetration Testing</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Security Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>CIA Triad & Security Principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Risk Management Frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Access Control Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cryptography Basics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Security Compliance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tools & Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Wireshark & Nmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Burp Suite Community</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Metasploit Framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SIEM Tools (Splunk/ELK)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Virtualization (VMware/VirtualBox)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Journey</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Journey</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                My path into the world of cybersecurity.
              </p>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Cybersecurity Student</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2024 - Present
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Intensive Bootcamp Program</p>
                <p className="text-sm text-muted-foreground">
                  Immersed in a rigorous curriculum covering network security, ethical hacking, and defense strategies.
                  Completing hands-on labs and real-world simulation projects to build practical skills.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow-sm z-10 md:group-odd:ml-8 md:group-even:mr-8">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] bg-background p-5 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-lg">Self-Directed Learning</h3>
                  <time className="font-semibold text-primary flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    2023 - 2024
                  </time>
                </div>
                <p className="text-muted-foreground mb-2">Independent Study</p>
                <p className="text-sm text-muted-foreground">
                  Started exploring cybersecurity concepts through online resources, TryHackMe rooms, and setting up
                  home labs. Built foundational knowledge in networking and operating systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
