import React from 'react'

const Skills = () => {
  return (
     <section className="relative flex flex-col items-center justify-center py-20 bg-black text-white overflow-hidden">
    <h1 className="absolute -translate-y-5 text-[90px] font-extrabold text-white/5 tracking-widest select-none pointer-events-none z-0">
  SKILLS
</h1>

      {/* Foreground content */}
      <div className="z-10 mt-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white font-sans tracking-wide">
         Skills
        </h2>

        {/* Line + dot separator */}
<div className="flex items-center justify-center mt-4">
  <div
    className="w-16 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
    style={{ filter: 'drop-shadow(0 0 4px #9333ea)' }}
  ></div>
  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mx-3 shadow-[0_0_6px_#9333ea]" />
  <div
    className="w-16 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
    style={{ filter: 'drop-shadow(0 0 4px #9333ea)' }}
  ></div>
</div>
        {/* Get in Touch text */}
        <p className="text-xs text-gray-400 tracking-widest mt-4 font-mono">
       I constantly try to improve
        </p>
      </div>
    </section>
  )
}

export default Skills
