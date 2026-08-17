export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#0A0A0A] overflow-hidden">
      {/* Background gradient overlay — replace with real image later */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0A0A0A]" />

      {/* Placeholder dark texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      <div className="relative z-10 section-pad pb-24">
        {/* Label */}
        <p className="label text-[#6B1A1A] mb-4">Central, Hong Kong</p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          BUILD YOUR
          <br />
          <span className="text-[#6B1A1A]">STRENGTH.</span>
          <br />
          OWN YOUR
          <br />
          CULTURE.
        </h1>

        {/* Sub */}
        <p className="text-white/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Hong Kong&apos;s most serious strength gym. Group classes, Olympic lifting,
          and personal training — all under one roof in Central.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://strengthculturehk.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Trial
          </a>
          <a href="#the-space" className="btn-outline">
            Explore the Space
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
        <span className="label text-white text-[10px]">Scroll</span>
        <div className="w-px h-10 bg-white/40" />
      </div>
    </section>
  );
}
