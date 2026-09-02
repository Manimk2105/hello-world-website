import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Printer, Globe, Share2, Code2, Heart } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Templates', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.4)] no-print">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl gradient-primary text-white shadow-glow group-hover:scale-110 transition-transform">
                <Printer size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-gradient">
                HelloPrint
              </span>
            </Link>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xs leading-relaxed">
              The most elegant way to print the most famous words in computing
              history. Offline-first, accessible, and yours to print.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Globe, label: 'Website' },
                { icon: Share2, label: 'Share' },
                { icon: Code2, label: 'Source' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="p-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} HelloPrint. Built with precision and clarity.
          </p>
          <p className="text-sm text-[hsl(var(--muted-foreground))] flex items-center gap-1.5">
            Made with <Heart size={13} className="text-[hsl(var(--primary))]" fill="currentColor" /> for the love of the code
          </p>
        </div>
      </div>
    </footer>
  );
};
