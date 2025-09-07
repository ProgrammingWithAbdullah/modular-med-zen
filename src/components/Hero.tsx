import { Badge } from '@/components/ui/badge';
import { Star, Zap, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';
import adamPDF from '@/assets/brochurepdf.pdf';

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center space-y-12">
          
          {/* Top Badge */}
          <div className="animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Pakistan's Premier Medical Infrastructure Company
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Modular MED
              </span>
              <br />
              <span className="text-foreground/90">Solutions</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4">
                (Pvt) Ltd.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Transforming healthcare infrastructure with world-class modular operation theaters, clean rooms, and laboratory solutions. 
              <span className="text-foreground font-medium"> Delivering excellence since 2021.</span>
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Shield, title: 'ISO Certified', desc: 'Quality Assured' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Rapid Installation' },
              { icon: Award, title: 'Premium Grade', desc: 'SS 304 Materials' },
              { icon: Star, title: '500+ Projects', desc: 'Proven Excellence' }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/80 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative max-w-4xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl scale-110"></div>
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-border/20 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modular Medical Operation Theater - Premium Healthcare Infrastructure"
                  className="w-full h-auto max-h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">100+</div>
                  <div className="text-xs text-muted-foreground">Happy Clients</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">ISO</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '6s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="animate-fade-in pt-12" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-muted-foreground italic">
              "Engineering the future of healthcare infrastructure, one modular solution at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;