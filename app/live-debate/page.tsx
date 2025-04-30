// app/live-debate/page.tsx
import LiveDebateViewer from '@/components/LiveDebateViewer';

export const metadata = {
  title: 'Live Debate • Mindscape',
  description: 'Watch and interact with a live AI ethics debate.',
};

export default function LiveDebatePage() {
  return <LiveDebateViewer />;
}
