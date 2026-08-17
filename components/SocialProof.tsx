const stats = [
  { value: '7+', label: 'Years in Central HK' },
  { value: '500+', label: 'Active Members' },
  { value: '3', label: 'Training Floors' },
  { value: '20+', label: 'Weekly Classes' },
];

export default function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-[#0F0F0F]">
      <div className="section-pad py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-[#6B1A1A] mb-1">{s.value}</p>
              <p className="label text-white/40 text-[10px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
