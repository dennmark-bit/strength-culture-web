const floors = [
  {
    id: 'entrance',
    tag: 'Ground Floor',
    title: 'The Culture Starts Here',
    description:
      'Walk in from Li Yuen Street West and you feel it immediately. Dark walls, heavy metal, and a vibe that tells you this is serious. The lobby sets the tone — no fluff, just strength.',
    details: ['Front desk & check-in', 'Merchandise & retail', 'Community board & events'],
  },
  {
    id: 'main',
    tag: 'First Floor',
    title: 'The Main Floor',
    description:
      'The heart of Strength Culture. Group classes run on the long turf lane, gymnastic rings hang from the ceiling, and rows of Rogue and Eleiko equipment line the walls. This is where the work gets done.',
    details: [
      'Turf sprint & sled lane',
      'Gymnastic rings & rope climbs',
      'Full Rogue & Eleiko barbell setup',
      'Kettlebells, dumbbells & medicine balls',
      'Assault bikes & rowers',
      'Programming screens & class timer',
    ],
  },
  {
    id: 'basement',
    tag: 'Basement',
    title: 'The Strength Cave',
    description:
      'Underground. Raw. Purpose-built for heavy lifting. Olympic platforms, power racks, cable systems, and machines fill the basement — the domain of personal training and serious strength programming.',
    details: [
      'Olympic lifting platforms',
      'Power racks & squat stands',
      'Cable & pulley systems',
      'Plate-loaded machines',
      'PT & 1-on-1 coaching zone',
    ],
  },
];

export default function TheSpace() {
  return (
    <section id="the-space" className="section-pad bg-[#0A0A0A]">
      {/* Header */}
      <div className="mb-16">
        <p className="label text-[#6B1A1A] mb-3">The Space</p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Three Floors.
          <br />
          <span className="text-white/30">One Culture.</span>
        </h2>
      </div>

      {/* Floors */}
      <div className="flex flex-col gap-0">
        {floors.map((floor, i) => (
          <div
            key={floor.id}
            className={`grid md:grid-cols-2 gap-0 border-t border-white/10 py-12 ${
              i % 2 === 1 ? 'md:[direction:rtl]' : ''
            }`}
          >
            {/* Image placeholder */}
            <div
              className="w-full aspect-[4/3] bg-[#141414] flex items-center justify-center md:[direction:ltr]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #1a1a1a 0, #1a1a1a 1px, transparent 0, transparent 50%)',
                backgroundSize: '8px 8px',
              }}
            >
              <span className="label text-white/20">{floor.tag} — Photo Coming Soon</span>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-0 md:px-12 pt-8 md:pt-0 md:[direction:ltr]">
              <p className="label text-[#6B1A1A] mb-3">{floor.tag}</p>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                {floor.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{floor.description}</p>
              <ul className="flex flex-col gap-2">
                {floor.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-xs text-white/60">
                    <span className="w-1 h-1 rounded-full bg-[#6B1A1A] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
