// components/ParticlesBg.tsx
'use client';
import { Particles } from 'react-tsparticles';
export default function ParticlesBg() {
  return (
    <Particles 
      options={{
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { speed: 0.5 },
          color: { value: '#ffcc00' },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: 'repulse' } },
        },
      }}
    />
  );
}
