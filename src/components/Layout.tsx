import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Printer } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[hsl(var(--background))]">
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 border-b border-[hsl(var(--border)/0.4)] px-4 sm:px-6 py-3 sm:py-4 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg gradient-primary text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Printer size={20} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-gradient">
              HelloPrint
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xs sm:text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300"
              aria-current="page"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col" role="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-[hsl(var(--border))] no-print bg-[hsl(var(--secondary)/0.3)]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} HelloPrint. Built with precision and clarity.
          </p>
        </div>
      </footer>
    </div>
  );
};
