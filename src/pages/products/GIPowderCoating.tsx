import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Zap, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import giPowderCoatingImg from '@/assets/gi-powder-coating.jpg';

const GIPowderCoating = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Corrosion Protection",
      description: "Superior protection against corrosion and environmental damage"
    },
    {
      icon: Zap,
      title: "Durability",
      description: "Long-lasting finish that withstands daily use and harsh conditions"
    },
    {
      icon: Clock,
      title: "Extended Lifespan",
      description: "Significantly extends the life of theatre systems and components"
    },
    {
      icon: Star,
      title: "Professional Finish",
      description: "High-quality aesthetic finish that maintains its appearance over time"
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
                  GI Powder <span className="text-gradient">Coating</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our GI powder coated designs provide durability and protection against corrosion. This coating technique ensures that the theatre systems are long-lasting and able to withstand the rigors of daily use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Technical Details
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={giPowderCoatingImg} 
                    alt="GI Powder Coating Process" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coating <span className="text-gradient">Advantages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our advanced GI powder coating process delivers exceptional protection and aesthetic appeal for all medical equipment and infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={advantage.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-pink/10 mb-4 group-hover:bg-accent-pink/20 transition-colors">
                    <advantage.icon className="w-7 h-7 text-accent-pink" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Coating <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art powder coating process ensures superior finish and long-term protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Surface Preparation</h3>
                <p className="text-muted-foreground">
                  Thorough cleaning and preparation of metal surfaces to ensure optimal coating adhesion and finish quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Powder Application</h3>
                <p className="text-muted-foreground">
                  Electrostatic application of premium powder coating materials for even coverage and superior finish.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Curing Process</h3>
                <p className="text-muted-foreground">
                  High-temperature curing process that bonds the coating permanently to create a durable, protective finish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technical <span className="text-gradient">Specifications</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Coating Properties</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness</span>
                      <span className="font-medium text-foreground">60-100 microns</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hardness</span>
                      <span className="font-medium text-foreground">2H pencil hardness</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Adhesion</span>
                      <span className="font-medium text-foreground">5B cross-cut test</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impact Resistance</span>
                      <span className="font-medium text-foreground">160 inch-lbs</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance Standards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salt Spray Test</span>
                      <span className="font-medium text-foreground">500+ hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">UV Resistance</span>
                      <span className="font-medium text-foreground">ASTM G154</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chemical Resistance</span>
                      <span className="font-medium text-foreground">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temperature Range</span>
                      <span className="font-medium text-foreground">-40°C to 150°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-elegant/10">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Protect Your Investment with <span className="text-gradient">Premium Coating</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ensure the longevity and performance of your medical equipment with our advanced GI powder coating solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Request Service Quote
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GIPowderCoating;