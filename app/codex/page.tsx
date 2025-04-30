// app/codex/page.tsx
import CodexBrowser from '@/components/CodexBrowser';

export const metadata = {
  title: 'Ethical Codex • Mindscape',
};

export default function CodexPage() {
  return (
    <div className="min-h-screen bg-mindscape-bg py-12 px-4">
      <CodexBrowser />
    </div>
  );
}
