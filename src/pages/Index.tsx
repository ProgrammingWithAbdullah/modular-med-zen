import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, CheckCircle, Star, Quote, Zap, Shield, Clock, DollarSign } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imcHospitalReal from '@/assets/imc-hospital-real.jpg';
import premiumHealthReal from '@/assets/premium-health-real.jpg';
import noorAlshifaReal from '@/assets/noor-alshifa-real.jpg';
import childrenHospitalMultanReal from '@/assets/children-hospital-multan-real.jpg';

const Index = () => {
  const featuredProjects = [
    {
      name: 'Integrated Medical Care (IMC) Hospital',
      location: 'D.H.A Phase-5 Lahore',
      scope: '06 Operation Theaters',
      category: 'Multi-Specialty Hospital',
      image: imcHospitalReal,
      description: '125-bedded purpose-built multi-specialty modern healthcare facility'
    },
    {
      name: 'Premium Health International',
      location: 'G-8 Markaz Islamabad',
      scope: '04 Theaters & ICU',
      category: 'Healthcare Facility',
      image: premiumHealthReal,
      description: 'Leading healthcare institution providing world-class medical services'
    },
    {
      name: 'Children Hospital Multan',
      location: 'Multan, Punjab',
      scope: '08 Operation Theaters',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultanReal,
      description: 'Government pediatric hospital providing specialized healthcare for children'
    },
    {
      name: 'Noor Al-Shifa Cardiac Hospital',
      location: 'Lahore',
      scope: '02 Operation Theaters',
      category: 'Cardiac Specialty',
      image: noorAlshifaReal,
      description: 'Specialized cardiac care facility with state-of-the-art heart procedures'
    }
  ];

  const testimonials = [
    {
      quote: "Modular MED transformed our surgical unit with world-class modular operation theaters. The installation was quick, and the quality is unmatched.",
      author: "Dr. Ahmed Hassan",
      position: "Hospital Director",
      hospital: "IMC Hospital Lahore",
      rating: 5
    },
    {
      quote: "The attention to detail and professional expertise shown by Modular MED exceeded our expectations. Our new operation theaters are truly state-of-the-art.",
      author: "Dr. Sara Khan",
      position: "Chief Medical Officer",
      hospital: "Premium Health International",
      rating: 5
    },
    {
      quote: "Working with Modular MED was seamless. They delivered on time and within budget while maintaining the highest quality standards for our pediatric facility.",
      author: "Dr. Muhammad Ali",
      position: "Medical Director",
      hospital: "Children Hospital Multan",
      rating: 5
    },
    {
      quote: "The modular approach allowed us to have fully functional operation theaters without the extensive downtime traditional construction would require.",
      author: "Dr. Fatima Sheikh",
      position: "Hospital Administrator",
      hospital: "Noor Al-Shifa Cardiac Hospital",
      rating: 5
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Installation Time",
      traditional: "6-12 months",
      modular: "2-4 weeks",
      icon: Clock,
      advantage: "modular"
    },
    {
      feature: "Infection Control",
      traditional: "Standard materials",
      modular: "Medical-grade antimicrobial surfaces",
      icon: Shield,
      advantage: "modular"
    },
    {
      feature: "Material Quality",
      traditional: "Mixed materials",
      modular: "Stainless Steel & Glass",
      icon: Star,
      advantage: "modular"
    },
    {
      feature: "Maintenance Cost",
      traditional: "High ongoing costs",
      modular: "Cost-effective & easy",
      icon: DollarSign,
      advantage: "modular"
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        
        {/* Featured Projects Section */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Featured Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover some of our most prestigious healthcare installations across Pakistan
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.name}
                  className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                        Completed
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {project.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="w-4 h-4 mr-2 text-primary" />
                        {project.scope}
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading healthcare professionals across Pakistan
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-primary/30',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
                }}
                className="pb-12"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-6">
                          <Quote className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-muted-foreground text-center mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="text-center">
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                          <div className="text-sm text-primary font-medium">{testimonial.hospital}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Traditional OT vs. <span className="text-gradient">Modular MED OT</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See why healthcare facilities are choosing modular solutions
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-6">
                {comparisonFeatures.map((item, index) => (
                  <Card 
                    key={item.feature}
                    className="overflow-hidden bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 items-center">
                        {/* Feature */}
                        <div className="p-6 bg-secondary/10 flex items-center justify-center md:justify-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground">{item.feature}</h3>
                        </div>
                        
                        {/* Traditional */}
                        <div className="p-6 text-center border-r border-border/50">
                          <h4 className="font-medium text-muted-foreground mb-2">Traditional</h4>
                          <p className="text-sm text-muted-foreground">{item.traditional}</p>
                        </div>
                        
                        {/* Modular MED */}
                        <div className="p-6 text-center bg-green-500/5 relative">
                          <h4 className="font-medium text-green-600 mb-2">Modular MED</h4>
                          <p className="text-sm text-foreground font-medium">{item.modular}</p>
                          {item.advantage === 'modular' && (
                            <div className="absolute top-2 right-2">
                              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl">
                  <Zap className="w-6 h-6" />
                  <span className="text-lg font-semibold">Choose Modular MED for Superior Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
