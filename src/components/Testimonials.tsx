import type { FC } from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I needed to print 'Hello World' for a live demo and HelloPrint made it feel like a milestone instead of an afterthought.",
    name: 'Alex Rivera',
    role: 'Frontend Lead, Northwind',
    initials: 'AR',
  },
  {
    quote:
      'The offline-first angle sold me instantly. It just works — on a train, on a plane, with no signal at all.',
    name: 'Priya Nair',
    role: 'Staff Engineer, Cobalt',
    initials: 'PN',
  },
  {
    quote:
      'Cleaner than any print dialog I have ever seen. My printer is genuinely jealous of the styling.',
    name: 'Marco Bianchi',
    role: 'Indie developer',
    initials: 'MB',
  },
];

export const Testimonials: FC = () => {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 py-20 md:py-28 border-t border-[hsl(var(--border))]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="Reviews"
            title="Loved by people who ship"
            description="Developers around the world keep HelloPrint in their bookmarks for the day they need it."
          />
        </div>

        <div className="stagger mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials }) => (
            <figure
              key={name}
              className="relative flex flex-col gap-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 hover:border-[hsl(var(--primary)/0.4)] hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <Quote
                size={40}
                className="text-[hsl(var(--primary)/0.15)]"
                fill="currentColor"
                aria-hidden
              />
              <div className="flex items-center gap-1 text-[hsl(var(--primary))]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <div className="flex items-center justify-center w-11 h-11 rounded-full gradient-primary text-white text-sm font-bold shrink-0">
                  {initials}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    {name}
                  </div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))]">
                    {role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
