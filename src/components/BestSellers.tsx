import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Neon Rings",
    price: "$12.00",
    image: "/images/product-1.png",
    tag: "Best Seller",
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Cyber Sours",
    price: "$14.50",
    image: "/images/product-2.png",
    tag: "Limited",
    color: "bg-secondary"
  },
  {
    id: 3,
    name: "Galaxy Chews",
    price: "$9.00",
    image: "/images/product-3.png",
    tag: "New",
    color: "bg-accent"
  },
  {
    id: 4,
    name: "Quantum Pops",
    price: "$18.00",
    image: "/images/product-4.png",
    tag: "Viral",
    color: "bg-chart-3"
  }
];

const BestSellers = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-4">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Meta</span>
            </h2>
            <p className="text-muted-foreground">Top rated confectionery hardware.</p>
          </div>
          <Button variant="link" className="text-primary hidden md:block">
            View Full Inventory &rarr;
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1 h-full">
                  <Card className="group h-full bg-card border-border overflow-hidden relative hover:border-primary transition-colors duration-300">
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-foreground ${product.color}`}>
                        {product.tag}
                      </span>
                    </div>
                    
                    <div className="relative aspect-square overflow-hidden bg-background">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                         <Button size="sm" className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            Quick Add <Plus className="ml-2 w-4 h-4" />
                         </Button>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold font-display tracking-wide">{product.name}</h3>
                        <span className="text-primary font-mono">{product.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Synthetic flavor enhancement enabled.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BestSellers;
