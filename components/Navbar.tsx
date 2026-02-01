// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-debate-panel/80 backdrop-blur px-4 sm:px-6 py-4 flex justify-between items-center border-b border-white/10">
      <Link href="/" className="text-2xl font-extrabold text-portal-gold tracking-wide">
        MINDSCAPE
      </Link>
      <div className="flex items-center gap-4 text-sm sm:text-base">
        <Link href="/exploration" className="hover:text-portal-gold transition-colors">
          Exploration
        </Link>
        <Link href="/login" className="hover:text-portal-gold transition-colors">
          Login
        </Link>
      </div>
    </nav>
  )
}
