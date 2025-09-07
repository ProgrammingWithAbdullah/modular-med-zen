import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import PopupImageSlider from '@/components/PopupImageSlider';
import PopupImageSlider1 from '@/components/PopupImageSlidermultanch';
import PopupImageSlider2 from '@/components/PopupImageSliderpremium';
import { MapPin, Building, CheckCircle, Star, Quote, Zap, Shield, Clock, DollarSign, Calendar, Users, Award, X } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imcHospitalReal from '@/assets/imc-hospital-real.jpg';
import premiumHealthReal from '@/assets/premium-health-real.jpg';
import noorAlshifaReal from '@/assets/noor-alshifa-real.jpg';
import childrenHospitalMultanReal from '@/assets/children-hospital-multan-real.jpg';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = [
    {
      name: 'Integrated Medical Care (IMC) Hospital',
      location: 'D.H.A Phase-5 Lahore',
      scope: '06 Operation Theaters',
      category: 'Multi-Specialty Hospital',
      image: imcHospitalReal,
      description: 'A state-of-the-art 125-bedded multi-specialty hospital located in the prestigious D.H.A Phase-5 area of Lahore. This modern healthcare facility represents the pinnacle of medical excellence in Pakistan.',
      completionYear: '2023',
      servicesProvided: [
        '06 fully equipped modular operation theaters with latest surgical technology',
        'Advanced HVAC system ensuring optimal air quality and temperature control',
        'Medical gas pipeline system with redundant safety features',
        'Specialized surgical lighting and equipment integration',
        'Infection control systems meeting international standards',
        'Custom-designed storage and workflow optimization solutions'
      ],
      clientTestimonial: 'The team delivered beyond our expectations with world-class modular operation theaters.',
      projectValue: '₹ 2.5 Crores'
    },
    {
      name: 'Premium Health International',
      location: 'G-8 Markaz Islamabad',
      scope: '04 Theaters & ICU',
      category: 'Healthcare Facility',
      image: premiumHealthReal,
      description: 'A premier healthcare institution located in the heart of Islamabad, providing world-class medical services with cutting-edge technology and exceptional patient care standards.',
      completionYear: '2024',
      servicesProvided: [
        '04 advanced modular operation theaters with integrated surgical suites',
        'ICU setup with specialized medical infrastructure',
        'Advanced air filtration and climate control systems',
        'Medical gas pipeline installation with emergency backup',
        'LED surgical lighting systems with shadow-free illumination',
        'Comprehensive infection prevention and control measures'
      ],
      clientTestimonial: 'Professional expertise and attention to detail exceeded our expectations.',
      projectValue: '₹ 1.8 Crores'
    },
    {
      name: 'Children Hospital Multan',
      location: 'Multan, Punjab',
      scope: '08 Operation Theaters',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultanReal,
      description: 'The largest government pediatric hospital in Southern Punjab, dedicated to providing specialized healthcare services for children. This facility serves as a regional center for pediatric medical care.',
      completionYear: '2023',
      servicesProvided: [
        '08 specialized pediatric operation theaters designed for children',
        'Child-friendly infrastructure with safety-first design principles',
        'Advanced pediatric surgical equipment integration',
        'Specialized HVAC systems for pediatric requirements',
        'Medical gas pipeline with pediatric-specific configurations',
        'Comprehensive sterilization and infection control systems'
      ],
      clientTestimonial: 'Seamless delivery on time and within budget while maintaining highest quality standards.',
      projectValue: '₹ 3.2 Crores'
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
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Installation Time",
      traditional: "9-10 months",
      modular: "1.5-2 months",
      icon: Clock,
      advantage: "modular"
    },
    {
      feature: "Infection Control",
      traditional: "Not possible",
      modular: "ISO-5 Clean Room Standards",
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.name}
                  className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
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

        {/* <section className="py-16 px-4">
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
        </section> */}

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conventional OT vs. <span className="text-gradient">Modular Systems</span>
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
                          <h4 className="font-medium text-muted-foreground mb-2">Conventional</h4>
                          <p className="text-sm text-muted-foreground">{item.traditional}</p>
                        </div>
                        
                        {/* Modular MED */}
                        <div className="p-6 text-center bg-green-500/5 relative">
                          <h4 className="font-medium text-green-600 mb-2">Modular Systems</h4>
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

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image Slider - Only for first 3 projects */}
                  {selectedProject?.name === "Integrated Medical Care (IMC) Hospital" && (
                    <PopupImageSlider />
                  )}

                  {selectedProject?.name === "Premium Health International" && (
                    <PopupImageSlider2 />
                  )}

                  {selectedProject?.name === "Children Hospital Multan" && (
                    <PopupImageSlider1 />
                  )}

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary" />
                        Project Information
                      </h3>
                      <div className="space-y-3 bg-secondary/10 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="font-medium text-foreground">{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Scope:</span>
                          <span className="font-medium text-foreground">{selectedProject.scope}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <Badge variant="outline">{selectedProject.category}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Completion:</span>
                          <span className="font-medium text-foreground flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {selectedProject.completionYear}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Project Value:</span>
                          <span className="font-medium text-primary">{selectedProject.projectValue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Services Provided
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.servicesProvided?.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <div className="bg-gradient-subtle p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Quote className="w-5 h-5 text-primary" />
                      Client Testimonial
                    </h3>
                    <blockquote className="text-muted-foreground italic">
                      "{selectedProject.clientTestimonial}"
                    </blockquote>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => setSelectedProject(null)} variant="outline">
                      Close Details
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
