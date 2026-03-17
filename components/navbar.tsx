import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#00BCD4] shadow-md">
      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder logo */}
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#00BCD4]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm leading-tight uppercase tracking-wide">
            Encontra
            <br />
            Facul
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["início", "instituições", "nossa missão", "fale conosco"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-white text-sm font-medium hover:text-white/70 transition-colors lowercase tracking-wide"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Dotted decoration bar */}
      <div
        className="w-full h-[28px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "14px 9px",
        }}
      />
    </header>
  );
}