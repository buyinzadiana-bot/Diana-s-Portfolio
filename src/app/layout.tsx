import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diana Buyinza | Portfolio",
  description: "Software Engineer & Creative Designer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 md:px-12">
              <Link
                href="/"
                className="font-bold tracking-tight text-glow hover:text-primary transition-colors text-xl"
              >
                DB.
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="/project" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border/40 py-12">
            <div className="mx-auto max-w-7xl px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">© 2025 Diana Buyinza. Built with Next.js & Tailwind.</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/buyinzadiana-bot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
