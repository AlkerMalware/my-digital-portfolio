import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ShieldCheck, FileText, Video } from "lucide-react"

export const metadata = {
  title: "Exclusive Content | Harwinder S. Singh",
  description: "Premium security resources and deep-dive tutorials.",
}

export default function ExclusivePage() {
  return (
    <div className="container py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-primary/10 rounded-full">
            <Lock className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Exclusive Content</h1>
        <p className="max-w-[800px] text-muted-foreground md:text-xl">
          Access premium security research, deep-dive tutorials, and advanced MCP configurations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Content Card 1 */}
        <Card className="relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">
                PREMIUM
            </div>
            <CardHeader>
                <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Advanced Penetration Testing Guide</CardTitle>
                <CardDescription>Mastering modern web exploitation techniques.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive 50-page guide covering SQL injection, XSS, and CSRF with real-world examples.
                </p>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="secondary">
                    <Lock className="mr-2 h-4 w-4" /> Unlock Access
                </Button>
            </CardFooter>
        </Card>

        {/* Content Card 2 */}
        <Card className="relative overflow-hidden">
             <div className="absolute top-2 right-2 bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">
                PREMIUM
            </div>
            <CardHeader>
                <Video className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Building Secure MCP Servers</CardTitle>
                <CardDescription>Video Course (2.5 Hours)</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step video tutorial on building, securing, and deploying Model Context Protocol servers.
                </p>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="secondary">
                    <Lock className="mr-2 h-4 w-4" /> Unlock Access
                </Button>
            </CardFooter>
        </Card>

        {/* Content Card 3 */}
        <Card>
            <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security Checklist Template</CardTitle>
                <CardDescription>For Enterprise Deployments</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    The exact checklist I use for auditing enterprise-grade applications before production release.
                </p>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="outline">
                    Download Free Preview
                </Button>
            </CardFooter>
        </Card>
      </div>
      
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to upgrade?</h3>
          <p className="text-muted-foreground">Get full access to all resources and weekly updates.</p>
          <Button size="lg">Subscribe Now</Button>
      </div>
    </div>
  )
}
