"use client";

import { VideoHolder } from "./video-holder";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
const LazyText = lazy(() => import("@/components/text"));

export default function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  function scrollHandler() {
    if (!heroVideoRef.current) return;
    const video = heroVideoRef.current;

    const scrollProgress = Math.min(
      window.scrollY / (window.innerHeight * 5.25),
      1
    );

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
    <>
      <VideoHolder>
        <video
          ref={heroVideoRef}
          playsInline
          muted
          src="/large.webm"
          aria-hidden
          className="min-w-[160rem]"
        />
        <h1
          className="text-[9rem] font-black absolute"
          style={{ opacity: 1 - progress * 35, scale: 1 - progress * 20 }}
        >
          MacBook Air
        </h1>
      </VideoHolder>
      <div
        className="flex-col max-w-[60rem] gap-10 absolute top-[80vh] hero-copy-wrapper"
        style={{ display: progress > 0.77 ? "flex" : "none" }}
      >
        <Suspense>
          <LazyText />
        </Suspense>
      </div>
    </>
  );
}
