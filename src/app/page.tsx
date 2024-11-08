"use client";

import { useEffect, useRef, useState } from "react";
import Text from "@/components/text";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0.1);

  function scrollHandler() {
    if (!videoRef.current) return;
    const video = videoRef.current;

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
      <div className="h-[500vh] sticky-container mb-[70vh]">
        <div className="sticky flex flex-col items-center justify-center top-0 left-0 h-screen w-full sticky-content">
          <div className="absolute size-full overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              data-video-progress-kf-l1='{"start": "lerp(0.0, a0t, a0b - a1h)", "end": "lerp(0.085, a0t, a0b - a1h)", "progress": [0.02, 0.13 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "L"}'
              data-video-progress-kf-l2='{"start": "lerp(0.085, a0t, a0b - a1h)", "end": "lerp(0.325, a0t, a0b - a1h)", "progress": [0.13, 0.24 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "L"}'
              data-video-progress-kf-l3='{"start": "lerp(0.325, a0t, a0b - a1h)", "end": "lerp(0.47, a0t, a0b - a1h)", "progress": [0.24, 0.5 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "L"}'
              data-video-progress-kf-l4='{"start": "lerp(0.47, a0t, a0b - a1h)", "end": "a0b - a2h - 119px + 50vh", "progress": [0.5, 1.0], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content", ".hero-copy-wrapper"], "breakpointMask": "L"}'
              data-video-progress-kf-m1='{"start": "lerp(0.0, a0t, a0b - a1h)", "end": "lerp(0.085, a0t, a0b - a1h)", "progress": [0.02, 0.13 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "M"}'
              data-video-progress-kf-m2='{"start": "lerp(0.085, a0t, a0b - a1h)", "end": "lerp(0.325, a0t, a0b - a1h)", "progress": [0.13, 0.24 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "M"}'
              data-video-progress-kf-m3='{"start": "lerp(0.325, a0t, a0b - a1h)", "end": "lerp(0.47, a0t, a0b - a1h)", "progress": [0.24, 0.5 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "M"}'
              data-video-progress-kf-m4='{"start": "lerp(0.47, a0t, a0b - a1h)", "end": "a0b - 100px + 50vh", "progress": [0.5, 1.0], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content", ".hero-copy-wrapper"], "breakpointMask": "M"}'
              data-video-progress-kf-s1='{"start": "lerp(0.0, a0t, a0b - a1h)", "end": "lerp(0.2, a0t, a0b - a1h)", "progress": [0.02, 0.13 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "S"}'
              data-video-progress-kf-s2='{"start": "lerp(0.2, a0t, a0b - a1h)", "end": "lerp(0.55, a0t, a0b - a1h)", "progress": [0.13, 0.24 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "S"}'
              data-video-progress-kf-s3='{"start": "lerp(0.55, a0t, a0b - a1h)", "end": "lerp(0.7, a0t, a0b - a1h)", "progress": [0.24, 0.5 ], "easeFunction": "linear", "anchors": [".sticky-container", ".sticky-content"], "breakpointMask": "S"}'
              data-video-progress-kf-s4='{"start": "lerp(0.7, a0t, a0b - a1h)", "end": "a0b - 100px + 100vh", "progress": [0.5, 1], "easeFunction": "easeOutQuad", "anchors": [".sticky-container", ".sticky-content", ".hero-copy-wrapper"], "breakpointMask": "S"}'
              data-video-load-kf='{"start": "a0t-100vh", "end": "a0b + 100vh", "anchors": [".sticky-container"]}'
              data-video-basepath="/large.webm"
              data-anim-keyframe='{"start": "a0t-100vh", "end": "a0b + 100vh", "anchors": [".sticky-container"], "cssClass": "js-will-change", "toggle": true, "disabledWhen": ["no-enhance-xp"]}'
              playsInline
              muted
              src="/large.webm"
              aria-hidden
            />
            <h1
              className="text-[9rem] font-black absolute"
              style={{ opacity: 1 - progress * 35, scale: 1 - progress * 20 }}
            >
              MacBook Air
            </h1>
          </div>
          <div
            className="flex-col max-w-[60rem] gap-10 absolute top-[80vh] hero-copy-wrapper"
            style={{ display: progress > 0.77 ? "flex" : "none" }}
          >
            <Text />
          </div>
        </div>
      </div>
  );
}
