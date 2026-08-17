const classes = [
  {
    tag: 'Strength',
    title: 'Barbell & Beyond',
    desc: 'Squat, deadlift, press. Built around the big lifts with progressive overload programming for all levels.',
    duration: '60 min',
  },
  {
    tag: 'Functional',
    title: 'Conditioning',
    desc: 'High-output sessions combining cardio, gymnastics, and strength. The turf lane meets the rings.',
    duration: '45 min',
  },
  {
    tag: 'Olympic',
    title: 'Weightlifting',
    desc: 'Snatch and clean & jerk coached by specialists. Technique-first, competition-ready.',
    duration: '75 min',
  },
  {
    tag: 'Personal Training',
    title: '1-on-1 Coaching',
    desc: 'Private sessions in the basement strength cave. Fully customised to your goals and schedule.',
    duration: 'Custom',
  },
];

export default function Format() {
  return (
    <section id="classes" className="section-pad bg-[#0F0F0F]">
      <div className="mb-12">
        <p className="label text-[#6B1A1A] mb-3">Training</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Find Your Format
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {classes.map((c) => (
          <div key={c.tag} className="bg-[#0F0F0F] p-8 flex flex-col gap-4 hover:bg-[#141414] transition-colors">
            <p className="label text-[#6B1A1A] text-[10px]">{c.tag}</p>
            <h3 className="text-xl font-black uppercase tracking-tight">{c.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">{c.desc}</p>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="label text-white/30 text-[10px]">Duration</span>
              <span className="text-white text-sm font-semibold">{c.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://strengthculturehk.com/schedule"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View Full Schedule
        </a>
      </div>
    </section>
  );
}
