import { McpToolInterface } from "@/components/mcp-tool-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Key, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "MCP Integration | Harwinder S. Singh",
  description: "Demonstrating Model Context Protocol integration with OAuth 2.1 security.",
}

export default function McpIntegrationPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">MCP Integration & Security</h1>
        <p className="max-w-[800px] text-muted-foreground md:text-xl">
          Showcasing secure tool execution using the Model Context Protocol (MCP) with OAuth 2.1 authentication patterns.
        </p>
      </div>
      
      {/* Interactive Tool Interface */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Live MCP Tool Demo</h2>
            <Badge variant="outline" className="text-green-500 border-green-500">Live Connected</Badge>
        </div>
        <McpToolInterface />
      </section>

      {/* OAuth Flow Documentation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">OAuth 2.1 Security Flow</h2>
        <div className="grid gap-6 md:grid-cols-3">
            <Card>
                <CardHeader>
                    <Lock className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>1. Authorization</CardTitle>
                    <CardDescription>Client requests access</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        The MCP client (VS Code or Claude) initiates an OAuth 2.1 authorization code flow against the authorization server.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Key className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>2. Token Exchange</CardTitle>
                    <CardDescription>Secure token issuance</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Upon user consent, the authorization code is exchanged for a short-lived access token and a refresh token.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>3. Protected Resource</CardTitle>
                    <CardDescription>Authenticated Execution</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        The MCP server validates the access token before executing any tool (e.g., `roll_dice` or `network_scan`).
                    </p>
                </CardContent>
            </Card>
        </div>
        
        <Card className="bg-muted/50">
            <CardHeader>
                <CardTitle>Implementation Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm">
                    This implementation follows the patterns from the <code>mcp-auth-demo</code>, ensuring that all tool calls are authenticated.
                </p>
                <div className="rounded-md bg-black p-4 overflow-x-auto">
                    <pre className="text-xs text-green-400">
{`// Example Protected Route (app/api/mcp/route.ts)
export async function POST(req: Request) {
  const token = req.headers.get("Authorization");
  if (!await verifyToken(token)) {
    return new Response("Unauthorized", { status: 401 });
  }
  // Proceed with tool execution
}`}
                    </pre>
                </div>
            </CardContent>
        </Card>
      </section>
    </div>
  )
}
