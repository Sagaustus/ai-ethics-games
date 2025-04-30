// app/school-of-thought/page.tsx
import SchoolPicker from '@/components/SchoolPicker'

export const metadata = {
  title: 'Choose Your Philosophy • Mindscape',
  description: 'Select one of the eight ethical schools to begin your journey.',
}

export default function SchoolOfThoughtPage() {
  return (
    <div className="min-h-screen bg-mindscape-bg py-12 px-4 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center text-portal-gold mb-8">
        Choose Your Philosophy
      </h1>
      <SchoolPicker />
    </div>
  )
}
