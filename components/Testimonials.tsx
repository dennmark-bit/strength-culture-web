const quotes = [
  {
    text: 'Best gym in Hong Kong, no question. The coaching is world-class and the community keeps you coming back.',
    author: 'Member since 2022',
  },
  {
    text: 'I went from never touching a barbell to hitting a 120kg squat in 6 months. The programming here works.',
    author: 'Member since 2023',
  },
  {
    text: 'The basement PT sessions changed everything for me. Having a dedicated coach in a serious facility makes all the difference.',
    author: 'PT Client',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-[#0A0A0A]">
      <div className="mb-12">
        <p className="label text-[#6B1A1A] mb-3">Community</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          What Members Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {quotes.map((q, i) => (
          <div key={i} className="bg-[#0A0A0A] p-8 flex flex-col gap-6">
            <span className="text-5xl text-[#6B1A1A] font-black leading-none">&ldquo;</span>
            <p className="text-white/70 text-base leading-relaxed flex-1">{q.text}</p>
            <p className="label text-white/30 text-[10px]">{q.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
