import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Eye, Monitor, Settings, Zap, Ruler, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ledXRayViewerImg from '@/assets/led-xray-viewer.jpg';
import ledXRayViewerImg2 from '@/assets/led-xray-viewer-2.jpg';
import ledXRayViewerImg3 from '@/assets/led-xray-viewer-3.jpg';

const LEDXRayViewer = () => {
  const features = [
    {
      icon: Eye,
      title: "Sharp-Edge Collimation",
      description: "Adjustable shutters provide sharp-edge collimation even for small image areas with precision control"
    },
    {
      icon: Monitor,
      title: "Luminous Density Control",
      description: "Accurate luminous density control achieves marked improvement in detail recognition"
    },
    {
      icon: Shield,
      title: "Scratch-Proof Glass",
      description: "External scratch-proof mineral clear glass pane with high-grade acrylic internal surface"
    },
    {
      icon: Settings,
      title: "Easy Movement",
      description: "Adjustable and easy-to-move shutters fitted between glass panes for smooth operation"
    }
  ];

  const viewerSizes = [
    {
      name: "Single Film Viewer",
      dimensions: "50.4 × 47.2 × 2.5 cm",
      capacity: "1 Film",
      applications: ["Individual consultations", "Emergency diagnostics", "Small clinics"],
      features: ["Compact design", "Energy efficient", "Easy mounting"]
    },
    {
      name: "Two Film Viewer", 
      dimensions: "50.4 × 87.2 × 2.5 cm",
      capacity: "2 Films",
      applications: ["Comparative analysis", "Standard radiology", "Medium facilities"],
      features: ["Side-by-side viewing", "Uniform illumination", "Professional grade"]
    },
    {
      name: "Three Film Viewer",
      dimensions: "50.4 × 127.2 × 2.5 cm", 
      capacity: "3 Films",
      applications: ["Multi-stage analysis", "Large hospitals", "Teaching hospitals"],
      features: ["Extended viewing area", "Multi-film comparison", "Advanced controls"]
    },
    {
      name: "Four Film Viewer",
      dimensions: "50.4 × 167.2 × 2.5 cm",
      capacity: "4 Films", 
      applications: ["Comprehensive studies", "Research facilities", "Major medical centers"],
      features: ["Maximum capacity", "Professional workflow", "Industrial grade"]
    }
  ];

  const technicalAdvantages = [
    "High-definition LED technology for consistent illumination",
    "Variable brightness control for optimal image contrast",
    "Long-lasting LED lifespan reduces maintenance requirements",
    "Uniform light distribution across entire viewing surface",
    "Cool operating temperature prevents film damage",
    "Energy-efficient operation reduces operational costs",
    "Instant-on capability eliminates warm-up time",
    "Flicker-free operation reduces eye strain"
  ];

  const qualityFeatures = [
    {
      aspect: "Visual Clarity",
      description: "Superior light quality and uniform distribution ensure accurate diagnosis",
      rating: "Excellent"
    },
    {
      aspect: "Durability",
      description: "Robust construction with high-grade materials for long-term reliability",
      rating: "Superior"
    },
    {
      aspect: "Energy Efficiency",
      description: "LED technology provides significant energy savings compared to traditional systems",
      rating: "Outstanding"
    },
    {
      aspect: "Maintenance",
      description: "Minimal maintenance requirements with easy access design",
      rating: "Low"
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
                  LED X-Ray <span className="text-gradient">Viewer</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  High-quality film viewers with collimation and luminous density control represent indispensable tools for radiologists. The adjustable shutters fitted between scratch-proof mineral glass and high-grade acrylic ensure sharp-edge collimation and accurate luminous density for marked improvement in detail recognition.
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
                    src={ledXRayViewerImg} 
                    alt="LED X-Ray Viewer" 
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
              Viewer <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced features designed to enhance diagnostic accuracy and radiologist efficiency.
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
              Viewer <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional LED X-Ray viewers in clinical settings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={ledXRayViewerImg2} 
                alt="Multi-Film X-Ray Viewer" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Multi-Film Viewer</h3>
                <p className="text-sm text-muted-foreground mt-1">Advanced viewing system for multiple film analysis</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={ledXRayViewerImg3} 
                alt="LED X-Ray Viewer Detail" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Control Detail</h3>
                <p className="text-sm text-muted-foreground mt-1">Close-up view of collimation and brightness controls</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={ledXRayViewerImg} 
                alt="Professional Installation" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Professional Setup</h3>
                <p className="text-sm text-muted-foreground mt-1">Complete installation in radiology department</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Viewer Sizes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Standard Viewing <span className="text-gradient">Sizes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from four standard sizes to meet your specific radiology requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {viewerSizes.map((viewer, index) => (
              <Card 
                key={viewer.name}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10">
                      <Ruler className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {viewer.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{viewer.dimensions}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                      <div className="space-y-2">
                        {viewer.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                      <div className="space-y-2">
                        {viewer.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Film Capacity:</span>
                      <span className="text-primary font-semibold">{viewer.capacity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  LED Technology <span className="text-gradient">Advantages</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Why LED technology represents the superior choice for modern radiology
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-accent-cyan" />
                    Technical Benefits
                  </h3>
                  <div className="space-y-4">
                    {technicalAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-primary" />
                    Quality Ratings
                  </h3>
                  <div className="space-y-4">
                    {qualityFeatures.map((feature, index) => (
                      <div key={index} className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{feature.aspect}</h4>
                          <span className="text-xs bg-accent-cyan/10 text-accent-cyan px-2 py-1 rounded-full">
                            {feature.rating}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
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
              Enhance Your <span className="text-gradient">Diagnostic Capability</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the precision and reliability of our LED X-Ray viewers, designed to support accurate diagnosis and improve radiologist efficiency in professional medical environments.
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

export default LEDXRayViewer;