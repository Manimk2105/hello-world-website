import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Printer } from 'lucide-react';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 border-b border-white/20 px-6 py-4 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg gradient-primary text-white shadow-glow group-hover:scale-110 transition-transform">
              <Printer size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gradient">
              HelloPrint
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors"
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
      <footer className="py-8 px-6 border-t border-[hsl(var(--border))] no-print">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} HelloPrint. Built with precision and clarity.
          </p>
        </div>
      </footer>
    </div>
  );
};
