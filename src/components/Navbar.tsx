import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: FC = () => {
  const handlePrint = () => window.print();

  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/20 px-6 py-3.5 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="p-2 rounded-xl gradient-primary text-white shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Printer size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient">
            HelloPrint
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.6)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={handlePrint}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white text-sm font-semibold shadow-glow hover:shadow-xl hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))] focus-visible:outline-offset-2"
        >
          <Printer size={16} className="group-hover:rotate-12 transition-transform" />
          Print now
        </button>
      </div>
    </nav>
  );
};
