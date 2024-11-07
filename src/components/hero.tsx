"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0.1);

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
    <div className="overflow-clip">
      <div className="relative min-h-[450dvh] w-[160rem] left-1/2 -translate-x-1/2 overflow-clip">
        <div className="sticky flex items-center justify-center top-0 h-dvh">
          <video
            ref={videoRef}
            src="/large.webm"
            playsInline
            muted
            aria-hidden
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
      <div
        className="3xl:hidden"
        style={{
          height: `${progress + 2 * 10}dvh`,
        }}
      />
    </div>
  );
}
