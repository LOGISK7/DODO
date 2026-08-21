"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  headerContent?: ReactNode;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  headerContent,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If fully expanded and scrolling up at the very top of the page, un-expand
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        // Prevent default scrolling to handle the expansion animation
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0015; // Smooth, cinematic speed
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005; 
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Cinematic sizing calculations
  const mediaWidth = isMobileState 
    ? 90 + scrollProgress * 10 // 90vw to 100vw
    : 70 + scrollProgress * 30; // 70vw to 100vw

  const mediaHeight = isMobileState
    ? 45 + scrollProgress * 55 // 45vh to 100vh
    : 55 + scrollProgress * 45; // 55vh to 100vh

  const mediaTop = isMobileState
    ? 72 - scrollProgress * 22 // 72% to 50%
    : 70 - scrollProgress * 20; // 70% to 50%

  const borderRadius = (1 - scrollProgress) * (isMobileState ? 16 : 24); // px

  // Text fades out quickly and moves up slightly
  const textOpacity = Math.max(1 - scrollProgress * 2.5, 0);
  const textTranslateY = -(scrollProgress * 50); // move up by 50px as it fades

  // Subtle dark overlay on the media that fades out as it expands
  const overlayOpacity = 0.3 * (1 - scrollProgress);

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden w-full'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh] w-full'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          
          <div className='container mx-auto flex flex-col items-center justify-start relative z-10 w-full'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              
              {/* Header Content Container */}
              <div 
                className="absolute top-0 left-0 w-full z-10 pointer-events-auto transition-none"
                style={{
                  opacity: textOpacity,
                  transform: `translateY(${textTranslateY}px)`,
                  pointerEvents: scrollProgress > 0.1 ? 'none' : 'auto' // Prevent clicking when hidden
                }}
              >
                {headerContent}
              </div>

              {/* Expanding Media Container */}
              <div
                className='absolute z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none overflow-hidden'
                style={{
                  top: `${mediaTop}%`,
                  width: `${mediaWidth}vw`,
                  height: `${mediaHeight}vh`,
                  borderRadius: `${borderRadius}px`,
                  boxShadow: scrollProgress < 1 ? '0px 30px 60px rgba(0, 0, 0, 0.4)' : 'none',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full object-cover'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <div
                        className='absolute inset-0 bg-black pointer-events-none transition-opacity duration-300'
                        style={{ opacity: overlayOpacity }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none bg-zinc-900'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <div
                        className='absolute inset-0 bg-black pointer-events-none transition-opacity duration-300'
                        style={{ opacity: overlayOpacity }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full bg-zinc-900'>
                    <Image
                      src={mediaSrc}
                      alt={'Hero media content'}
                      fill
                      className='object-cover'
                      priority
                    />
                    <div
                      className='absolute inset-0 bg-black pointer-events-none transition-opacity duration-300'
                      style={{ opacity: overlayOpacity }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Below the fold optional content */}
            {children && (
              <motion.section
                className='flex flex-col w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
