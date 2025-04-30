import Link from 'next/link'

export default function LandingPortal() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-portal-gradient bg-cover bg-center">
      <h1 className="text-6xl lg:text-8xl font-extrabold text-portal-gold drop-shadow-lg mb-8">
        MINDSCAPE
      </h1>
      <Link href="/login">
        <button className="px-8 py-4 bg-portal-gold text-mindscape-bg rounded-full text-xl font-semibold hover:opacity-90 transition duration-300">
          START
        </button>
      </Link>
    </div>
  )
}
