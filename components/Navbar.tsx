'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'bg-darkbg/95 py-2 shadow-lg shadow-black/40' : 'bg-darkbg/80 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — shrinks on scroll */}
        <Link href="/" className="flex items-center">
          <div
            className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
              scrolled ? 'w-[120px] h-[36px]' : 'w-[160px] h-[48px]'
            }`}
          >
            <Image
              src="/logo.png"
              alt="Strength Culture"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link href="#classes" className="text-zinc-400 hover:text-white transition">Classes</Link>
          <Link href="#coaches" className="text-zinc-400 hover:text-white transition">Coaches</Link>
          <Link href="#about" className="text-zinc-400 hover:text-white transition">About</Link>
          <Link href="#contact" className="text-zinc-400 hover:text-white transition">Contact</Link>
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 ${
              scrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-darkbg border-t border-white/10 px-6 pb-6 flex flex-col gap-4 text-sm uppercase tracking-wider">
          <Link href="#classes" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition">Classes</Link>
          <Link href="#coaches" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition">Coaches</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition">About</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition">Contact</Link>
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 font-bold text-center uppercase tracking-wider hover:bg-zinc-200 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
