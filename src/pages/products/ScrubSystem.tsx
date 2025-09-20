import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Droplets, Shield, Timer, Users, AlertTriangle, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import scrubSystemImg from '@/assets/scrub-system.jpg';
import scrubSystemImg2 from '@/assets/scrub-system-2.jpg';
import scrubSystemImg3 from '@/assets/scrub-system-3.jpg';

const ScrubSystem = () => {
  const features = [
    {
      icon: Droplets,
      title: "Sensor-Activated Taps",
      description: "Automatic or sensor-activated taps maintain aseptic conditions during scrub procedures"
    },
    {
      icon: Shield,
      title: "Stainless Steel Construction",
      description: "High-grade stainless steel construction ensures durability and easy sterilization"
    },
    {
      icon: Timer,
      title: "Elbow/Knee Controls",
      description: "Hands-free operation with elbow or knee-operated controls for sterile compliance"
    },
    {
      icon: Users,
      title: "Multi-User Design",
      description: "Designed to accommodate multiple users simultaneously for efficient workflow"
    }
  ];

  const systemComponents = [
    {
      component: "Scrub Sinks",
      description: "Deep basin design with optimal water flow patterns for effective hand and arm scrubbing",
      features: ["Anti-splash design", "Optimal depth and width", "Smooth radius corners", "Drainage optimization"],
      materials: ["Stainless steel 316L", "Electropolished finish", "Seamless construction", "Chemical resistant"]
    },
    {
      component: "Automatic Dispensers",
      description: "Sensor-activated dispensers for surgical scrub solutions, soap, and antiseptic agents",
      features: ["Touchless operation", "Adjustable volume control", "Refill indicators", "Easy maintenance access"],
      materials: ["Stainless steel housing", "Anti-bacterial surfaces", "Sealed mechanisms", "Vandal-resistant design"]
    },
    {
      component: "Control Systems",
      description: "Integrated control systems for water temperature, flow rate, and timing functions",
      features: ["Temperature regulation", "Timer functions", "Emergency controls", "Water saving modes"],
      materials: ["Medical grade components", "Waterproof electronics", "Corrosion resistant", "Long-life mechanisms"]
    }
  ];

  const hygieneProtocols = [
    {
      protocol: "Pre-Operative Hand Hygiene",
      duration: "3-5 minutes",
      description: "Comprehensive hand and forearm cleaning protocol for surgical procedures",
      steps: ["Initial rinse", "Apply antiseptic scrub", "Methodical scrubbing technique", "Final rinse and dry"]
    },
    {
      protocol: "Standard Hand Hygiene", 
      duration: "20-30 seconds",
      description: "Quick hand hygiene for routine medical procedures and patient contact",
      steps: ["Wet hands thoroughly", "Apply hand hygiene solution", "Rub all surfaces", "Air dry completely"]
    },
    {
      protocol: "Emergency Scrub Protocol",
      duration: "2-3 minutes",
      description: "Rapid but thorough scrub procedure for emergency surgical situations",
      steps: ["Quick initial rinse", "Intensive scrub focus", "Priority areas first", "Efficient completion"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Water System",
      specs: [
        { name: "Flow Rate", value: "6-8 L/min" },
        { name: "Temperature Range", value: "32-43°C" },
        { name: "Pressure Range", value: "2-6 bar" },
        { name: "Response Time", value: "< 0.5 seconds" }
      ]
    },
    {
      category: "Construction",
      specs: [
        { name: "Material Grade", value: "SS 316L" },
        { name: "Surface Finish", value: "Electropolished" },
        { name: "Basin Depth", value: "200-250mm" },
        { name: "Mounting Type", value: "Wall/Floor" }
      ]
    }
  ];

  const integrationFeatures = [
    "Seamless architectural integration with operating theater design",
    "Customizable placement for optimal workflow efficiency", 
    "Integration with building automation systems",
    "Connection to water quality monitoring systems",
    "Compatibility with existing plumbing infrastructure",
    "Modular design allows future expansion or reconfiguration"
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
                  Scrub <span className="text-gradient">System</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  A scrub system is an essential component in surgical and sterile environments, designed to support pre-operative hand hygiene for medical staff. These systems include stainless steel scrub sinks, automatic dispensers, and hands-free controls to maintain aseptic conditions and reduce surgical site infection risks.
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
                    src={scrubSystemImg} 
                    alt="Scrub System" 
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
              System <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced features designed to support strict hygiene protocols and enhance surgical safety.
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
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-cyan/10 mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-accent-cyan" />
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
              Installation <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional scrub systems installed in modern medical facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={scrubSystemImg2} 
                alt="Multi-Station Scrub System" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Multi-Station System</h3>
                <p className="text-sm text-muted-foreground mt-1">Multiple scrub stations for high-volume facilities</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={scrubSystemImg3} 
                alt="Individual Scrub Station" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Individual Station</h3>
                <p className="text-sm text-muted-foreground mt-1">Single-user scrub station with integrated controls</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={scrubSystemImg} 
                alt="Complete Scrub Area" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Complete Installation</h3>
                <p className="text-sm text-muted-foreground mt-1">Fully integrated scrub area with all amenities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Components</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive components designed for optimal hygiene and functionality
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {systemComponents.map((component, index) => (
              <Card 
                key={component.component}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {component.component}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {component.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {component.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Materials:</h4>
                      <div className="space-y-2">
                        {component.materials.map((material, materialIndex) => (
                          <div key={materialIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{material}</span>
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

      {/* Hygiene Protocols */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hygiene <span className="text-gradient">Protocols</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Standardized procedures supported by our scrub system design
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hygieneProtocols.map((protocol, index) => (
              <Card 
                key={protocol.protocol}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {protocol.protocol}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                      <Timer className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{protocol.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    {protocol.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-center">Procedure Steps:</h4>
                    <div className="space-y-3">
                      {protocol.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-cyan/10 flex-shrink-0 text-xs font-medium text-accent-cyan">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed technical information for installation and maintenance teams
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSpecs.map((category, index) => (
              <Card 
                key={category.category}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between items-center p-3 rounded-lg bg-secondary/10">
                        <span className="font-medium text-foreground">{spec.name}</span>
                        <span className="text-primary font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Integration <span className="text-gradient">Capabilities</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Flexible integration options for seamless facility workflow and architectural harmony
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {integrationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-cyan/10 flex-shrink-0 mt-0.5">
                      <Settings className="w-3 h-3 text-accent-cyan" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
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
              Enhance Your <span className="text-gradient">Surgical Safety</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Implement our comprehensive scrub systems to support strict hygiene protocols, reduce infection risks, and enhance the safety of your surgical procedures with professional-grade equipment designed for medical excellence.
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

export default ScrubSystem;