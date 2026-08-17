const coaches = [
  {
    name: 'Head Coach',
    role: 'Strength & Conditioning',
    bio: 'Specialist in barbell sports and progressive strength programming. Has trained competitive athletes across HK.',
  },
  {
    name: 'Olympic Coach',
    role: 'Weightlifting',
    bio: 'Certified Olympic lifting coach. Competed nationally and coaches athletes from beginner to platform-ready.',
  },
  {
    name: 'Conditioning Coach',
    role: 'Functional Fitness',
    bio: 'High-output class specialist. Designs and delivers the conditioning programme for group classes.',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="section-pad bg-[#0F0F0F]">
      <div className="mb-12">
        <p className="label text-[#6B1A1A] mb-3">The Team</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Coached by the Best
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {coaches.map((c) => (
          <div key={c.name} className="bg-[#0F0F0F] p-8">
            {/* Photo placeholder */}
            <div
              className="w-full aspect-square bg-[#141414] mb-6 flex items-center justify-center"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #1a1a1a 0, #1a1a1a 1px, transparent 0, transparent 50%)',
                backgroundSize: '8px 8px',
              }}
            >
              <span className="label text-white/20">Photo</span>
            </div>
            <p className="label text-[#6B1A1A] text-[10px] mb-1">{c.role}</p>
            <h3 className="text-xl font-black uppercase tracking-tight mb-3">{c.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{c.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
