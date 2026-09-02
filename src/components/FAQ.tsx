import { useState } from 'react';
import type { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type QA = { question: string; answer: string };

const faqs: QA[] = [
  {
    question: 'Do I need an account?',
    answer: "No. Open the page, hit print. That's the entire experience — there's nothing to sign up for and nothing to log into.",
  },
  {
    question: 'Does it really work offline?',
    answer: 'Yes. HelloPrint runs entirely in your browser. Once the page has loaded, you can drop your network connection and it keeps working.',
  },
  {
    question: 'Is it actually free?',
    answer: 'Forever. No ads, no upsell, and no premium tier hiding behind a print dialog. Open source and free for everyone.',
  },
  {
    question: 'Can I customize the text?',
    answer: 'Absolutely. Swap in your own words, pick an accent color, and print. See the Features section for everything you can tweak.',
  },
  {
    question: 'What about my printer?',
    answer: "HelloPrint goes through your browser's native print flow, so any printer your operating system knows about will work without extra setup.",
  },
  {
    question: 'Is my data sent anywhere?',
    answer: 'Never. There is no backend. Nothing about what you print leaves your device.',
  },
];

export const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28 border-t border-[hsl(var(--border))]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you might wonder about before your first print."
          />
        </div>

        <div className="stagger mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border bg-[hsl(var(--card))] transition-colors ${
                  isOpen
                    ? 'border-[hsl(var(--primary)/0.4)]'
                    : 'border-[hsl(var(--border))]'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))] focus-visible:outline-offset-2 rounded-xl"
                  >
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[hsl(var(--primary))] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
