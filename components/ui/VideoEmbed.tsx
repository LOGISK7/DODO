import React from "react";

interface VideoEmbedProps {
  videoId?: string;
  thumbnailUrl?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16";
}

export default function VideoEmbed({ 
  videoId, 
  thumbnailUrl = "https://placehold.co/1280x720/111111/444444?text=Wistia+Video+Embed",
  aspectRatio = "16/9"
}: VideoEmbedProps) {
  
  // This is a placeholder for Wistia embeds.
  // When real Wistia IDs are provided, this will be swapped for the actual wistia-player script.
  
  return (
    <div 
      className="relative w-full overflow-hidden rounded-sm border border-[var(--border)] group cursor-pointer"
      style={{ aspectRatio }}
    >
      <img 
        src={thumbnailUrl} 
        alt="Video Thumbnail"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)] group-hover:scale-110 transition-transform duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--bg-primary)" className="ml-2">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
