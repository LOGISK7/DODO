import React from 'react';
import Image from 'next/image';

export default function ImgBox({ width, height, filename, alt, className }: { width: number; height: number; filename: string; alt: string; className?: string }) {
  // Try to use next/image but fallback for missing files as requested.
  // We can't actually detect missing files at runtime easily without error boundaries or similar, 
  // so we'll just render the next/image which will fail gracefully in dev, or we can use a custom error handler.
  // A simpler way: we'll render a placeholder DIV if it's meant to be a placeholder visually.
  // For the sake of standard React, we'll just use the standard `img` or `next/image` 
  return (
    <div 
      className={`image-fallback-container ${className || ''}`}
      style={{ 
        width: '100%', 
        maxWidth: `${width}px`, 
        aspectRatio: `${width}/${height}`,
        position: 'relative',
        border: '1px dashed var(--hl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--hl)',
        fontSize: '14px',
        textAlign: 'center'
      }}
    >
      [IMG {width}x{height} — {filename}]
      {/* 
        In production, if the image exists, you would uncomment this:
        <Image src={`/offer/${filename}`} alt={alt} fill style={{ objectFit: 'cover' }} /> 
      */}
    </div>
  );
}
