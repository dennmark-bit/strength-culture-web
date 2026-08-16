export default function WhatToExpect() {
  const maroonGradient = {
    background: 'linear-gradient(135deg, #5C0F1C, #B5293E, #8B1A2B)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  };

  const items = [
    {
      num: '01',
      title: 'Beginner Friendly',
      desc: 'Never touched a barbell? No problem. Every class has modifications and our coaches will guide you through technique from day one.',
    },
    {
      num: '02',
      title: 'Coach-Led Every Session',
      desc: 'No guesswork. Our coaches cue every movement, correct your form, and adjust weights and intensity to your level — every single class.',
    },
    {
      num: '03',
      title: 'A Community That Shows Up',
      desc: 'Training alone is hard. Training with people who are grinding alongside you is different. Strength Culture is built around people who show up for each other.',
    },
  ];
  return (
    <section id="about" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] mb-4 text-center" style={maroonGradient}>What to Expect</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
          You're Exactly Where<br />You Need to Be
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.num} className="border-t-2 border-maroon pt-8">
              <p className="text-4xl font-black mb-4" style={maroonGradient}>{item.num}</p>
              <h3 className="text-xl font-black uppercase mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
