import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Printer } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[hsl(var(--secondary))]">
      {/* Navbar */}
      <nav className="bg-[hsl(var(--background))] border-b-4 border-[hsl(var(--border))] px-6 py-6 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="p-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] retro-border retro-shadow group-hover:-rotate-3">
              <Printer size={28} />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase text-[hsl(var(--foreground))]">
              HelloPrint
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-lg font-black uppercase tracking-widest hover:text-[hsl(var(--primary))] underline decoration-4 underline-offset-8 decoration-transparent hover:decoration-[hsl(var(--primary))]"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-[hsl(var(--border))] bg-[hsl(var(--muted))] no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-lg font-bold uppercase tracking-wider text-[hsl(var(--foreground))]">
            © {new Date().getFullYear()} HelloPrint. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 bg-[hsl(var(--primary))] retro-border" />
             <div className="w-8 h-8 bg-[hsl(var(--secondary))] retro-border" />
             <div className="w-8 h-8 bg-[hsl(var(--accent))] retro-border" />
          </div>
        </div>
      </footer>
    </div>
  );
};

