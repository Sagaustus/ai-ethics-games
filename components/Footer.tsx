import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-debate-panel/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-center text-sm text-mindscape-fg/80">
        <p>AI Ethics Game © 2024</p>
        <p className="mt-2 flex items-center justify-center gap-3">
          <Link href="/terms" className="hover:text-portal-gold transition-colors">
            Terms of Service
          </Link>
          <span className="text-mindscape-fg/30">|</span>
          <Link href="/privacy" className="hover:text-portal-gold transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}
