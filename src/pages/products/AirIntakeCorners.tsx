import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Wind, Shield, Droplets, Settings, AlertTriangle, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import airIntakeCornersImg from '@/assets/air-intake-corners.jpg';
import airIntakeCornersImg2 from '@/assets/air-intake-corners-2.jpg';
import airIntakeCornersImg3 from '@/assets/air-intake-corners-3.jpg';

const AirIntakeCorners = () => {
  const features = [
    {
      icon: Wind,
      title: "45° Inclined Design",
      description: "Four corners of the Operating Theater are inclined at 45° for optimal air flow and easy cleaning"
    },
    {
      icon: Shield,
      title: "Stainless Steel Construction",
      description: "Constructed entirely from AIS 304 stainless steel for durability and hygiene compliance"
    },
    {
      icon: Droplets,
      title: "Easy Cleaning",
      description: "Constructive characteristics make the element easily cleanable and maintenance-friendly"
    },
    {
      icon: AlertTriangle,
      title: "Contamination Prevention",
      description: "Prevents contaminated air particles from returning to the operating area due to turbulence"
    }
  ];

  const technicalSpecs = [
    {
      category: "Air Flow Management",
      specs: [
        { name: "Air Change Rate", value: "25-30 ACH minimum" },
        { name: "Filtration Grade", value: "HEPA H14 compatible" },
        { name: "Pressure Differential", value: "15-20 Pa positive" },
        { name: "Air Velocity", value: "0.25-0.35 m/s" }
      ]
    },
    {
      category: "Construction Details",
      specs: [
        { name: "Material Grade", value: "AISI 304 Stainless Steel" },
        { name: "Corner Angle", value: "45° precision cut" },
        { name: "Surface Finish", value: "Electropolished" },
        { name: "Mounting Type", value: "Integrated ceiling system" }
      ]
    }
  ];

  const benefits = [
    "Prevents air stagnation in critical areas",
    "Reduces risk of surgical site infections",
    "Improves overall air quality in OR",
    "Minimizes maintenance requirements",
    "Supports sterile environment protocols",
    "Enhances staff and patient safety"
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
                  Air Intake <span className="text-gradient">Corners</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  The indoor air extraction element is constructed entirely from stainless steel AIS 304. The four corners of the Operating Theater are inclined at 45° to allow easy cleaning and are equipped with an A/C system that draws air from the room, preventing contaminated particles from returning to the operating area.
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
                    src={airIntakeCornersImg} 
                    alt="Air Intake Corners System" 
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
              Advanced air management technology designed for critical healthcare environments.
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
              See our air intake corner systems in various operating theater configurations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={airIntakeCornersImg2} 
                alt="Air Intake Corner Installation" 
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={airIntakeCornersImg3} 
                alt="Air Intake Corner Detail" 
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={airIntakeCornersImg} 
                alt="Complete Air Management System" 
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clinical <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              How our air intake corner system improves operating theater performance
            </p>
          </div>
          
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Key Advantages</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Air Quality Standards</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Thermometer className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">ISO 14644 Compliant</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Meets international cleanroom standards for operating theaters</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Settings className="w-5 h-5 text-accent-cyan" />
                        <span className="font-medium text-foreground">HVAC Integration</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Seamless integration with existing HVAC systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed technical information for engineering and installation teams
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Optimize Your <span className="text-gradient">Operating Theater</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience superior air quality management with our precision-engineered air intake corner systems designed for critical healthcare environments.
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

export default AirIntakeCorners;