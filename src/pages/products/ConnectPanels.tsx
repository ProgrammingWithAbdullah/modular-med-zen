import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Zap, Settings, Shield, Wrench, Plug, Cable, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import connectPanelsImg from '@/assets/connect-panels.jpg';
import connectPanelsImg2 from '@/assets/connect-panels-2.jpg';
import connectPanelsImg3 from '@/assets/connect-panels-3.jpg';

const ConnectPanels = () => {
  const features = [
    {
      icon: Shield,
      title: "Stainless Steel Construction",
      description: "Made from high-grade stainless steel for maximum durability and hygiene compliance"
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Designed to be easily disassembled for quick and efficient maintenance procedures"
    },
    {
      icon: Settings,
      title: "Future Integration Ready",
      description: "Built to accommodate future utility integrations and system upgrades"
    },
    {
      icon: Zap,
      title: "Maximum Linearity",
      description: "Engineered for perfect alignment and cutting-edge aesthetic appeal"
    }
  ];

  const utilities = [
    {
      icon: Plug,
      title: "Electrical Outlets",
      description: "High-quality electrical connections for medical equipment and devices",
      specs: ["220V/240V compatibility", "Ground fault protection", "Hospital grade outlets"]
    },
    {
      icon: Cable,
      title: "Medical Gas Outlets",
      description: "Certified medical gas connections for oxygen, nitrous oxide, and medical air",
      specs: ["NFPA 99 compliant", "Color-coded connections", "Automatic shut-off valves"]
    },
    {
      icon: Monitor,
      title: "Data & Communication",
      description: "Network and communication connections for digital medical systems",
      specs: ["Ethernet data ports", "Telephone connections", "Fiber optic ready"]
    },
    {
      icon: Settings,
      title: "Control Systems",
      description: "Integrated switches and controllers for various medical equipment",
      specs: ["Illuminated switches", "Emergency controls", "Programmable interfaces"]
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
                  Connect <span className="text-gradient">Panels</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Our Connect panels are designed and built to integrate all kinds of utility systems seamlessly. Made from premium stainless steel, they guarantee maximum linearity, cutting-edge aesthetics, and easy maintenance access for modern healthcare facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Technical Specifications
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={connectPanelsImg} 
                    alt="Connect Panels System" 
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
              Panel <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced engineering meets practical functionality in our comprehensive utility integration system.
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
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
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

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our connect panel installations and detailed construction views
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={connectPanelsImg2} 
                alt="Connect Panels Installation" 
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={connectPanelsImg3} 
                alt="Connect Panels Detail View" 
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={connectPanelsImg} 
                alt="Connect Panels System Overview" 
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Utility Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integrated <span className="text-gradient">Utilities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive utility integration for modern healthcare environments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {utilities.map((utility, index) => (
              <Card 
                key={utility.title}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10 flex-shrink-0">
                      <utility.icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {utility.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {utility.description}
                      </p>
                      
                      <div className="space-y-2">
                        {utility.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technical <span className="text-gradient">Specifications</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Construction Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material</span>
                      <span className="font-medium text-foreground">Stainless Steel 316L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Finish</span>
                      <span className="font-medium text-foreground">Electropolished</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mounting Type</span>
                      <span className="font-medium text-foreground">Wall/Ceiling Mount</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Protection Rating</span>
                      <span className="font-medium text-foreground">IP65</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance Features</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Load Capacity</span>
                      <span className="font-medium text-foreground">50kg per panel</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating Temperature</span>
                      <span className="font-medium text-foreground">-10°C to 60°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Disassembly Time</span>
                      <span className="font-medium text-foreground">&lt; 5 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="font-medium text-foreground">10 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Streamline Your <span className="text-gradient">Utility Integration</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our Connect Panels can simplify your medical facility's utility management while maintaining the highest standards of hygiene and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Get Custom Design
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConnectPanels;