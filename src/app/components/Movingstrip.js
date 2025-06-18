import React from "react";

export default function Movingstrip() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 bg-black text-white overflow-hidden">
      {/* Gradient Glow Strip - Background */}
      <div className="absolute w-full h-10 -rotate-12 origin-center z-0 top-16 left-0 overflow-hidden">
        <div className="w-[200%] h-full animate-gradient-marquee-reverse bg-gradient-to-r from-blue-500 to-purple-700 opacity-30 blur-sm mix-blend-lighten" />
      </div>

      {/* Foreground Marquee Strip */}
      <div className="absolute w-full rotate-12 origin-center z-10 top-0 left-0 shadow-lg">
        <div className="marquee-wrapper overflow-hidden py-3 px-4 rounded-md">
          <div className="marquee-track flex whitespace-nowrap animate-marquee">
            <span className="marquee-item font-semibold tracking-wide text-sm sm:text-base md:text-lg px-4">
              FRONTEND DEVELOPER ★ TECH ENTHUSIAST ★ SOFTWARE ENGINEER ★ OPEN SOURCE CONTRIBUTOR ★ NEXT.JS EXPERT ★ WEB APP ARCHITECT&nbsp;&nbsp;
            </span>
            <span className="marquee-item font-semibold tracking-wide text-sm sm:text-base md:text-lg px-4">
              FRONTEND DEVELOPER ★ TECH ENTHUSIAST ★ SOFTWARE ENGINEER ★ OPEN SOURCE CONTRIBUTOR ★ NEXT.JS EXPERT ★ WEB APP ARCHITECT&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          background: linear-gradient(to right, #3b82f6, #9333ea);
          transform: translateY(-50%);
          border-radius: 0.5rem;
        }

        .marquee-track {
          display: flex;
          min-width: 200%;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }

        @keyframes gradient-marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-gradient-marquee-reverse {
          animation: gradient-marquee-reverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

