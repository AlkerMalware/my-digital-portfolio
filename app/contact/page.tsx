import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact | Harwinder S. Singh",
  description: "Get in touch for security consultations and inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="text-muted-foreground md:text-xl">
              Have a security inquiry or want to discuss a project? Fill out the form or reach out directly.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <span>contact@harwindersingh.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can I help you?" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
