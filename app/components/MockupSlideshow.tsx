'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: { src: string; label: string }[];
}

export default function MockupSlideshow({ images }: Props) {

  const [cur, setCur] = useState(0);

  const prev = useCallback(() => setCur(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCur(i => (i + 1) % images.length), [images.length]);

  return (
    <div>
      {/* Image area */}
      <div className="relative rounded-xl overflow-hidden bg-white/4 aspect-video mb-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-300 ${i === cur ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 768px) 90vw, 600px"
            />
          </div>
        ))}
      </div>

      {/* Nav controls */}
      <div className="flex items-center justify-between">
        <button onClick={prev} className="p-1.5 rounded-lg bg-white/6 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Previous">
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === cur ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="p-1.5 rounded-lg bg-white/6 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Next">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Label */}
      <p className="text-center text-[10px] text-slate-500 font-mono mt-2">
        {cur + 1} / {images.length} — {images[cur].label}
      </p>
    </div>
  );
}