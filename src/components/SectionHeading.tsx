import type { FC, ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
};

export const SectionHeading: FC<Props> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-[hsl(var(--foreground))] max-w-2xl">
        {title}
      </h2>
      {description ? (
        <p className={`text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};
