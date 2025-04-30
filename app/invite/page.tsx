// app/invite/page.tsx
import InviteFriend from '@/components/InviteFriend';

export const metadata = {
  title: 'Invite a Friend • Mindscape',
  description: 'Share your invite code or link to challenge a friend.',
};

export default function InvitePage() {
  return <InviteFriend />;
}
