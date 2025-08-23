import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Volume2, Lock, Palette, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import autoManualDoorsImg from '@/assets/auto-manual-doors.jpg';
import autoManualDoorsImg2 from '@/assets/auto-manual-doors-2.jpg';
import autoManualDoorsImg3 from '@/assets/auto-manual-doors-3.jpg';

const AutoManualDoors = () => {
  const features = [
    {
      icon: Volume2,
      title: "Super Silent Operation",
      description: "Advanced motor technology ensures whisper-quiet operation for peaceful medical environments"
    },
    {
      icon: Shield,
      title: "Maximum Hygiene",
      description: "Sealed construction prevents contamination and allows easy cleaning and sterilization"
    },
    {
      icon: Lock,
      title: "Maximum Safety",
      description: "Advanced safety sensors and emergency systems ensure patient and staff protection"
    },
    {
      icon: Palette,
      title: "Maximum Finishes",
      description: "Available in all RAL colors, anodized finishes, HPL laminates, and stainless steel options"
    }
  ];

  const doorTypes = [
    {
      type: "Automatic Sliding Doors",
      description: "Fully automated sliding door systems with hermetic sealing capabilities",
      features: ["Motion sensor activation", "Emergency manual override", "Hermetic sealing on all 4 sides", "Variable speed control"],
      applications: ["Operating theaters", "Isolation rooms", "Clean rooms", "ICU entrances"]
    },
    {
      type: "Manual Hinged Doors",
      description: "Traditional hinged doors with integrated blinds and anti-RX protection",
      features: ["Integrated venetian blinds", "Lead-lined options available", "Soft-close mechanism", "Vision panels optional"],
      applications: ["Radiology rooms", "X-ray facilities", "Consultation rooms", "Patient rooms"]
    },
    {
      type: "Automatic Hinged Doors",
      description: "Motorized hinged doors with full sealing and access control integration",
      features: ["Card reader compatibility", "Emergency breakout", "Adjustable opening angles", "Fail-safe mechanisms"],
      applications: ["Secure areas", "Pharmacy storage", "Laboratory access", "Staff-only zones"]
    }
  ];

  const sealingOptions = [
    { name: "Semi-Hermetic", description: "Partial sealing for standard medical environments" },
    { name: "Fully Hermetic", description: "Complete 4-side sealing for critical areas" },
    { name: "Pressure Resistant", description: "Maintains seal under pressure differentials" },
    { name: "Gas Tight", description: "Prevents gas leakage in specialized applications" }
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
                  Auto/Manual <span className="text-gradient">Doors</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Automatic doors for controlled atmosphere environments, featuring super silent operation, maximum hygiene, safety, and carrying capacity. Available in automatic or manual sliding/hinged configurations with integrated blinds and anti-RX protection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    View Catalog
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={autoManualDoorsImg} 
                    alt="Auto/Manual Doors System" 
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
              Door <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential characteristics that make our doors ideal for medical environments where specific sealing requirements are indispensable.
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
              Door <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our range of automatic and manual door solutions for healthcare facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={autoManualDoorsImg2} 
                alt="Automatic Sliding Door" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Automatic Sliding System</h3>
                <p className="text-sm text-muted-foreground mt-1">Hermetic sealing with motion sensors</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={autoManualDoorsImg3} 
                alt="Manual Hinged Door" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Manual Hinged Door</h3>
                <p className="text-sm text-muted-foreground mt-1">Integrated blinds and anti-RX protection</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={autoManualDoorsImg} 
                alt="Complete Door System" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Complete Installation</h3>
                <p className="text-sm text-muted-foreground mt-1">Fully integrated door management system</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Door <span className="text-gradient">Types</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive range of door solutions for different medical applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {doorTypes.map((door, index) => (
              <Card 
                key={door.type}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {door.type}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {door.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {door.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {door.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sealing Options */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sealing <span className="text-gradient">Options</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the appropriate sealing level based on your specific environmental requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sealingOptions.map((option, index) => (
              <Card 
                key={option.name}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10">
                      <Settings className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {option.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
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
              Secure Your <span className="text-gradient">Medical Environment</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our automatic and manual door systems can enhance the safety, hygiene, and functionality of your healthcare facility while maintaining the highest standards of performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Get Door Assessment
              </Button>
              <Button variant="outline" className="px-8 py-3">
                View Installation Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoManualDoors;