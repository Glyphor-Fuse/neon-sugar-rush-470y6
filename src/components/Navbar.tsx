import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-display tracking-tighter text-foreground group">
            NEON<span className="text-primary group-hover:text-secondary transition-colors">SUGAR</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Flavors</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
