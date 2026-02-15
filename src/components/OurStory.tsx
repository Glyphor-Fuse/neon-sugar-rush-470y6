import React from 'react';
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-secondary rounded-br-3xl opacity-50" />
            
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/images/story.png" 
                alt="Candy artisan working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display leading-tight">
              Forged in <br />
              <span className="text-secondary">Neon</span> & Sugar.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Neon Sugar Rush wasn't born in a kitchen—it was compiled in a lab. 
                We wanted to bring back the tangible joy of 1950s candy shops but stripped of the artificial dyes and boring flavors.
              </p>
              <p>
                Our confectioners are part chemist, part artist. Every batch is sonic-mixed for perfect texture and flash-cooled to lock in flavor profiles that don't exist in nature.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <span className="block text-3xl font-display text-primary mb-1">100%</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Vegan Base</span>
              </div>
              <div>
                <span className="block text-3xl font-display text-secondary mb-1">24h</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Shipping</span>
              </div>
              <div>
                <span className="block text-3xl font-display text-accent mb-1">50+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Flavors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
