import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "TODO: User will provide content",
}

export default function FAQPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          TODO: User will provide content
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          TODO: User will provide content
        </p>

        <div className="mt-16 space-y-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                TODO: User will provide content
              </h3>
              <p className="mt-4 text-muted-foreground">
                TODO: User will provide content
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
