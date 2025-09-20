import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Recycle, Palette, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import sealingGasketsImg from '@/assets/sealing-gaskets.jpg';

const SealingGaskets = () => {
  const features = [
    {
      icon: Shield,
      title: "Hermetic Sealing",
      description: "Non-toxic silicone gaskets provide perfect hermetic sealing between coating panels"
    },
    {
      icon: Recycle,
      title: "Easy Disassembly",
      description: "Removable seals allow for easy disassembling and maintenance of each panel"
    },
    {
      icon: Palette,
      title: "Color Options",
      description: "Available in different colors to achieve the best aesthetic solution for your space"
    },
    {
      icon: Wrench,
      title: "Alternative Solutions",
      description: "Multiple sealing options including transparent silicone glue or direct welding"
    }
  ];

  const sealingOptions = [
    {
      title: "Silicone Gasket Sealing",
      description: "Standard non-toxic silicone gasket sealing with easy removal capability",
      benefits: ["Removable for maintenance", "Multiple color options", "Non-toxic material", "Superior seal quality"]
    },
    {
      title: "Transparent Silicone Glue",
      description: "Alternative sealing using a layer of transparent silicone adhesive",
      benefits: ["Clear finish", "Strong adhesion", "Waterproof seal", "Chemical resistant"]
    },
    {
      title: "Direct Welding",
      description: "Permanent welding solution for surfaces that require complete integration",
      benefits: ["Permanent bond", "Seamless finish", "Maximum strength", "Long-term durability"]
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
                  Sealing <span className="text-gradient">Gaskets</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  The hermetic sealing between the coating panels is realized using a non-toxic silicone gasket. The seal can be removed to allow easy disassembling of each panel. There are different colors of the compound to reach the best aesthetic solution.
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
                    src={sealingGasketsImg} 
                    alt="Sealing Gaskets" 
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
              Gasket <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our sealing gaskets provide superior performance with flexibility for maintenance and aesthetic customization.
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

      {/* Sealing Options */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sealing <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from multiple sealing options based on your specific requirements and preferences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sealingOptions.map((option, index) => (
              <Card 
                key={option.title}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
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

      {/* Technical Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technical <span className="text-gradient">Specifications</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Material Properties</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material Type</span>
                      <span className="font-medium text-foreground">Silicone Rubber</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Toxicity</span>
                      <span className="font-medium text-foreground">Non-toxic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temperature Range</span>
                      <span className="font-medium text-foreground">-60°C to 200°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shore Hardness</span>
                      <span className="font-medium text-foreground">40-80 Shore A</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Performance Features</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seal Type</span>
                      <span className="font-medium text-foreground">Hermetic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Removability</span>
                      <span className="font-medium text-foreground">Easy Removal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Color Options</span>
                      <span className="font-medium text-foreground">Multiple</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chemical Resistance</span>
                      <span className="font-medium text-foreground">Excellent</span>
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
              Perfect Sealing for <span className="text-gradient">Every Application</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our advanced sealing gasket solutions can provide the perfect balance of performance, aesthetics, and maintainability for your project.
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

export default SealingGaskets;