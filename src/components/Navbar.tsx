import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { config } from '../config';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-zinc-100 transition hover:text-emerald-400"
        >
          {config.name}
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-zinc-800/50 bg-black/90 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-zinc-400 transition hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
