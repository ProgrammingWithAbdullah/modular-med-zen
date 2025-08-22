import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import customizationImg from '@/assets/customization.jpg';

const Customization = () => {
  const services = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom designs that perfectly match your facility's specific requirements and workflow"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Our skilled professionals work closely with clients throughout the entire process"
    },
    {
      icon: Lightbulb,
      title: "Innovative Design",
      description: "Creative solutions that align with your vision while maintaining functionality"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every custom solution meets the highest standards of quality and performance"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We begin with a detailed consultation to understand your specific needs, requirements, and vision for the project."
    },
    {
      step: "2", 
      title: "Design Development",
      description: "Our team creates custom design proposals that incorporate your feedback and align with your operational needs."
    },
    {
      step: "3",
      title: "Technical Planning",
      description: "Detailed technical specifications and engineering plans are developed to ensure optimal performance."
    },
    {
      step: "4",
      title: "Manufacturing",
      description: "Precision manufacturing of custom components using the highest quality materials and processes."
    },
    {
      step: "5",
      title: "Installation & Support",
      description: "Professional installation and ongoing support to ensure your custom solution performs flawlessly."
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
                  Custom <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We understand that each theatre project is unique, and we offer customization options to meet the specific needs of our clients. Our team of skilled professionals works closely with clients to create tailored solutions that align with their vision and requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Start Custom Project
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    View Portfolio
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={customizationImg} 
                    alt="Customization Services" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Customization <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive customization services that transform your unique requirements into exceptional medical infrastructure solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-orange/10 mb-4 group-hover:bg-accent-orange/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Customization <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach that ensures every custom project meets your exact specifications and exceeds expectations
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card 
                key={step.step}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Customization <span className="text-gradient">Capabilities</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Design Flexibility</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Modular component configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom color schemes and finishes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Specialized equipment integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Workflow-optimized layouts</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technical Adaptations</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom electrical and gas installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Specialized HVAC integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Unique size and dimension requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Compliance with specific regulations</span>
                    </li>
                  </ul>
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
              Ready to Create Your <span className="text-gradient">Custom Solution</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your unique requirements and design a customized medical infrastructure solution that perfectly fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="px-8 py-3">
                View Custom Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customization;