"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  function scrollHandler() {
    if (!videoRef.current) return;
    const video = videoRef.current;

    const scrollProgress =
      window.scrollY / (window.innerHeight * 4.5 - window.innerHeight);

    setProgress(scrollProgress);
    if (video.duration) {
      video.currentTime = video.duration * scrollProgress + 0.1;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="relative min-h-[450dvh] max-w-[160rem] mx-auto">
      <div className="sticky flex items-center justify-center top-0 h-dvh overflow-hidden">
        <video
          ref={videoRef}
          src="https://www.apple.com/105/media/us/macbook-air/2024/abecf8fa-b944-4698-94ce-14616e166bff/anim/hero/large.webm"
          playsInline
          muted
          aria-hidden
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="text-[9rem] font-black"
            style={{ opacity: 1 - progress * 35, scale: 1 - progress * 20 }}
          >
            MacBook Air
          </h1>
        </div>
      </div>
    </div>
  );
}
