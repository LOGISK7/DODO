"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollExpandMediaProps {
  children?: React.ReactNode;
  media: React.ReactNode;
  containerHeight?: string;
}

export function ScrollExpandMedia({ 
  children, 
  media,
  containerHeight = "250vh"
}: ScrollExpandMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scale the media from 0.7 to 1
  const scale = useTransform(smoothProgress, [0, 1], [0.7, 1]);
  // Border radius transition
  const borderRadius = useTransform(smoothProgress, [0, 1], ["24px", "0px"]);
  
  // Content fades out and moves up
  const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.3], [0, -100]);

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative w-full">
      <div className="sticky top-0 h-[100svh] w-full flex flex-col items-center justify-start overflow-hidden pt-[15vh]">
        
        {/* Text Content */}
        {children && (
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="relative z-20 flex flex-col items-center justify-center w-full px-4 mb-8 md:mb-12 pointer-events-auto"
          >
            {children}
          </motion.div>
        )}

        {/* Expanding Media */}
        <motion.div 
          style={{ scale, borderRadius }}
          className="relative z-10 w-full max-w-[1200px] h-[60vh] md:h-[70vh] mx-auto overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex-shrink-0 origin-top will-change-transform bg-black/40"
        >
          {media}
        </motion.div>
      </div>
    </div>
  );
}
