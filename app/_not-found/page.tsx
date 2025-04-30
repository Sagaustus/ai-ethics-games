// app/_not-found/page.tsx
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! Page not found.</p>
        <a
          href="/"
          className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-lg font-semibold hover:opacity-90 transition"
        >
          Go back home
        </a>
      </div>
    )
  }
  