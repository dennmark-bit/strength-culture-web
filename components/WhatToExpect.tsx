const steps = [
  {
    num: '01',
    title: 'Walk In',
    desc: 'Check in at the front desk or via the kiosk. Our team will walk you through the space and the programme.',
  },
  {
    num: '02',
    title: 'Get Assessed',
    desc: 'Your first session includes a movement assessment so we place you in the right class — or match you with a coach.',
  },
  {
    num: '03',
    title: 'Train Hard',
    desc: 'Show up, do the work. Every session is coached. You will never be left to figure it out alone.',
  },
  {
    num: '04',
    title: 'Become the Culture',
    desc: 'Members here are not just gym-goers. They are part of a community that holds each other to a standard.',
  },
];

export default function WhatToExpect() {
  return (
    <section className="section-pad bg-[#0A0A0A]">
      <div className="mb-12">
        <p className="label text-[#6B1A1A] mb-3">Your First Visit</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          What to Expect
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col gap-4">
            <span className="text-6xl font-black text-white/10">{s.num}</span>
            <h3 className="text-lg font-black uppercase tracking-tight">{s.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://strengthculturehk.com/book"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book Your First Visit
        </a>
      </div>
    </section>
  );
}
