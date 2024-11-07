"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

export default function Text() {
  return (
    <>
      <motion.h1
        className="text-7xl font-bold"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        Lean. Mean. M3 machine.
      </motion.h1>

      <motion.p
        className="text-2xl font-semibold text-gray-500"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <span className="text-black">MacBook Air</span> sails through work and
        play — and the <span className="text-black">M3 chip</span> brings even
        greater capabilities to the world&apos;s most popular laptop. You can
        express yourself and get things done effortlessly with{" "}
        <span className="text-black">
          Apple Intelligence.<sup>1</sup>
        </span>{" "}
        And with up to 18 hours of battery life,<sup>2</sup> you can take the superportable
        MacBook Air anywhere and blaze through whatever you&apos;re into.
      </motion.p>

      <motion.footer
        className="text-xl font-semibold text-gray-500 pb-10"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        Made with ❤️ by{" "}
        <Link
          className="hover:underline text-black"
          href="https://github.com/inbestigator"
        >
          Inbestigator
        </Link>
      </motion.footer>
    </>
  );
}
