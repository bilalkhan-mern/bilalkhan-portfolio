import { useState } from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={Logo} alt="Bilal Khan Logo" className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="text-lg font-bold text-slate-900">Bilal Khan Pathan</p>
            <p className="text-sm text-slate-500">React Portfolio</p>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-slate-700 md:hidden"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-amber-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-3 transition hover:bg-stone-100 hover:text-amber-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
