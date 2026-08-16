'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkbg/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase text-white">
          Strength<span className="text-gold">Culture</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link href="#classes" className="hover:text-gold transition">Classes</Link>
          <Link href="#coaches" className="hover:text-gold transition">Coaches</Link>
          <Link href="#about" className="hover:text-gold transition">About</Link>
          <Link href="#contact" className="hover:text-gold transition">Contact</Link>
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-darkbg border-t border-white/10 px-6 pb-6 flex flex-col gap-4 text-sm uppercase tracking-wider">
          <Link href="#classes" onClick={() => setOpen(false)} className="hover:text-gold transition">Classes</Link>
          <Link href="#coaches" onClick={() => setOpen(false)} className="hover:text-gold transition">Coaches</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="hover:text-gold transition">About</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-gold transition">Contact</Link>
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-5 py-2 font-bold text-center uppercase tracking-wider hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
