"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroTileProps = {
  images: string[];
  /** ms between image switches */
  interval?: number;
  /** prioritise the first image (above-the-fold LCP) */
  priority?: boolean;
  /** next/image `sizes` hint */
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * A single hero cell that cross-fades through its set of photos on a timer.
 * Includes a bottom scrim so overlaid text stays legible.
 */
export default function HeroTile({
  images,
  interval = 5000,
  priority = false,
  sizes,
  className = "",
  children,
}: HeroTileProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-3xl ${className}`}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes={sizes}
          priority={priority && i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* legibility scrim — only at the bottom, no edge framing */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent to-55%" />

      {children}
    </div>
  );
}
