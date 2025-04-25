"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  function scrollHandler() {
    if (!heroVideoRef.current) return;
    const video = heroVideoRef.current;
    const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 5.25), 1);

    setProgress(scrollProgress);

    if (video.duration) {
      video.currentTime = video.duration * scrollProgress + 0.1;
    }
  }

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <section className="absolute size-full overflow-clip flex items-center justify-center">
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
      </section>
      <section className="flex-col max-w-[60rem] w-full gap-10 absolute flex top-[91vh]">
        <AnimatePresence>
          {progress > 0.79 && (
            <motion.h1
              className="text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              key="title"
            >
              Lean. Mean. M3 machine.
            </motion.h1>
          )}
          {progress > 0.805 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 25,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              key="content"
            >
              <p className="text-2xl font-semibold text-gray-500">
                <span className="text-black">MacBook Air</span> sails through work and play — and
                the <span className="text-black">M3 chip</span> brings even greater capabilities to
                the world&apos;s most popular laptop. You can express yourself and get things done
                effortlessly with{" "}
                <span className="text-black">
                  Apple Intelligence.<sup>1</sup>
                </span>{" "}
                And with up to 18 hours of battery life,<sup>2</sup> you can take the superportable
                MacBook Air anywhere and blaze through whatever you&apos;re into.
              </p>
              <footer className="text-xl font-semibold mt-10 text-gray-500">
                Made with ❤️ by{" "}
                <Link className="hover:underline text-black" href="https://github.com/inbestigator">
                  Inbestigator
                </Link>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
