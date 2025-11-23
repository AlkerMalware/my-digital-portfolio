"use client"

import { useState } from "react"
import { runMcpTool, type McpToolResponse } from "@/app/actions/mcp-demo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Terminal, Play, Loader2 } from "lucide-react"

export function McpToolInterface() {
  const [selectedTool, setSelectedTool] = useState("network_scan")
  const [target, setTarget] = useState("192.168.1.1")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<McpToolResponse | null>(null)

  const handleRunTool = async () => {
    setIsLoading(true)
    setResult(null)
    
    try {
      const response = await runMcpTool(selectedTool, { target })
      setResult(response)
    } catch (error) {
      setResult({ success: false, error: "Failed to execute tool" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>MCP Tool Configuration</CardTitle>
          <CardDescription>Select and configure the Model Context Protocol tool to execute.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tool-select">Select Tool</Label>
            <Select value={selectedTool} onValueChange={setSelectedTool}>
              <SelectTrigger id="tool-select">
                <SelectValue placeholder="Select a tool" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="network_scan">Network Vulnerability Scan</SelectItem>
                <SelectItem value="roll_dice">Secure Dice Roll (Demo)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {selectedTool === "network_scan" && (
            <div className="space-y-2">
              <Label htmlFor="target-input">Target IP / Hostname</Label>
              <Input 
                id="target-input" 
                value={target} 
                onChange={(e) => setTarget(e.target.value)} 
                placeholder="e.g. 192.168.1.1" 
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleRunTool} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Executing...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Run Tool
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Execution Output</CardTitle>
          <CardDescription>Real-time logs and results from the MCP server.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 bg-black/90 rounded-md mx-6 mb-6 p-4 font-mono text-sm text-green-400 overflow-auto min-h-[300px]">
          {!result && !isLoading && (
            <div className="text-muted-foreground text-center mt-20">
              Ready to execute. Select a tool and click Run.
            </div>
          )}
          
          {isLoading && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>Connecting to MCP server...</span>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-2">
              {result.logs?.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span>
                  <span>{log}</span>
                </div>
              ))}
              
              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-blue-400 font-bold">Result:</span>
                <pre className="mt-2 text-white whitespace-pre-wrap">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </div>
              
              {result.error && (
                 <div className="mt-4 text-red-500">
                   Error: {result.error}
                 </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
