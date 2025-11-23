import { McpToolInterface } from "@/components/mcp-tool-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPage() {
  return (
    <div className="container py-12 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">MCP Tool Integration</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Demonstrating the power of the Model Context Protocol (MCP) for secure, standardized tool execution.
        </p>
      </div>
      
      <McpToolInterface />
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Standardized Protocol</CardTitle>
            <CardDescription>Universal interface for AI tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              MCP provides a standard way for AI models to discover and execute tools, ensuring consistent behavior across different environments.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Secure Execution</CardTitle>
            <CardDescription>Sandboxed and controlled</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tools run in isolated environments with strict permission controls, preventing unauthorized access to sensitive system resources.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Real-time Feedback</CardTitle>
            <CardDescription>Live execution logs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get immediate visibility into tool execution steps, enabling better debugging and trust in automated actions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
