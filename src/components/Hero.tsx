import React from 'react';
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--color-primary)"
      />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-4 px-3 rounded-full border border-secondary text-secondary text-xs font-bold tracking-widest uppercase mb-6 bg-secondary/10 backdrop-blur-md">
              Est. 2077 • Retro Confectionery
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9] text-foreground mb-6">
              SUGAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-background to-secondary animate-pulse">RUSH</span>
              <br />
              PROTOCOL
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the nostalgia of the 1950s fused with the electric taste of the future. 
              Handcrafted sweets for the midnight generation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" variant="neon" className="group">
              Shop The Drop
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost">
              View Our Story
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          {/* Main Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
                <img 
                  src="/images/hero-candy.png" 
                  alt="Floating futuristic lollipop" 
                  className="relative z-10 w-full h-full object-contain animate-[float_6s_ease-in-out_infinite]"
                />
             </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-primary/30 shadow-xl animate-[float_5s_ease-in-out_infinite_1s]">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               <span className="font-mono text-xs text-primary">SYSTEM: SUGAR_LEVEL_CRITICAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
