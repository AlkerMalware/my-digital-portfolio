import { SecurityDashboard } from "@/components/security-dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Security Portfolio | Harwinder S. Singh",
  description: "Executive security dashboard, penetration testing results, and case studies.",
}

export default function SecurityPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Security Portfolio</h1>
        <p className="max-w-[800px] text-muted-foreground md:text-xl">
          A comprehensive overview of security posture, defenses, and research findings.
        </p>
      </div>

      {/* Executive Dashboard */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Executive Security Dashboard</h2>
            <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Report
            </Button>
        </div>
        <SecurityDashboard />
      </section>

      {/* Penetration Testing Results */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Penetration Testing Findings</h2>
        <div className="grid gap-6 lg:grid-cols-2">
             <Card>
               <CardHeader>
                 <CardTitle>Financial Services App Audit</CardTitle>
                 <CardDescription>Comprehensive black-box penetration test</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Target</span>
                     <span className="text-muted-foreground">fintech-app.example.com</span>
                   </div>
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Date</span>
                     <span className="text-muted-foreground">October 15, 2025</span>
                   </div>
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Risk Rating</span>
                     <span className="text-red-500 font-bold">High</span>
                   </div>
                   <div>
                     <h4 className="font-medium mb-2">Key Findings:</h4>
                     <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                       <li>SQL Injection in search parameter (Critical)</li>
                       <li>Broken Access Control in admin panel (High)</li>
                       <li>Sensitive Data Exposure in API response (Medium)</li>
                     </ul>
                   </div>
                 </div>
               </CardContent>
             </Card>
             
             <Card>
               <CardHeader>
                 <CardTitle>Healthcare Portal Assessment</CardTitle>
                 <CardDescription>Gray-box security assessment</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Target</span>
                     <span className="text-muted-foreground">patient-portal.hospital.org</span>
                   </div>
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Date</span>
                     <span className="text-muted-foreground">November 02, 2025</span>
                   </div>
                   <div className="flex justify-between items-center border-b pb-2">
                     <span className="font-medium">Risk Rating</span>
                     <span className="text-yellow-500 font-bold">Medium</span>
                   </div>
                   <div>
                     <h4 className="font-medium mb-2">Key Findings:</h4>
                     <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                       <li>Stored XSS in profile comments (Medium)</li>
                       <li>Weak Password Policy (Low)</li>
                       <li>Missing Security Headers (Low)</li>
                     </ul>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </div>
      </section>

      {/* Case Studies / LMS References */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Case Studies & Research</h2>
        <div className="grid gap-4 md:grid-cols-3">
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/6806730977ffdbe1f1e742a3" target="_blank" className="group">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    Portfolio Development
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Development of a secure digital portfolio using Next.js and Vercel, implementing best practices for modern web security.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/680f40ee41288710ec10e4d9" target="_blank" className="group">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    AI Prototyping
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leveraging v0.dev for rapid prototyping of secure user interfaces and dashboard components.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.ausbizconsulting.com.au/courses/cybersec-bootcamp/curriculum/6806733777ffdbe1f1e742a4" target="_blank" className="group">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    MCP Implementation
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Integration of Model Context Protocol for secure, standardized tool execution within AI agent workflows.
                  </p>
                </CardContent>
              </Card>
            </Link>
        </div>
      </section>
    </div>
  )
}
