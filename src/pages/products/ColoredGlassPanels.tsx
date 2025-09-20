import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Sparkles, Zap, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import coloredGlassPanelsImg from '@/assets/colored-glass-panels.jpg';

const ColoredGlassPanels = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Durability & Impact Resistance",
      description: "Strong and durable material that can withstand high impact and is resistant to scratches"
    },
    {
      icon: Sparkles,
      title: "Better Visibility & Clarity", 
      description: "Provides superior visibility and clarity for enhanced operational efficiency"
    },
    {
      icon: Droplets,
      title: "Hygienic & Easy to Clean",
      description: "Non-porous surface that's easy to clean and less likely to harbor bacteria or pathogens"
    },
    {
      icon: Zap,
      title: "Long-Lasting Performance",
      description: "Resistant to fading, discoloration, or degradation over time with repeated sterilization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <div className="animate-fade-in">
            <Link 
              to="/products-services" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products & Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Colored <span className="text-gradient">Glass Panels</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our colored glass panels bring vibrancy and visual appeal to theatre spaces. We use high-quality UV Ceramic materials to create stunning and unique designs that add a touch of elegance to any theatre.
                </p>
                <div className="flex justify-center">
                  <Link to="/locate-us">
                    <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                      Get Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={coloredGlassPanelsImg} 
                    alt="Colored Glass Panels" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Superior <span className="text-gradient">Glass Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Glass is the perfect material for medical environments, offering unmatched durability, hygiene, and aesthetic appeal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-cyan/10 mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced <span className="text-gradient">UV Ceramic Materials</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Glass is a strong and durable material that can withstand high impact and is resistant to scratches. It provides better visibility and clarity, making glass non-porous and easy to clean, making it more hygienic in a hospital setting.
                </p>
                
                <p>
                  Our advanced manufacturing process ensures that glass panels are less likely to harbor bacteria or other pathogens, making them ideal for sterile medical environments where cleanliness is paramount.
                </p>
                
                <p>
                  Glass is a long-lasting material that is resistant to fading, discoloration, or degradation over time. It can withstand repeated cleaning and sterilization procedures without compromising its structural integrity or aesthetic appeal.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Card className="bg-gradient-elegant/10 border-glass p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Technical Specifications
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-glass">
                    <span className="font-medium text-foreground">Impact Resistance</span>
                    <span className="text-primary font-semibold">High-Grade</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-glass">
                    <span className="font-medium text-foreground">UV Protection</span>
                    <span className="text-primary font-semibold">Ceramic Coating</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-glass">
                    <span className="font-medium text-foreground">Cleaning Compatibility</span>
                    <span className="text-primary font-semibold">All Sterilants</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-glass">
                    <span className="font-medium text-foreground">Scratch Resistance</span>
                    <span className="text-primary font-semibold">Superior</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Transform Your Space with <span className="text-gradient">Elegant Glass</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our colored glass panels can enhance both the functionality and aesthetic appeal of your medical facility.
            </p>
            <div className="flex justify-center">
              <Link to="/locate-us">
                <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColoredGlassPanels;