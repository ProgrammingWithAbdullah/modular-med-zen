import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import operationTheaterImage from '@/assets/operation-theater.jpg';
import labFurnitureImage from '@/assets/lab-furniture.jpg';
import scrubSinkImage from '@/assets/scrub-sink.jpg';
import mobileRacksImage from '@/assets/mobile-racks.jpg';
import chemicalStorageImage from '@/assets/chemical-storage.jpg';
import cleanroomImage from '@/assets/cleanroom.jpg';

const ProductCarousel = () => {
  const products = [
    {
      image: operationTheaterImage,
      title: 'Modular Operation Theaters',
      description: 'State-of-the-art modular operation theaters designed for maximum efficiency and safety standards.',
      features: ['ISO Certified', 'Custom Design', 'Expert Installation']
    },
    {
      image: cleanroomImage,
      title: 'Clean Room Solutions',
      description: 'Advanced clean room facilities meeting international standards for pharmaceutical and medical use.',
      features: ['HEPA Filtration', 'Controlled Environment', 'Validated Systems']
    },
    {
      image: labFurnitureImage,
      title: 'Laboratory Furniture',
      description: 'Comprehensive range of laboratory tables, storage solutions, and workstation furniture.',
      features: ['Stainless Steel', 'Chemical Resistant', 'Ergonomic Design']
    },
    {
      image: scrubSinkImage,
      title: 'Scrub Sink Units',
      description: 'Professional-grade scrub sink units with sensor controls and optimal ergonomic design.',
      features: ['Touchless Operation', 'Water Efficient', 'Antimicrobial Surface']
    },
    {
      image: chemicalStorageImage,
      title: 'Chemical Storage Cabinets',
      description: 'Safety-first chemical storage solutions with advanced ventilation and security features.',
      features: ['Safety Certified', 'Ventilation System', 'Secure Access']
    },
    {
      image: mobileRacksImage,
      title: 'Mobile Storage Racks',
      description: 'Versatile mobile storage solutions for efficient organization and easy accessibility.',
      features: ['Mobile Design', 'High Capacity', 'Durable Construction']
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
          Our Product Portfolio
        </Badge>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Complete Medical Infrastructure
          <span className="text-gradient block">Solutions</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From modular operation theaters to specialized laboratory equipment, we provide comprehensive solutions for modern healthcare facilities.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full hover-lift hover-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-foreground leading-tight">
                      {product.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;