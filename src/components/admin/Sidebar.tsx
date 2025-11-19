"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { adminNavigation } from "@/data/navigation"

const iconMap = {
  LayoutDashboard,
  Briefcase,
  FolderKanban,
  HelpCircle,
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-border px-6">
          <h2 className="text-lg font-semibold">Admin</h2>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {adminNavigation.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {Icon && <Icon className="h-5 w-5" />}
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
