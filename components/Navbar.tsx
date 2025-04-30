// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-debate-panel px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-extrabold text-portal-gold">
        MINDSCAPE
      </Link>
      <div className="space-x-4">
        <Link href="/exploration" className="hover:text-portal-gold transition">
          Exploration
        </Link>
        <Link href="/login" className="hover:text-portal-gold transition">
          Login
        </Link>
      </div>
    </nav>
  )
}
