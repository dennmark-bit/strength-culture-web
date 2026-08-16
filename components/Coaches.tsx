export default function Coaches() {
  const coaches = [
    {
      name: 'Ian Nam',
      role: 'Head Coach · Co-Founder',
      bio: 'Add Ian\'s bio here.',
      initial: 'I',
    },
    {
      name: 'Denn Robles',
      role: 'Coach · BD Co-Founder',
      bio: 'Add Denn\'s bio here.',
      initial: 'D',
    },
    {
      name: 'Ray Tam',
      role: 'Coach',
      bio: 'Add Ray\'s bio here.',
      initial: 'R',
    },
    {
      name: 'Mark Cimafranca',
      role: 'Coach',
      bio: 'Add Mark\'s bio here.',
      initial: 'M',
    },
    {
      name: 'Jenny Burley',
      role: 'Coach',
      bio: 'Add Jenny\'s bio here.',
      initial: 'J',
    },
    {
      name: 'Ziyaad Samodien',
      role: 'Coach',
      bio: 'Add Ziyaad\'s bio here.',
      initial: 'Z',
    },
    {
      name: 'Gustavo Freire',
      role: 'Coach',
      bio: 'Add Gustavo\'s bio here.',
      initial: 'G',
    },
  ];

  return (
    <section id="coaches" className="bg-darkbg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.4em] mb-4 text-center">The Team</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-4">
          World-Class Coaches
        </h2>
        <p className="text-zinc-400 text-center max-w-xl mx-auto mb-16">
          Our coaches cue every rep, correct your form, and make sure you feel confident — whether it&apos;s your first class or your hundredth.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coaches.map((c, i) => (
            <div key={i} className="bg-darkcard border border-white/5 hover:border-gold/40 transition p-8">
              <div className="w-16 h-16 rounded-full bg-zinc-800 mb-6 flex items-center justify-center">
                <span className="text-gold font-black text-xl">{c.initial}</span>
              </div>
              <h3 className="text-lg font-black uppercase mb-1">{c.name}</h3>
              <p className="text-gold text-xs uppercase tracking-wider mb-4">{c.role}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.bio}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://strengthculturehk.momence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition inline-block"
          >
            Book Your First Class
          </a>
        </div>
      </div>
    </section>
  );
}
