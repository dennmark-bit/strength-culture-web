import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-lg font-black tracking-widest uppercase text-white">
          Strength<span
            style={{ background: 'linear-gradient(90deg, #B5293E, #8B1A2B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >Culture</span>
        </Link>
        <div className="flex gap-6 text-xs uppercase tracking-wider text-zinc-500">
          <Link href="#classes" className="hover:text-white transition">Classes</Link>
          <Link href="#coaches" className="hover:text-white transition">Coaches</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Strength Culture HK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
