import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-darkbg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-darkbg to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(160,32,47,0.07)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p
          className="text-xs uppercase tracking-[0.4em] mb-6"
          style={{ background: 'linear-gradient(90deg, #5C0F1C, #B5293E, #8B1A2B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          Central, Hong Kong
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tight">
          Strength Is<br />
          <span className="text-white">For Everyone</span>
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Train hard. Build confidence. Belong to a community that shows up — in the heart of Central HK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition"
          >
            Book a Free Trial
          </a>
          <Link
            href="#classes"
            className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-maroon-light hover:text-white transition"
          >
            See Classes
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[['6AM', 'Earliest Class'], ['10PM', 'Latest Weekday'], ['Central', 'Li Yuen St West']].map(([val, label]) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl font-black"
                style={{ background: 'linear-gradient(135deg, #5C0F1C, #B5293E, #8B1A2B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >{val}</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
