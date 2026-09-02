import type { FC } from 'react';
import {
  Zap,
  WifiOff,
  Accessibility,
  Palette,
  Package,
  Gift,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type Feature = {
  icon: typeof Zap;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Instant',
    description: 'From a single click to a sheet of paper in one frame. No loaders, no spinners, no waiting.',
  },
  {
    icon: WifiOff,
    title: 'Offline-first',
    description: 'Every byte runs inside your browser. No servers, no tracking, no telemetry — ever.',
  },
  {
    icon: Accessibility,
    title: 'Accessible',
    description: 'Keyboard navigable, screen-reader friendly, and high-contrast ready out of the box.',
  },
  {
    icon: Palette,
    title: 'Beautiful by default',
    description: 'Templates that look just as good on paper as they do on screen. Print is a design surface.',
  },
  {
    icon: Package,
    title: 'Tiny footprint',
    description: 'The whole print engine ships in a few kilobytes. Your bandwidth will barely notice.',
  },
  {
    icon: Gift,
    title: 'Free forever',
    description: 'No account, no paywall, no upsell. Open source and yours to print, always.',
  },
];

export const Features: FC = () => {
  return (
    <section id="features" className="scroll-mt-24 py-20 md:py-28 border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Features"
            title={<>Everything you need to print, nothing you don't</>}
            description="HelloPrint strips printing back to its essence and rebuilds it with care — fast, private, and genuinely pleasant to use."
          />
        </div>

        <div className="stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 hover:border-[hsl(var(--primary)/0.4)] hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 group-hover:scale-x-100 origin-left gradient-primary transition-transform duration-500" />
              <div className="mb-5 inline-flex p-3 rounded-xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] group-hover:gradient-primary group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
