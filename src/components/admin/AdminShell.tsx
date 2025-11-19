"use client"

import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
