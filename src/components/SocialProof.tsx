import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "I've never tasted anything like the Cyber-Sour strips. It's like my tongue went to a rave in 2099.",
    name: "Alex V.",
    title: "Verified Addict",
  },
  {
    quote: "The packaging alone is worth it. Looks sick on my gaming setup. The Neon Gummies are legit.",
    name: "Sarah K.",
    title: "Streamer",
  },
  {
    quote: "Finally, a candy shop that gets the aesthetic. Fast shipping, amazing flavor, total vibe.",
    name: "Marcus J.",
    title: "Designer",
  },
  {
    quote: "The mystery box was insane. Got three flavors that aren't even on the site yet.",
    name: "Panda_Grl",
    title: "Club Member",
  },
  {
    quote: "Sugar Rush Protocol is the only thing getting me through these late night coding sessions.",
    name: "Devin R.",
    title: "Full Stack Dev",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-background border-y border-border/50 relative">
       <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-display text-foreground">The <span className="text-secondary">Transmission</span> Feed</h2>
       </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default SocialProof;
