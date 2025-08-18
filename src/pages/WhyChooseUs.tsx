import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Award, MapPin, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-16 w-16 text-accent mb-6" />,
      title: "INNOVATION",
      description: "We strive to bring innovation to the medical industry by introducing modular systems and unique designs that enhance overall experience.",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: <Award className="h-16 w-16 text-secondary mb-6" />,
      title: "QUALITY",
      description: "At Modular Med, we prioritize quality in every aspect of our products and services. We use high-quality materials and employ rigorous quality control measures to ensure that our clients receive top-notch products.",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: <MapPin className="h-16 w-16 text-accent mb-6" />,
      title: "LOCAL MANUFACTURING",
      description: "As a local manufacturer, we are committed to supporting the growth and development of the Pakistani economy. By choosing Modular Med, clients contribute to the promotion of local industries.",
      gradient: "from-accent/20 to-secondary/20"
    },
    {
      icon: <Users className="h-16 w-16 text-primary mb-6" />,
      title: "EXPERTISE",
      description: "With years of experience in the medical field, our team of skilled professionals possesses the knowledge and expertise to deliver exceptional results. We work closely with clients to understand their needs and provide tailored solutions.",
      gradient: "from-primary/20 to-accent/20"
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
              Why Choose <span className="text-gradient">Us?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Discover what sets Modular MED Solutions apart as Pakistan's premier medical equipment manufacturer
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${reason.gradient} backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {reason.icon}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Animated Background Element */}
                <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied clients who have chosen Modular MED Solutions for their medical infrastructure needs.
            </p>
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-elegant hover:shadow-glow">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;