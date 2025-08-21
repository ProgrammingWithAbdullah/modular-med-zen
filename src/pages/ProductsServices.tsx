import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Zap, Shield, Settings, Building, Stethoscope } from 'lucide-react';

// Import all product images
import modularTheatreSystems from '@/assets/modular-theatre-systems.jpg';
import coloredGlassPanels from '@/assets/colored-glass-panels.jpg';
import giPowderCoating from '@/assets/gi-powder-coating.jpg';
import customization from '@/assets/customization.jpg';
import sealingGaskets from '@/assets/sealing-gaskets.jpg';
import wallProtection from '@/assets/wall-protection.jpg';
import hermeticLights from '@/assets/hermetic-lights.jpg';
import antiMicrobialFlooring from '@/assets/anti-microbial-flooring.jpg';
import connectPanels from '@/assets/connect-panels.jpg';
import airIntakeCorners from '@/assets/air-intake-corners.jpg';
import autoManualDoors from '@/assets/auto-manual-doors.jpg';
import orSurgicalControlPanel from '@/assets/or-surgical-control-panel.jpg';
import passThroughWindows from '@/assets/pass-through-windows.jpg';
import ledXrayViewer from '@/assets/led-xray-viewer.jpg';
import operationTheaterCabinets from '@/assets/operation-theater-cabinets.jpg';
import scrubSystem from '@/assets/scrub-system.jpg';
import medicalGasPipeline from '@/assets/medical-gas-pipeline.jpg';

const ProductsServices = () => {
  const products = [
    {
      name: 'Modular Theatre Systems',
      category: 'Core Systems',
      image: modularTheatreSystems,
      type: 'product'
    },
    {
      name: 'Colored Glass Panels',
      category: 'Wall Systems',
      image: coloredGlassPanels,
      type: 'product'
    },
    {
      name: 'GI Powder Coating',
      category: 'Finishing',
      image: giPowderCoating,
      type: 'service'
    },
    {
      name: 'Customization',
      category: 'Services',
      image: customization,
      type: 'service'
    },
    {
      name: 'Sealing Gaskets',
      category: 'Components',
      image: sealingGaskets,
      type: 'product'
    },
    {
      name: 'Wall Protection',
      category: 'Safety Systems',
      image: wallProtection,
      type: 'product'
    },
    {
      name: 'Hermetic Lights',
      category: 'Lighting',
      image: hermeticLights,
      type: 'product'
    },
    {
      name: 'Anti-Microbial Flooring',
      category: 'Flooring',
      image: antiMicrobialFlooring,
      type: 'product'
    },
    {
      name: 'Connect Panels',
      category: 'Wall Systems',
      image: connectPanels,
      type: 'product'
    },
    {
      name: 'Air Intake Corners',
      category: 'HVAC Systems',
      image: airIntakeCorners,
      type: 'product'
    },
    {
      name: 'Auto/Manual Doors',
      category: 'Access Systems',
      image: autoManualDoors,
      type: 'product'
    },
    {
      name: 'OR/Surgical Control Panel',
      category: 'Control Systems',
      image: orSurgicalControlPanel,
      type: 'product'
    },
    {
      name: 'Pass-Through Windows',
      category: 'Transfer Systems',
      image: passThroughWindows,
      type: 'product'
    },
    {
      name: 'LED X-Ray Viewer',
      category: 'Medical Equipment',
      image: ledXrayViewer,
      type: 'product'
    },
    {
      name: 'Operation Theatre Cabinets',
      category: 'Storage',
      image: operationTheaterCabinets,
      type: 'product'
    },
    {
      name: 'Scrub System',
      category: 'Hygiene Systems',
      image: scrubSystem,
      type: 'product'
    },
    {
      name: 'Medical Gas Pipeline System',
      category: 'Gas Systems',
      image: medicalGasPipeline,
      type: 'product'
    }
  ];

  const productItems = products.filter(item => item.type === 'product');
  const serviceItems = products.filter(item => item.type === 'service');

  const stats = [
    { label: 'Total Solutions', value: products.length, icon: Building },
    { label: 'Products', value: productItems.length, icon: Wrench },
    { label: 'Services', value: serviceItems.length, icon: Settings },
    { label: 'Categories', value: [...new Set(products.map(p => p.category))].length, icon: Shield }
  ];

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Products & <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical infrastructure solutions designed to meet the highest standards of quality, 
              functionality, and safety for modern healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium medical equipment and infrastructure solutions manufactured to international standards 
              with cutting-edge technology and superior craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productItems.map((product, index) => (
              <Card 
                key={product.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Product Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      Product
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services from design consultation to installation and maintenance, 
              ensuring optimal performance of your medical infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceItems.map((service, index) => (
              <Card 
                key={service.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Service Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10">
                      <Settings className="w-5 h-5 text-accent" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                      Service
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  
                  <Badge variant="outline" className="text-xs">
                    {service.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solution <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage across all aspects of medical facility infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div 
                key={category}
                className="p-4 rounded-lg bg-glass border-glass text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 mb-3">
                  <Stethoscope className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {products.filter(p => p.category === category).length} solutions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 bg-gradient-elegant/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quality <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Every product and service is backed by our commitment to quality, precision manufacturing, 
            and adherence to international medical facility standards.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 mb-4">
                <Shield className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Medical Grade</h3>
              <p className="text-sm text-muted-foreground">All products meet medical facility standards</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-4">
                <Zap className="w-8 h-8 text-accent-pink" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">Cutting-edge technology and design</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 mb-4">
                <Building className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Comprehensive</h3>
              <p className="text-sm text-muted-foreground">Complete infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsServices;