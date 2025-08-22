import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Droplets, Palette, Wrench, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import antiMicrobialFlooringImg from '@/assets/anti-microbial-flooring.jpg';

const AntiMicrobialFlooring = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Durability",
      description: "Exceptional resistance to wear, impact, and heavy traffic in medical environments"
    },
    {
      icon: Droplets,
      title: "Easy Maintenance",
      description: "Simple cleaning procedures with resistance to medical disinfectants and chemicals"
    },
    {
      icon: Palette,
      title: "Hygienic",
      description: "Non-porous surface prevents bacterial growth and maintains sterile conditions"
    },
    {
      icon: Star,
      title: "Design Versatility",
      description: "Wide range of colors and patterns to match any healthcare facility design"
    },
    {
      icon: Wrench,
      title: "Comfort & Noise Reduction",
      description: "Comfortable underfoot with excellent sound absorption properties"
    },
    {
      icon: CheckCircle,
      title: "Cost-Effective",
      description: "Long-lasting performance with minimal maintenance requirements reduces total cost"
    }
  ];

  const properties = [
    {
      title: "Homogeneous Construction",
      description: "Single layer vinyl material throughout thickness ensures consistent performance and appearance even with wear.",
      benefits: ["Uniform color throughout", "No delamination risk", "Consistent performance", "Long-term durability"]
    },
    {
      title: "Manufacturing Process",
      description: "Homogeneous mixture of vinyl resins, plasticizers, and pigments fused together during manufacturing.",
      benefits: ["Superior material bonding", "Enhanced durability", "Color consistency", "Quality assurance"]
    },
    {
      title: "Medical Grade Performance",
      description: "Specifically designed for healthcare environments with anti-microbial properties and chemical resistance.",
      benefits: ["Anti-microbial surface", "Chemical resistant", "Easy sterilization", "Medical compliance"]
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
                  Anti-Microbial <span className="text-gradient">Flooring</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Homogeneous vinyl flooring is a type of resilient flooring made from a single layer of vinyl material throughout its thickness. Unlike layered vinyl, it's composed of a homogeneous mixture of vinyl resins, plasticizers, and pigments fused together during manufacturing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    View Samples
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={antiMicrobialFlooringImg} 
                    alt="Anti-Microbial Flooring" 
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
              Flooring <span className="text-gradient">Advantages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Homogeneous vinyl flooring offers multiple benefits that make it the ideal choice for healthcare environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={advantage.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <advantage.icon className="w-7 h-7 text-primary" />
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

      {/* Properties Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flooring <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the unique construction and benefits of homogeneous vinyl flooring
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card 
                key={property.title}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {property.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {property.description}
                  </p>
                  
                  <div className="space-y-3">
                    {property.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">Physical Properties</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness</span>
                      <span className="font-medium text-foreground">2.0 - 3.0 mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wear Layer</span>
                      <span className="font-medium text-foreground">Homogeneous</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Surface Texture</span>
                      <span className="font-medium text-foreground">Smooth/Textured</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="font-medium text-foreground">2.5-3.5 kg/m²</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance Standards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slip Resistance</span>
                      <span className="font-medium text-foreground">R10-R12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fire Rating</span>
                      <span className="font-medium text-foreground">Class B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chemical Resistance</span>
                      <span className="font-medium text-foreground">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Anti-Microbial</span>
                      <span className="font-medium text-foreground">Yes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-gradient-elegant/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ideal flooring solution for various healthcare and medical facility areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Operating Theaters</h3>
                <p className="text-muted-foreground">
                  Sterile, easy-to-clean surface perfect for surgical environments requiring the highest hygiene standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 mb-6">
                  <Droplets className="w-8 h-8 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patient Rooms</h3>
                <p className="text-muted-foreground">
                  Comfortable, quiet flooring that provides infection control while maintaining a healing environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-6">
                  <Palette className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Laboratories</h3>
                <p className="text-muted-foreground">
                  Chemical-resistant surface ideal for labs requiring frequent cleaning and disinfection procedures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Upgrade to <span className="text-gradient">Premium Medical Flooring</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the benefits of homogeneous vinyl flooring designed specifically for healthcare environments. Durability, hygiene, and performance in one solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Request Flooring Quote
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiMicrobialFlooring;