import type { FC } from 'react';
import { Printer, ArrowUpRight } from 'lucide-react';

export const CTA: FC = () => {
  const handlePrint = () => window.print();

  return (
    <section className="px-6 py-20 md:py-28 border-t border-[hsl(var(--border))]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal-on-scroll relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 md:py-20 text-center shadow-glow">
          {/* decorative spinning ring */}
          <div
            aria-hidden
            className="spin-slow pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/20"
          />
          <div
            aria-hidden
            className="spin-slow pointer-events-none absolute -bottom-32 -left-24 w-80 h-80 rounded-full border border-white/10"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl">
              Ready to put it on paper?
            </h2>
            <p className="text-lg text-white/85 max-w-xl leading-relaxed">
              One click separates you from the most satisfying print of your
              life. Go ahead — make your mark.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 no-print">
              <button
                onClick={handlePrint}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[hsl(var(--primary))] font-bold text-base hover:-translate-y-0.5 hover:shadow-xl transition-all focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <Printer size={20} className="group-hover:rotate-12 transition-transform" />
                Print now
              </button>
              <a
                href="#features"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                Explore features
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
