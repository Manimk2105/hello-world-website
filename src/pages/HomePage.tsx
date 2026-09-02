import React from 'react';
import { Printer, Sparkles, Terminal } from 'lucide-react';

export const HomePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--primary)/0.05)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-8 sm:space-y-12 fade-in relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] text-xs sm:text-sm font-medium no-print">
          <Sparkles size={14} />
          <span>The Ultimate Print Experience</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight text-[hsl(var(--foreground))]">
            Hello <span className="text-gradient">World.</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
          The most elegant way to print the most famous words in computing history. Ready to make your mark on paper?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 no-print pt-4">
          <button
            onClick={handlePrint}
            aria-label="Print the Hello World document"
            className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl gradient-primary text-white font-bold text-base sm:text-lg shadow-glow hover:shadow-xl active:shadow-md transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
          >
            <Printer size={20} className="group-hover:rotate-12 transition-transform" />
            Print Now
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-[hsl(var(--border))] glass">
            <Terminal size={16} />
            <span>Success Rate: 100%</span>
          </div>
        </div>

        {/* Preview Visualization */}
        <div className="mt-12 sm:mt-20 print:mt-10 mx-auto w-full max-w-2xl">
          <div className="aspect-[1/1.41] bg-white rounded-lg shadow-elegant border border-[hsl(var(--border))] p-8 sm:p-12 text-left relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Top Bar for UI feel */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[hsl(var(--primary))] opacity-10 group-hover:opacity-100 transition-opacity no-print" />

            <div className="space-y-6 sm:space-y-8">
              <div className="w-12 h-1 bg-[hsl(var(--primary)/0.2)] no-print" />
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif text-black leading-tight italic">
                  Hello World
                </h2>
                <div className="h-0.5 w-full bg-[hsl(var(--border)/0.5)] no-print" />
                <p className="text-zinc-600 text-xs sm:text-sm italic font-serif">
                  Generated in a browser sandbox. Purely for the love of the code.
                </p>
              </div>

              <div className="pt-12 sm:pt-20 space-y-3 sm:space-y-4 no-print">
                <div className="h-2 w-3/4 bg-zinc-100 rounded" />
                <div className="h-2 w-1/2 bg-zinc-100 rounded" />
                <div className="h-2 w-5/6 bg-zinc-100 rounded" />
              </div>
            </div>

            {/* Print-only content */}
            <div className="hidden print:flex absolute inset-0 items-center justify-center text-center">
              <h1 className="text-6xl sm:text-7xl font-serif font-bold italic" style={{ transform: 'rotate(-5deg)' }}>
                Hello World
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] no-print">
            Click "Print Now" to see this on paper.
          </p>
        </div>
      </div>
    </div>
  );
};
