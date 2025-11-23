import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SecPortfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional cybersecurity research and insights.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/exclusive" className="text-muted-foreground hover:text-foreground">
                  Exclusive Content
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-foreground">
                  Admin Panel
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SecPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
