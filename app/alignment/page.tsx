// app/alignment/page.tsx
import AlignmentMeter from '@/components/AlignmentMeter';

export const metadata = {
  title: 'Alignment Meter • Mindscape',
};

export default function AlignmentPage() {
  // Example: 0.4 leans toward the left label, 0.8 toward the right
  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <AlignmentMeter
        value={0.45}
        labels={['Pragmatist', 'Absolutist']}
      />
    </div>
  );
}
