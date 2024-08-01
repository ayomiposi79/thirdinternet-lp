"use client";
import FastMarquee from "react-fast-marquee";

interface MarqueeProps {
  children: React.ReactNode;
}

export default function Marquee({ children }: MarqueeProps) {
  return (
    <FastMarquee style={{ overflowX: "clip" }} pauseOnHover>
      {children}
    </FastMarquee>
  );
}
