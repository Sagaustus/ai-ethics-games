// components/Hero.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/img/portal-bg.jpg"
        alt="Cosmic portal gateway"
        fill
        priority
        className="object-cover filter brightness-25 blur-sm -z-10"
        placeholder="blur"
        blurDataURL="/img/portal-bg-blur.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-portal-gold mb-4 animate-fadeIn">
          MINDSCAPE
        </h1>

        {/* Link without an inner <a> */}
        <Link
          href="/school-of-thought"
          className="mt-6 inline-block px-8 py-3 bg-portal-gold text-black rounded-full text-lg font-bold hover:scale-105 focus:ring-4 focus:ring-portal-gold/50 transition animate-fadeIn delay-200"
        >
          START
        </Link>
      </div>
    </section>
  );
}
