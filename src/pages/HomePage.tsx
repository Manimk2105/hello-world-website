import React from 'react';
import { Printer, Sparkles, Terminal } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const HomePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-4xl w-full text-center space-y-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-[hsl(var(--secondary))] retro-border retro-shadow text-[hsl(var(--foreground))] text-sm font-black uppercase tracking-widest no-print transform -rotate-1 mx-auto">
          <Sparkles size={16} />
          <span>Analog Printing System v1.0</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-tight text-[hsl(var(--foreground))] uppercase transform rotate-1">
          Hello <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 retro-border shadow-[8px_8px_0px_hsl(var(--foreground))]">World.</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-[hsl(var(--foreground))] font-bold leading-relaxed bg-[hsl(var(--card))] p-6 retro-border retro-shadow">
            Experience the tactile satisfaction of a physical print. 
            The most legendary greeting, now in high-contrast analog.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 no-print">
            <Button
              onClick={handlePrint}
              variant="primary"
              size="lg"
              className="flex items-center gap-3"
            >
              <Printer size={24} />
              Commit to Paper
            </Button>
            
            <div className="flex items-center gap-3 text-lg font-black uppercase tracking-tighter px-8 py-4 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] retro-border retro-shadow transform -rotate-2">
              <Terminal size={20} />
              <span>Status: READY</span>
            </div>
          </div>
        </div>

        {/* Preview Visualization */}
        <div className="mt-24 print:mt-10 mx-auto max-w-2xl transform rotate-1">
          <Card title="Output Preview" className="bg-white">
            <div className="aspect-[1/1.41] bg-white border-4 border-dashed border-[hsl(var(--border))] p-12 text-left relative overflow-hidden group">
              <div className="space-y-10">
                <div className="w-16 h-2 bg-[hsl(var(--primary))] no-print" />
                <div className="space-y-6">
                  <h2 className="text-6xl font-black text-black leading-tight uppercase tracking-tighter underline decoration-8 decoration-[hsl(var(--secondary))]">
                    Hello World
                  </h2>
                  <div className="h-1 w-full bg-[hsl(var(--border))] no-print" />
                  <p className="text-black text-lg font-bold uppercase tracking-tight">
                    ESTABLISHED 2025 // AGENT OPERATED // ANALOG OUTPUT
                  </p>
                </div>
                
                <div className="pt-24 space-y-4 no-print opacity-20">
                  <div className="h-4 w-3/4 bg-black" />
                  <div className="h-4 w-1/2 bg-black" />
                  <div className="h-4 w-5/6 bg-black" />
                </div>
              </div>

              {/* Print-only content replacement */}
              <div className="hidden print:block absolute inset-0 p-20 flex flex-col items-center justify-center text-center">
                 <h1 className="text-8xl font-black uppercase tracking-tighter border-8 border-black p-8 transform rotate-[-3deg]">
                   Hello World
                 </h1>
                 <p className="mt-8 font-black uppercase text-xl">Printed by HelloPrint</p>
              </div>
            </div>
          </Card>
          <p className="mt-8 text-lg font-black uppercase tracking-widest text-[hsl(var(--muted-foreground))] no-print transform -rotate-1">
            ↓ INITIATE SEQUENCE VIA BUTTON ABOVE ↓
          </p>
        </div>
      </div>
    </div>
  );
};

