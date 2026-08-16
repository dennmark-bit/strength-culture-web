export default function Format() {
  const maroonGradient = {
    background: 'linear-gradient(135deg, #5C0F1C, #B5293E, #8B1A2B)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  };
  return (
    <section id="classes" className="bg-darkbg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] mb-4 text-center" style={maroonGradient}>What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
          Train Your Way
        </h2>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="bg-darkcard p-10 border border-white/5 hover:border-maroon/40 transition group">
            <p className="text-xs uppercase tracking-widest mb-4" style={maroonGradient}>01. Community</p>
            <h3 className="text-3xl font-black uppercase mb-4">Group Classes</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Coach-led sessions where you train alongside a community that pushes you further. Covering strength, conditioning, and functional fitness — structured programming that actually gets results.
            </p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider border-l-2 border-maroon pl-4">
              PRO TIP: Not sure where to start? Book a free consultation and our coaches will recommend the right class for your level.
            </p>
          </div>
          <div className="bg-darkcard p-10 border border-white/5 hover:border-maroon/40 transition group">
            <p className="text-xs uppercase tracking-widest mb-4" style={maroonGradient}>02. 1-on-1</p>
            <h3 className="text-3xl font-black uppercase mb-4">Personal Training</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Fully tailored programming designed around your goals, schedule, and fitness level. Whether you're a beginner or an experienced athlete, your coach builds the plan around you.
            </p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider border-l-2 border-maroon pl-4">
              PRO TIP: Great for working around injuries, hitting specific targets, or fast-tracking results with dedicated attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
