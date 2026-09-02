import type { FC } from 'react';
import { MousePointerClick, SlidersHorizontal, Printer } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type Step = {
  icon: typeof MousePointerClick;
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MousePointerClick,
    number: '01',
    title: 'Pick a template',
    description: 'Choose from a handful of curated layouts, each tuned to look right on real paper.',
  },
  {
    icon: SlidersHorizontal,
    number: '02',
    title: 'Make it yours',
    description: 'Tweak the words, the accent, and the weight until it reads exactly the way you want.',
  },
  {
    icon: Printer,
    number: '03',
    title: 'Hit print',
    description: 'Send it straight to your printer in a single click. No drivers, no dialogs, no drama.',
  },
];

export const HowItWorks: FC = () => {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-20 md:py-28 border-t border-[hsl(var(--border))] gradient-subtle"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps from idea to paper"
            description="No setup, no account, no learning curve. If you can click a button, you can print."
          />
        </div>

        <div className="stagger mt-16 grid gap-6 md:grid-cols-3 relative">
          {/* connecting line on md+ */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

          {steps.map(({ icon: Icon, number, title, description }) => (
            <div
              key={number}
              className="relative flex flex-col items-center text-center gap-4 bg-[hsl(var(--card))] rounded-2xl border border-[hsl(var(--border))] p-8 shadow-elegant"
            >
              <div className="relative">
                <div className="inline-flex p-4 rounded-2xl gradient-primary text-white shadow-glow">
                  <Icon size={26} />
                </div>
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-xs font-bold text-[hsl(var(--primary))]">
                  {number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
