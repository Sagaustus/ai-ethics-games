// components/ComicFrame.tsx
import Image from 'next/image'

interface ComicFrameProps {
  background: string
  caption: string
}

export default function ComicFrame({ background, caption }: ComicFrameProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={background}
        alt="Comic Scene"
        fill
        className="object-cover brightness-90"
      />
      <div className="absolute bottom-12 left-8 bg-black bg-opacity-60 px-6 py-4 rounded-lg max-w-lg">
        <p className="text-white text-xl font-semibold leading-snug">
          {caption}
        </p>
      </div>
    </div>
  )
}
