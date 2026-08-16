export default function Testimonials() {
  const testimonials = [
    { quote: 'Add member testimonial here.', name: 'Member Name', detail: 'Member since 2024' },
    { quote: 'Add member testimonial here.', name: 'Member Name', detail: 'Member since 2023' },
    { quote: 'Add member testimonial here.', name: 'Member Name', detail: 'Member since 2025' },
  ];
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.4em] mb-4 text-center">Community</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
          Built on Real Results
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-darkcard border border-white/5 p-8">
              <p className="text-gold text-3xl font-black mb-4">"</p>
              <p className="text-zinc-300 leading-relaxed mb-6">{t.quote}</p>
              <p className="text-white font-bold text-sm uppercase tracking-wider">{t.name}</p>
              <p className="text-zinc-500 text-xs mt-1">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
