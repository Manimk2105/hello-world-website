import type { FC } from 'react';
import { Printer, Sparkles, ArrowRight, Zap, WifiOff, Feather } from 'lucide-react';

const stats = [
  { icon: Zap, value: '100%', label: 'Success rate' },
  { icon: Feather, value: '~3kb', label: 'Print engine' },
  { icon: WifiOff, value: '0', label: 'Servers needed' },
];

export const Hero: FC = () => {
  const handlePrint = () => window.print();

  return (
    <section className="relative flex-1 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[640px] h-[640px] max-w-[90vw] rounded-full bg-[hsl(var(--primary)/0.08)] blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] max-w-[60vw] rounded-full bg-[hsl(var(--accent)/0.08)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="reveal space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] text-sm font-medium no-print">
              <Sparkles size={14} />
              <span>The Ultimate Print Experience</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] text-[hsl(var(--foreground))]">
              Print <span className="text-gradient">Hello&nbsp;World</span>,
              <br className="hidden sm:block" /> beautifully.
            </h1>

            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-xl leading-relaxed">
              The most elegant way to put the most famous words in computing
              history onto paper. One click, no servers, no nonsense.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 no-print">
              <button
                onClick={handlePrint}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl gradient-primary text-white font-bold text-base shadow-glow hover:shadow-xl hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))] focus-visible:outline-offset-2"
              >
                <Printer size={20} className="group-hover:rotate-12 transition-transform" />
                Print now
              </button>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[hsl(var(--border))] glass text-[hsl(var(--foreground))] font-semibold text-base hover:border-[hsl(var(--primary)/0.4)] transition-all"
              >
                See how it works
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-4 pt-4 max-w-md no-print">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))]">
                    <Icon size={13} className="text-[hsl(var(--primary))]" />
                    {label}
                  </dt>
                  <dd className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual — a sheet of paper */}
          <div className="reveal relative lg:pl-8">
            <div className="relative mx-auto max-w-md">
              {/* glow ring behind */}
              <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--primary)/0.1)] blur-2xl -z-10" />

              <div className="float-slow aspect-[1/1.41] w-full rounded-2xl bg-white shadow-elegant border border-[hsl(var(--border))] p-10 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary no-print" />

                <div className="space-y-8">
                  <div className="flex items-center justify-between no-print">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg gradient-primary" />
                      <div className="w-16 h-2 rounded-full bg-zinc-200" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-200" />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-serif italic text-black leading-tight">
                      Hello World
                    </h2>
                    <div className="h-px w-full bg-zinc-200" />
                    <p className="font-serif italic text-zinc-500 text-sm leading-relaxed">
                      Generated in a browser sandbox. Purely for the love of the
                      code.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 no-print">
                    <div className="h-2.5 w-11/12 rounded bg-zinc-100" />
                    <div className="h-2.5 w-9/12 rounded bg-zinc-100" />
                    <div className="h-2.5 w-10/12 rounded bg-zinc-100" />
                    <div className="h-2.5 w-7/12 rounded bg-zinc-100" />
                  </div>
                </div>

                {/* Print-only content */}
                <div className="hidden print:flex absolute inset-0 items-center justify-center">
                  <h1 className="text-7xl font-serif font-bold italic -rotate-6 text-black">
                    Hello World
                  </h1>
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-[hsl(var(--muted-foreground))] no-print">
                Click <span className="font-semibold text-[hsl(var(--foreground))]">Print now</span> to send this to paper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
