export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-black tracking-[0.25em] uppercase text-sm mb-1">STRENGTH CULTURE</p>
          <p className="text-white/30 text-xs">G/F 27-29 Li Yuen Street West, Central, Hong Kong</p>
        </div>

        <div className="flex gap-6 text-xs text-white/40">
          <a
            href="https://instagram.com/strengthculturehk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors tracking-widest uppercase"
          >
            Instagram
          </a>
          <a
            href="https://strengthculturehk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors tracking-widest uppercase"
          >
            Book Now
          </a>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Strength Culture HK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
