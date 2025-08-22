import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Zap, Shield, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hermeticLightsImg from '@/assets/hermetic-lights.jpg';

const HermeticLights = () => {
  const features = [
    {
      icon: Zap,
      title: "Energy Efficient LED",
      description: "Direct LED light recessed fixture designed for maximum energy savings"
    },
    {
      icon: Shield,
      title: "IP65 Protection",
      description: "Full protection against dust and water jets for operating room environments"
    },
    {
      icon: Lightbulb,
      title: "Sealed Structure",
      description: "Hidden and sealed structure suitable for modular counter-ceiling panels"
    },
    {
      icon: CheckCircle,
      title: "Medical Grade",
      description: "Specifically designed for special environments like operating rooms"
    }
  ];

  const specifications = [
    {
      category: "Body Construction",
      details: [
        "White thermosetting epoxy powder painted steel sheet (RAL 9003)",
        "Painted at 180°C for superior durability",
        "Previously degreased, phosphate coating and washing",
        "Inside gaskets for full protection"
      ]
    },
    {
      category: "Optical Options",
      details: [
        "Micro-prismatic polycarbonate optics available",
        "Tempered glass option available",
        "Superior light distribution",
        "Optimal illumination for medical procedures"
      ]
    },
    {
      category: "Protection Features",
      details: [
        "IP65 protection rating",
        "Dust-proof sealed construction",
        "Water jet protection",
        "Suitable for sterile environments"
      ]
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
                  Hermetic <span className="text-gradient">Lights</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Direct LED light recessed fixture, for energy saving. It is suitable for installation on modular counter-ceilings panels with hidden and sealed structure, specifically designed for special environments such as operating rooms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Technical Specs
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={hermeticLightsImg} 
                    alt="Hermetic Lights" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our hermetic lights combine energy efficiency with the highest protection standards for medical environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-orange/10 mb-4 group-hover:bg-accent-orange/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-accent-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed specifications ensure optimal performance in critical medical environments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card 
                key={spec.category}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    {spec.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {spec.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Performance <span className="text-gradient">Metrics</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Electrical Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power Consumption</span>
                      <span className="font-medium text-foreground">Energy Efficient LED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Voltage Range</span>
                      <span className="font-medium text-foreground">100-240V AC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency</span>
                      <span className="font-medium text-foreground">50/60 Hz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">LED Lifespan</span>
                      <span className="font-medium text-foreground">50,000+ hours</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Environmental Standards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IP Rating</span>
                      <span className="font-medium text-foreground">IP65</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating Temperature</span>
                      <span className="font-medium text-foreground">-10°C to +40°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Humidity Resistance</span>
                      <span className="font-medium text-foreground">Up to 95% RH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Installation Type</span>
                      <span className="font-medium text-foreground">Recessed</span>
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
              Perfect for <span className="text-gradient">Medical Environments</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specially designed lighting solutions for the most demanding healthcare applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Operating Rooms</h3>
                <p className="text-muted-foreground">
                  Hermetic sealing and IP65 protection make these lights ideal for sterile surgical environments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 mb-6">
                  <Lightbulb className="w-8 h-8 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Clean Rooms</h3>
                <p className="text-muted-foreground">
                  Dust-proof construction and sealed design perfect for controlled contamination environments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-6">
                  <Zap className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">ICU & Emergency</h3>
                <p className="text-muted-foreground">
                  Reliable, energy-efficient lighting for critical care areas requiring continuous operation.
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
              Illuminate Your Medical Facility with <span className="text-gradient">Premium Lighting</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the perfect combination of energy efficiency, durability, and medical-grade protection with our hermetic lighting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Get Lighting Quote
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HermeticLights;