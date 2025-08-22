import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import wallProtectionImg from '@/assets/wall-protection.jpg';

const WallProtection = () => {
  const protectionTypes = [
    {
      title: "Corner Glass Protection",
      description: "Supply and installation of edge protection for shock absorbing elastic, not-toxic, antibacterial with a wingspan of no less than 75mm.",
      features: ["75mm minimum wingspan", "Shock absorbing elastic", "Non-toxic material", "Antibacterial properties"]
    },
    {
      title: "Bumper Handrail",
      description: "A bumper handrail in a hospital is a specialized type of handrail that is designed to provide additional protection and support for patients, staff and visitors.",
      features: ["Patient safety support", "Staff protection", "Visitor guidance", "High durability"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Impact Protection",
      description: "Superior protection against wall damage from equipment and high-traffic areas"
    },
    {
      icon: Zap,
      title: "Easy Installation",
      description: "Quick and efficient installation process with minimal disruption to operations"
    },
    {
      icon: Users,
      title: "Safety Enhancement",
      description: "Improved safety for patients, staff, and visitors in healthcare environments"
    },
    {
      icon: CheckCircle,
      title: "Low Maintenance",
      description: "Durable materials that require minimal maintenance while providing long-term protection"
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
                  Wall <span className="text-gradient">Protection</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Comprehensive wall protection solutions designed to safeguard healthcare facility walls while providing safety and support for patients, staff, and visitors through our corner glass protection and bumper handrail systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Installation Guide
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={wallProtectionImg} 
                    alt="Wall Protection Systems" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Protection <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our wall protection systems are specifically designed for healthcare environments, providing safety, durability, and functionality.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {protectionTypes.map((type, index) => (
              <Card 
                key={type.title}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the advantages of professional wall protection in healthcare environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-cyan/10 mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">Corner Glass Protection</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum Wingspan</span>
                      <span className="font-medium text-foreground">75mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material Type</span>
                      <span className="font-medium text-foreground">Elastic Polymer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Toxicity</span>
                      <span className="font-medium text-foreground">Non-toxic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Properties</span>
                      <span className="font-medium text-foreground">Antibacterial</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Bumper Handrail</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Installation Areas</span>
                      <span className="font-medium text-foreground">Corridors, Hallways</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Support Type</span>
                      <span className="font-medium text-foreground">Dual Purpose</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Usage</span>
                      <span className="font-medium text-foreground">Patients & Staff</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Durability</span>
                      <span className="font-medium text-foreground">High Traffic</span>
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
              Installation <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our wall protection systems are ideal for various healthcare facility areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">High-Traffic Areas</h3>
                <p className="text-muted-foreground">
                  Corridors, lobbies, and main walkways where protection against equipment damage is essential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-6">
                  <Users className="w-8 h-8 text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Patient Areas</h3>
                <p className="text-muted-foreground">
                  Patient rooms, rehabilitation areas, and therapy spaces requiring additional safety support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 mb-6">
                  <Zap className="w-8 h-8 text-accent-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Critical Zones</h3>
                <p className="text-muted-foreground">
                  Operating theaters, ICUs, and emergency departments where wall integrity is crucial.
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
              Protect Your Facility with <span className="text-gradient">Professional Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Invest in comprehensive wall protection systems that enhance safety, reduce maintenance costs, and improve the overall functionality of your healthcare facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Request Installation Quote
              </Button>
              <Button variant="outline" className="px-8 py-3">
                View Protection Systems
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WallProtection;