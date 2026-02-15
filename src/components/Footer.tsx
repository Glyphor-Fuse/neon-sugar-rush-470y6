import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h3 className="text-2xl font-display mb-6">Join the <span className="text-primary">Rush</span></h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Subscribe for exclusive drops, secret menu items, and cyber-sweet deals.
            </p>
            <div className="flex gap-2 max-w-md">
              <Input placeholder="Enter your email" className="bg-background border-border focus-visible:ring-primary" />
              <Button>Subscribe</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Candy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Merch</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2077 Neon Sugar Rush. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
