import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              TODO: User will provide content
            </h3>
            <p className="text-sm text-muted-foreground">
              TODO: User will provide content
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">
              TODO: User will provide content
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">
              TODO: User will provide content
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">
              TODO: User will provide content
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  TODO: User will provide content
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} TODO: User will provide content. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
