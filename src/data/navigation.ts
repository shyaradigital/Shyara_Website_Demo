export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const

export const adminNavigation = [
  { name: "Overview", href: "/admin", icon: "LayoutDashboard" },
  { name: "Services", href: "/admin/services", icon: "Briefcase" },
  { name: "Portfolio", href: "/admin/portfolio", icon: "FolderKanban" },
  { name: "FAQ", href: "/admin/faq", icon: "HelpCircle" },
] as const
