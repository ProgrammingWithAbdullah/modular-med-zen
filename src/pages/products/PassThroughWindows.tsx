import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Sparkles, Eye, Settings, CheckCircle, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import passThroughWindowsImg from '@/assets/pass-through-windows.jpg';
import passThroughWindowsImg2 from '@/assets/pass-through-windows-2.jpg';
import passThroughWindowsImg3 from '@/assets/pass-through-windows-3.jpg';

const PassThroughWindows = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Ultra-Clean Surfaces",
      description: "Smooth surfaces eliminate germ traps and simplify cleaning and disinfection procedures"
    },
    {
      icon: Shield,
      title: "Seamless Design",
      description: "Eliminates cracks for easy cleaning and sterilization with no contamination points"
    },
    {
      icon: Eye,
      title: "No-Lip Design",
      description: "Simplifies material transfer by eliminating clearance restrictions and obstacles"
    },
    {
      icon: Settings,
      title: "Smart-Screen Feature",
      description: "OT integrated windows with smart-screen feature for privacy glass control as needed"
    }
  ];

  const technicalSpecs = [
    {
      category: "Construction Materials",
      specs: [
        { name: "Chamber Material", value: "SS AISI 304/316" },
        { name: "Hardware", value: "Electropolished SS" },
        { name: "Glass Type", value: "Tempered Safety Glass" },
        { name: "Frame Finish", value: "Electropolished" }
      ]
    },
    {
      category: "Performance Features",
      specs: [
        { name: "Particle Shedding", value: "Zero particles" },
        { name: "Chemical Resistance", value: "Excellent" },
        { name: "Disinfectant Compatible", value: "All standard types" },
        { name: "Smart Glass Control", value: "Electronic switching" }
      ]
    }
  ];

  const applications = [
    {
      area: "Operating Theaters",
      uses: ["Instrument transfer", "Sterile supply passage", "Emergency equipment access"],
      benefits: ["Maintains sterile field", "Reduces contamination risk", "Improves workflow efficiency"]
    },
    {
      area: "Cleanrooms",
      uses: ["Material transfer", "Sample collection", "Equipment passage"],
      benefits: ["Preserves clean environment", "Eliminates airlock cycling", "Reduces personnel movement"]
    },
    {
      area: "Isolation Rooms",
      uses: ["Medication delivery", "Meal service", "Document transfer"],
      benefits: ["Maintains isolation protocol", "Reduces exposure risk", "Improves patient care"]
    },
    {
      area: "Laboratory Facilities",
      uses: ["Specimen transfer", "Reagent delivery", "Waste removal"],
      benefits: ["Prevents cross-contamination", "Maintains sample integrity", "Ensures safety protocols"]
    }
  ];

  const smartScreenFeatures = [
    "Instant privacy on demand",
    "Electronic opacity control", 
    "Maintains transparency when needed",
    "Integration with room automation",
    "Energy-efficient operation",
    "Long-lasting performance"
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
                  Pass-Through <span className="text-gradient">Windows</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Smooth, ultra-clean surfaces eliminate germ traps and simplify cleaning and disinfection. Our seamless design eliminates cracks for easy cleaning and sterilization, while the no-lip design simplifies material transfer by eliminating clearance restrictions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    View Specifications
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={passThroughWindowsImg} 
                    alt="Pass-Through Windows" 
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
              Window <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced design features that enhance hygiene, functionality, and ease of use in critical medical environments.
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
              Explore our pass-through window installations across various medical environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={passThroughWindowsImg2} 
                alt="Single Pass-Through Window" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Single Window Unit</h3>
                <p className="text-sm text-muted-foreground mt-1">Compact design for smaller transfer requirements</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={passThroughWindowsImg3} 
                alt="Multiple Pass-Through Windows" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Multiple Window Array</h3>
                <p className="text-sm text-muted-foreground mt-1">Multi-window installation for high-traffic areas</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={passThroughWindowsImg} 
                alt="Smart-Screen Window" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Smart-Screen Feature</h3>
                <p className="text-sm text-muted-foreground mt-1">Privacy glass with electronic control</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Versatile solutions for various medical and laboratory environments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card 
                key={app.area}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {app.area}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Common Uses:</h4>
                      <div className="space-y-2">
                        {app.uses.map((use, useIndex) => (
                          <div key={useIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
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

      {/* Smart-Screen Technology */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Smart-Screen <span className="text-gradient">Technology</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Advanced privacy glass technology that enables instant opacity control as needed
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-accent-cyan" />
                    Smart Features
                  </h3>
                  <div className="space-y-4">
                    {smartScreenFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-primary" />
                    Control Options
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <h4 className="font-medium text-foreground mb-2">Manual Control</h4>
                      <p className="text-sm text-muted-foreground">Wall-mounted switch for immediate privacy control</p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10">
                      <h4 className="font-medium text-foreground mb-2">Automated Control</h4>
                      <p className="text-sm text-muted-foreground">Integration with room sensors and scheduling systems</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                      <h4 className="font-medium text-foreground mb-2">Remote Control</h4>
                      <p className="text-sm text-muted-foreground">Central control via building management system</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
              Detailed specifications for engineering and installation requirements
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
      <section className="py-16 px-4 bg-gradient-elegant/10">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Enhance Your <span className="text-gradient">Transfer Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our pass-through windows can improve workflow efficiency while maintaining the highest standards of hygiene and contamination control in your medical facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Request Installation
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Smart-Screen Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PassThroughWindows;