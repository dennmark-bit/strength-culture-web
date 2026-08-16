export default function Contact() {
  return (
    <section id="contact" className="bg-darkbg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-zinc-400 text-xs uppercase tracking-[0.4em] mb-4 text-center">Find Us</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
          Come Train With Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">Address</p>
              <p className="text-white font-bold">G/F 27-29 Li Yuen Street West</p>
              <p className="text-zinc-400">Central, Hong Kong</p>
            </div>
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">Phone</p>
              <a href="tel:+85255483571" className="text-white font-bold hover:text-zinc-300 transition">+852 5548 3571</a>
            </div>
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">Email</p>
              <a href="mailto:inquiry@strengthculturehk.com" className="text-white font-bold hover:text-zinc-300 transition">inquiry@strengthculturehk.com</a>
            </div>
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">Hours</p>
              <p className="text-zinc-400">Monday – Friday: <span className="text-white font-bold">6:00am – 10:00pm</span></p>
              <p className="text-zinc-400">Saturday, Sunday & Public Holidays: <span className="text-white font-bold">8:00am – 5:00pm</span></p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <a
              href="https://strengthculturehk.momence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-5 font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition text-center"
            >
              Book a Free Trial Class
            </a>
            <a
              href="mailto:inquiry@strengthculturehk.com"
              className="border border-white/30 text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:border-white transition text-center"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
