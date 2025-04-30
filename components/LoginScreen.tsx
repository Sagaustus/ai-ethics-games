// components/LoginScreen.tsx
import Link from 'next/link'
import { FaGoogle, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function LoginScreen() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-login-blue bg-[url('/img/circuit-pattern.svg')] bg-cover bg-center">
      <div className="bg-mindscape-bg bg-opacity-80 p-8 rounded-2xl shadow-xl backdrop-blur-sm max-w-sm w-full">
        <h2 className="text-4xl font-bold text-portal-gold mb-6 text-center">
          Welcome to Mindscape
        </h2>
        <div className="space-y-4">
          <Link href="/auth/google">
            <button className="flex items-center justify-center w-full px-4 py-3 bg-white text-mindscape-bg rounded-lg font-medium hover:opacity-90 transition">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
          </Link>
          <Link href="/auth/github">
            <button className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 text-mindscape-fg rounded-lg font-medium hover:opacity-90 transition">
              <FaGithub className="mr-2" /> Sign in with GitHub
            </button>
          </Link>
          <Link href="/login/email">
            <button className="flex items-center justify-center w-full px-4 py-3 bg-portal-gold text-mindscape-bg rounded-lg font-medium hover:opacity-90 transition">
              <FaEnvelope className="mr-2" /> Sign in with Email
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
