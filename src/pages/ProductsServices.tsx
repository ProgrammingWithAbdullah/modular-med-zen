import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCarousel from '@/components/ProductCarousel';
import { Building, FlaskConical, Stethoscope, Shield, Wrench, HeartHandshake } from 'lucide-react';

const ProductsServices = () => {
  const products = [
    {
      icon: <Building className="h-12 w-12 text-primary mb-4" />,
      title: "Modular Operation Theaters",
      description: "State-of-the-art operation theaters with advanced modular designs for maximum efficiency and sterility.",
      features: ["Glass panels", "SS 304 finish", "Powder coated options", "Custom layouts"]
    },
    {
      icon: <Shield className="h-12 w-12 text-accent mb-4" />,
      title: "Clean Rooms",
      description: "Controlled environment solutions maintaining the highest standards of cleanliness and contamination control.",
      features: ["HEPA filtration", "Positive pressure", "Temperature control", "Humidity management"]
    },
    {
      icon: <FlaskConical className="h-12 w-12 text-secondary mb-4" />,
      title: "Laboratory Furniture",
      description: "Comprehensive laboratory solutions including tables, storage, and specialized equipment.",
      features: ["Chemical resistant", "Ergonomic design", "Modular systems", "Safety compliant"]
    }
  ];

  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-primary mb-4" />,
      title: "Design & Planning",
      description: "Expert consultation and design services for optimal medical facility layouts.",
      highlights: ["3D modeling", "Ergonomic planning", "Workflow optimization", "Safety compliance"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent mb-4" />,
      title: "Installation & Setup",
      description: "Professional installation with systematic and accurate project execution.",
      highlights: ["Expert technicians", "Quality control", "Timely delivery", "System testing"]
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-secondary mb-4" />,
      title: "Maintenance & Support",
      description: "Comprehensive after-sales service and ongoing maintenance support.",
      highlights: ["24/7 support", "Preventive maintenance", "Quick response", "Parts availability"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-elegant opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Products & <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Comprehensive medical infrastructure solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium medical equipment and infrastructure solutions manufactured to the highest standards
            </p>
          </div>
          
          <ProductCarousel />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {product.icon}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end services from concept to completion and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure quality at every step
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your specific requirements" },
                { step: "02", title: "Design", desc: "Creating detailed plans and 3D models" },
                { step: "03", title: "Manufacturing", desc: "Precision manufacturing with quality control" },
                { step: "04", title: "Installation", desc: "Professional setup and testing" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsServices;