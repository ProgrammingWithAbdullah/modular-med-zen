import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Sparkles, Package, Settings, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlider from "@/components/ImageSlider";
import operationTheaterCabinetsImg from '@/assets/operation-theater-cabinets.jpg';
import operationTheaterCabinetsImg2 from '@/assets/operation-theater-cabinets-2.jpg';
import operationTheaterCabinetsImg3 from '@/assets/operation-theater-cabinets-3.jpg';

const OperationTheaterCabinets = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Ultra-Clean Surfaces",
      description: "Smooth surfaces eliminate germ traps and simplify cleaning and disinfection procedures"
    },
    {
      icon: Shield,
      title: "Seamless Design",
      description: "Eliminates cracks for easy cleaning, sterilization, and prevents bacterial accumulation"
    },
    {
      icon: Package,
      title: "No-Lip Design",
      description: "Simplifies material transfer by eliminating clearance restrictions and obstacles"
    },
    {
      icon: Settings,
      title: "Chemical Resistant",
      description: "Electropolished stainless steel resists disinfectants and other cleaning chemicals"
    }
  ];

  const cabinetTypes = [
    {
      type: "Instrument Storage Cabinets",
      description: "Specialized storage for surgical instruments with sterile organization systems",
      features: ["Adjustable shelving", "Perforated shelves for drainage", "Lockable doors", "Easy-clean interior"],
      applications: ["Surgical instruments", "Sterile supplies", "Operating tools", "Emergency equipment"]
    },
    {
      type: "Medication Storage Cabinets", 
      description: "Secure storage solutions for pharmaceuticals and medical supplies",
      features: ["Temperature control ready", "Secure locking system", "Inventory management", "Transparent doors optional"],
      applications: ["Medications", "IV solutions", "Emergency drugs", "Controlled substances"]
    },
    {
      type: "Waste Management Cabinets",
      description: "Integrated waste disposal systems for different types of medical waste",
      features: ["Separate compartments", "Hands-free operation", "Odor containment", "Easy disposal access"],
      applications: ["Sharps disposal", "Infectious waste", "General medical waste", "Recyclable materials"]
    },
    {
      type: "General Storage Cabinets",
      description: "Multi-purpose storage for various operating room supplies and equipment",
      features: ["Flexible configuration", "Maximum storage capacity", "Easy access design", "Modular system"],
      applications: ["Linens and drapes", "Personal protective equipment", "Cleaning supplies", "Office supplies"]
    }
  ];

  const materialSpecs = [
    {
      aspect: "Primary Material",
      specification: "SS AISI 304/316 Stainless Steel",
      benefit: "Superior corrosion resistance and durability"
    },
    {
      aspect: "Surface Finish",
      specification: "Electropolished to 0.5 Ra max",
      benefit: "Eliminates particle shedding and bacteria adhesion"
    },
    {
      aspect: "Hardware",
      specification: "316L Stainless Steel Components",
      benefit: "Enhanced chemical resistance for harsh disinfectants"
    },
    {
      aspect: "Sealing System",
      specification: "Medical Grade Gaskets",
      benefit: "Prevents contamination and maintains sterile environment"
    }
  ];

  const hygieneFeatures = [
    "Crevice-free construction prevents bacterial growth",
    "Smooth radius corners eliminate cleaning difficulties", 
    "Non-porous surfaces resist staining and odors",
    "Drainage systems prevent water accumulation",
    "Easy disassembly for deep cleaning access",
    "Compatible with all standard hospital disinfectants",
    "Validated cleaning protocols available",
    "Meets international hygiene standards"
  ];

  const customizationOptions = [
    {
      category: "Size Configuration",
      options: ["Wall-mounted units", "Floor-standing cabinets", "Modular systems", "Custom dimensions"]
    },
    {
      category: "Access Systems", 
      options: ["Hinged doors", "Sliding doors", "Roll-up doors", "Open shelving"]
    },
    {
      category: "Interior Features",
      options: ["Adjustable shelving", "Drawer systems", "Hanging rods", "Divider systems"]
    },
    {
      category: "Special Features",
      options: ["LED lighting", "Glass doors", "Security locks", "Temperature monitoring"]
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Operation Theater <span className="text-gradient">Cabinets</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Smooth, ultra-clean surfaces eliminate germ traps and simplify cleaning and disinfection. Our seamless design eliminates cracks for easy cleaning and sterilization, while the no-lip design simplifies material transfer. Electropolished stainless steel chamber and hardware won't shed particles and resists disinfectants and chemicals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    View Configurations
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={operationTheaterCabinetsImg} 
                    alt="Operation Theater Cabinets" 
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
              Cabinet <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced design features that prioritize hygiene, functionality, and ease of maintenance in critical surgical environments.
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

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cabinet <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional storage solutions installed in modern operating theaters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={operationTheaterCabinetsImg2} 
                alt="Wall-Mounted Cabinets" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Wall-Mounted System</h3>
                <p className="text-sm text-muted-foreground mt-1">Space-efficient wall-mounted cabinet configuration</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={operationTheaterCabinetsImg3} 
                alt="Interior Cabinet View" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Cabinet Interior</h3>
                <p className="text-sm text-muted-foreground mt-1">Detailed view of interior organization and shelving</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={operationTheaterCabinetsImg} 
                alt="Complete Cabinet Installation" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Complete Installation</h3>
                <p className="text-sm text-muted-foreground mt-1">Full cabinet system in operating theater environment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cabinet Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cabinet <span className="text-gradient">Types</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized storage solutions for different operating room requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {cabinetTypes.map((cabinet, index) => (
              <Card 
                key={cabinet.type}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {cabinet.type}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cabinet.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {cabinet.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                      <div className="space-y-2">
                        {cabinet.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Integrated Medical Care{" "}
            <span className="text-gradient">
            Lahore Operation Theaters
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            A glimpse of our D.H.A Phase-5 Lahore 06 Operation Theaters
          </p>
          <ImageSlider />
        </div>
      </section>

      {/* Material Specifications */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Material <span className="text-gradient">Specifications</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Premium materials and finishes designed for medical environments
                </p>
              </div>
              
              <div className="space-y-6">
                {materialSpecs.map((spec, index) => (
                  <div 
                    key={spec.aspect}
                    className="p-6 rounded-lg bg-secondary/10 border border-secondary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{spec.aspect}</h3>
                      </div>
                      <div>
                        <span className="text-primary font-medium">{spec.specification}</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{spec.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hygiene Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hygiene <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced hygiene features that exceed medical facility requirements
            </p>
          </div>
          
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {hygieneFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-cyan/10 flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-accent-cyan" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customization <span className="text-gradient">Options</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible configuration options to meet your specific operational requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {customizationOptions.map((category, index) => (
              <Card 
                key={category.category}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <span className="text-sm font-medium text-foreground">{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Optimize Your <span className="text-gradient">Storage Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the perfect combination of hygiene, functionality, and durability with our operation theater cabinets, designed to enhance workflow efficiency while maintaining the highest standards of sterile environment management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Request Custom Design
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationTheaterCabinets;
