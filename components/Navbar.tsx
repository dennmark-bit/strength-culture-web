'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'The Space', href: '#the-space' },
  { label: 'Classes', href: '#classes' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 h-16">
        <Link href="/" className="text-white font-bold tracking-[0.25em] uppercase text-sm">
          STRENGTH CULTURE
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://strengthculturehk.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6"
          >
            Book a Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-white mb-1" />
          <span className="block w-6 h-px bg-white mb-1" />
          <span className="block w-4 h-px bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-sm tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://strengthculturehk.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Book a Trial
          </a>
        </div>
      )}
    </nav>
  );
}
