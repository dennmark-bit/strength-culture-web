export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#0F0F0F] border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="label text-[#6B1A1A] mb-3">Visit Us</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Find Us in
            <br />
            <span className="text-white/30">Central HK</span>
          </h2>

          <div className="flex flex-col gap-5 text-sm text-white/60">
            <div>
              <p className="label text-white/30 text-[10px] mb-1">Address</p>
              <p>G/F 27-29 Li Yuen Street West</p>
              <p>Central, Hong Kong Island</p>
            </div>
            <div>
              <p className="label text-white/30 text-[10px] mb-1">Hours</p>
              <p>Mon – Fri: 6:30am – 9:30pm</p>
              <p>Sat – Sun: 8:00am – 6:00pm</p>
            </div>
            <div>
              <p className="label text-white/30 text-[10px] mb-1">Get in Touch</p>
              <a
                href="https://wa.me/85200000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6B1A1A] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://strengthculturehk.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Free Trial
            </a>
          </div>
        </div>

        {/* Right — Map embed placeholder */}
        <div
          className="w-full min-h-[320px] bg-[#141414] flex items-center justify-center"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #1a1a1a 0, #1a1a1a 1px, transparent 0, transparent 50%)',
            backgroundSize: '8px 8px',
          }}
        >
          <span className="label text-white/20">Map Embed — Add Google Maps iframe</span>
        </div>
      </div>
    </section>
  );
}
