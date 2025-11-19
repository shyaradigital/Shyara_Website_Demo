import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ Management",
  description: "Manage FAQs",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminFAQPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">FAQs</h1>
          <p className="mt-2 text-muted-foreground">
            TODO: User will provide content
          </p>
        </div>
        <Button>TODO: User will provide content</Button>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>TODO: User will provide content</CardTitle>
            <CardDescription>TODO: User will provide content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h3 className="font-semibold">TODO: User will provide content</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    TODO: User will provide content
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
