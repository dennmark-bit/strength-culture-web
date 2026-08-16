import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-lg font-black tracking-widest uppercase">
          Strength<span className="text-gold">Culture</span>
        </Link>
        <div className="flex gap-6 text-xs uppercase tracking-wider text-zinc-500">
          <Link href="#classes" className="hover:text-gold transition">Classes</Link>
          <Link href="#coaches" className="hover:text-gold transition">Coaches</Link>
          <Link href="#contact" className="hover:text-gold transition">Contact</Link>
        </div>
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Strength Culture HK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
