import Link from "next/link"
import Image from "next/image"
import { Code, Bug, Lightbulb, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Harwinder S. Singh
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                To understand and use software as a whole, and to learn more components of software development every each given day, to refine my skills in programming, debugging, and problem solving.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/exclusive">
                <Button>Access Exclusive Content</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Here Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What You'll Find Here</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my journey and skills in software development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Programming</CardTitle>
                <CardDescription>
                  Building software solutions with clean code and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                   {/* Placeholder for image */}
                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                     <Code className="h-12 w-12 opacity-20" />
                   </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bug className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Debugging</CardTitle>
                <CardDescription>
                  Identifying and solving complex technical problems efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                     <Bug className="h-12 w-12 opacity-20" />
                   </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Problem Solving</CardTitle>
                <CardDescription>
                  Analytical thinking and creative solutions to technical challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                     <Lightbulb className="h-12 w-12 opacity-20" />
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LMS Curriculum References Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">LMS Curriculum References</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access my cybersecurity bootcamp mini projects and learning materials
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 py-12">
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/6806730977ffdbe1f1e742a3" target="_blank" className="group">
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Mini Project – My Digital Portfolio</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Click to access this lesson in the cybersecurity bootcamp curriculum</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/680f40ee41288710ec10e4d9" target="_blank" className="group">
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Mini Project – Create v0.dev account</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Click to access this lesson in the cybersecurity bootcamp curriculum</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/6806733777ffdbe1f1e742a4" target="_blank" className="group">
              <Card className="transition-colors hover:bg-muted/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Mini Project – Prototype with v0.dev</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Click to access this lesson in the cybersecurity bootcamp curriculum</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Newsletter</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Connected</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Get updates on my latest projects and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <div className="w-full max-w-sm space-y-2">
                <NewsletterForm />
                <p className="text-xs text-muted-foreground">
                  Sign up to get notified when we launch. <Link className="underline underline-offset-2" href="/legal/privacy">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Links Section */}
      <section className="w-full py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
            <h3 className="text-lg font-bold mb-4">Additional Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/" className="text-sm hover:underline">SecPortfolio</Link>
                <Link href="/" className="text-sm hover:underline">Home</Link>
                <Link href="/about" className="text-sm hover:underline">About</Link>
                <Link href="/projects" className="text-sm hover:underline">Research</Link>
                <Link href="/exclusive" className="text-sm hover:underline">Exclusive</Link>
                <Link href="/contact" className="text-sm hover:underline">Contact</Link>
            </div>
        </div>
      </section>
    </div>
  )
}
