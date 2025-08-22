import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Building2, Sparkles, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import modularTheatreSystemsImg from '@/assets/modular-theatre-systems.jpg';

const ModularTheatreSystems = () => {
  const features = [
    {
      icon: Building2,
      title: "Customizable Design",
      description: "Tailored to meet specific client requirements and medical standards"
    },
    {
      icon: Sparkles,
      title: "Enhanced Experience", 
      description: "Designed to improve overall medical and health service delivery"
    },
    {
      icon: Shield,
      title: "International Standards",
      description: "Built to meet and exceed international healthcare facility standards"
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
                  Modular <span className="text-gradient">Theatre Systems</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We offer a range of modular theatre systems that are designed to enhance the overall experience for both medical and health services. The systems are customizable and can be tailored to meet the specific requirements of our clients.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={modularTheatreSystemsImg} 
                    alt="Modular Theatre Systems" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our modular theatre systems are engineered to provide exceptional performance, flexibility, and reliability in critical medical environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Why Choose Our <span className="text-gradient">Modular Systems</span>?
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  At Modular Med Solutions, we understand that modern healthcare facilities require sophisticated, reliable, and adaptable theatre systems. Our modular approach allows for unprecedented flexibility in design and functionality, ensuring that each installation perfectly matches the unique requirements of your medical facility.
                </p>
                
                <p className="mb-6">
                  Our systems are built with precision engineering and incorporate the latest technological advances in medical facility design. From sterile environments to complex surgical procedures, our modular theatre systems provide the foundation for exceptional healthcare delivery.
                </p>
                
                <p>
                  With our commitment to quality and innovation, we deliver solutions that not only meet but exceed international standards, ensuring the safety, efficiency, and comfort of both medical professionals and patients.
                </p>
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
              Ready to Transform Your <span className="text-gradient">Medical Facility</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your modular theatre system requirements and discover how we can help you create a world-class medical environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Get Quote
              </Button>
              <Button variant="outline" className="px-8 py-3">
                View More Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModularTheatreSystems;