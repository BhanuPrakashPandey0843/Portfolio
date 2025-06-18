// app/components/Footer.js

'use client';

import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa';

export default function Footer() {
  const icons = [
    {
      href: '#',
      icon: <FaGithub size={18} />,
      label: 'GitHub',
    },
    {
      href: '#',
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
    },
    {
      href: '#',
      icon: <FaEnvelope size={18} />,
      label: 'Email',
    },
    {
      href: '#',
      icon: <FaFacebook size={18} />,
      label: 'Facebook',
    },
  ];

  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        {icons.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="bg-[#121212] p-3 rounded-full flex items-center justify-center text-white hover:text-purple-400 transition duration-300 hover:shadow-[0_0_10px_#9333ea]"
          >
            {icon}
          </a>
        ))}
      </div>

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

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm font-mono tracking-wide">
        © 2025 Bhanu Prakash Pandey. All Rights Reserved.
      </p>
    </footer>
  );
}
