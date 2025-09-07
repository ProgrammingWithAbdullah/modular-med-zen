import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';
import adamPDF from '@/assets/brochurepdf.pdf';

const Hero = () => {
  const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = adamPDF; // resolved URL from import
  link.download = 'adampdf.pdf';
  link.click();
};


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Modern Medical Operation Theater"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent-orange/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Star className="h-3 w-3 mr-1" />
                Pakistan's #1 Medical Equipment Manufacturer
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Modular MED</span>
                <br />
                Solutions
                <br />
                <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
                  (Pvt) Ltd.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Pakistan's leading manufacturer of world-class Modular Operation Theaters, Clean Rooms & Laboratory Furniture. 
                We excel at designing Operation Theaters, planning ergonomic layouts tailored to surgery staff needs and 
                safety standards. Delivering excellence in medical infrastructure with outstanding service since 2021.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'ISO Certified Manufacturing',
                'Custom Design Solutions',
                'Expert Installation Team',
                'Premium Quality Materials'
              ].map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center space-x-2 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover-lift group"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadPDF}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                Download Brochure
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '100+', label: 'Happy Clients' },
                { number: '3+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 animate-pulse-soft"></div>
              <img
                src={heroImage}
                alt="Modern Operation Theater"
                className="relative rounded-3xl shadow-large hover-lift w-full h-auto"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-medium animate-float">
                <div className="text-2xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-medium animate-float" style={{ animationDelay: '3s' }}>
                <div className="text-2xl font-bold text-gradient">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;