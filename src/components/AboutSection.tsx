import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Building2, Users, Award, Zap, Shield, Wrench } from 'lucide-react';
import { useState } from 'react';
import labImage from '@/assets/lab-equipment.jpg';
import cleanroomImage from '@/assets/cleanroom.jpg';
import ProductCarousel from '@/components/ProductCarousel';

const AboutSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features = [
    {
      icon: Building2,
      title: 'Modular Design',
      description: 'Flexible and scalable solutions tailored to your specific requirements.',
      extendedDescription: 'Our modular design approach allows for complete customization based on your healthcare facility\'s unique needs. Each component is engineered to work seamlessly together, providing maximum flexibility for future expansions or modifications. Whether you\'re setting up a single operation theater or an entire surgical wing, our modular systems can be configured to fit any space and requirement. The standardized components ensure consistent quality while allowing for infinite customization possibilities.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Strict quality control procedures at every stage of production.',
      extendedDescription: 'Quality is at the heart of everything we do. Our comprehensive quality assurance program includes rigorous testing at every stage of production, from raw material inspection to final installation. We follow international standards and maintain detailed documentation throughout the manufacturing process. Each component undergoes multiple quality checks, ensuring that only the highest grade products reach our clients. Our quality management system is designed to exceed industry standards and maintain consistency across all projects.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with continuous training and improvement.',
      extendedDescription: 'Our team consists of experienced engineers, skilled technicians, and healthcare facility specialists who understand the unique requirements of medical environments. We invest heavily in continuous training and professional development to stay ahead of industry trends and technological advances. Our experts work closely with clients from initial consultation through final installation, ensuring every project meets the highest standards. Regular training programs keep our team updated with the latest medical equipment standards and installation techniques.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient production and timely installation with systematic approach.',
      extendedDescription: 'Time is critical in healthcare facility construction, and we understand the urgency of your projects. Our streamlined production process and efficient supply chain management ensure rapid delivery without compromising quality. Pre-fabricated modular components significantly reduce on-site installation time compared to traditional construction methods. Our systematic approach includes detailed project planning, coordinated logistics, and experienced installation teams that can complete projects in weeks rather than months, minimizing disruption to your operations.'
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'S.S 304, M.S powder coated, and high-grade glass components.',
      extendedDescription: 'We use only the finest materials specifically chosen for medical environments. Our stainless steel components are made from SS 304 grade, providing superior corrosion resistance and easy maintenance. The MS powder-coated elements undergo advanced surface treatment for durability and aesthetic appeal. Our high-grade glass panels offer excellent visibility while maintaining sterile barriers. All materials are selected for their antimicrobial properties, chemical resistance, and ability to withstand rigorous cleaning protocols required in healthcare facilities.'
    },
    {
      icon: Wrench,
      title: 'Complete Service',
      description: 'From design consultation to installation and ongoing support.',
      extendedDescription: 'We provide end-to-end solutions for all your modular healthcare facility needs. Our comprehensive service includes initial consultation and needs assessment, custom design and engineering, manufacturing, installation, testing, and commissioning. Post-installation, we offer ongoing maintenance support, technical assistance, and upgrade services. Our dedicated support team ensures your facility continues to operate at peak performance with minimal downtime. We also provide training for your staff on proper use and maintenance of the installed systems.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            About Modular MED Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leading Medical Infrastructure
            <span className="text-gradient block">Since 2021</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2021, Modular Med Solutions (Pvt) Ltd offers a wide variety of Modular Operation Theaters, 
            Clean Rooms & Laboratory Furniture to suit the needs of workspace. Listed amongst the leaders in modern modular 
            metal structures, our versatility is authenticated in various specialty solutions, supported with highly skilled 
            labor who are engaged in continuous improvisation & bringing out products and solutions, backed with outstanding 
            service that outclasses any similar products in the market.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Excellence in Medical Infrastructure
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Listed amongst the leaders in modern modular metal structures, Modular Med Solutions (Pvt) Ltd 
                versatility is authenticated in various specialty solutions, supported with highly skilled labor 
                who are engaged in continuous improvisation & bringing out products and solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are Manufacture/Importer of all components of Modular Operation theaters (Glass, S.S 304 Powder 
                Coated & M.S powder coated). Laboratory Tables, Storage Cupboards, Scrub Sink Units, Chemical Storage 
                Cabinets, Mobile Racks, Clean Room Furniture and other MS, SS & Glass furniture can be purchased as 
                standard units or individually modified according to the needs of the customer.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Product Range</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Operation Theaters',
                  'Clean Rooms',
                  'Laboratory Tables',
                  'Storage Cupboards',
                  'Scrub Sink Units',
                  'Chemical Storage',
                  'Mobile Racks',
                  'Glass Furniture'
                ].map((product, index) => (
                  <div 
                    key={product}
                    className="flex items-center space-x-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <img
                src={labImage}
                alt="Modern Laboratory Equipment"
                className="rounded-2xl shadow-medium hover-lift w-full h-48 object-cover"
              />
              <Card className="p-4 hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card className="p-4 hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-gradient">Pakistan</div>
                  <div className="text-sm text-muted-foreground">#1 Manufacturer</div>
                </CardContent>
              </Card>
              <img
                src={cleanroomImage}
                alt="Clean Room Facility"
                className="rounded-2xl shadow-medium hover-lift w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="hover-lift hover-glow transition-all duration-300 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedFeature(feature.title)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-primary text-white shadow-glow animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Quality Commitment</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
                Modular Med Solutions (Pvt) Ltd commitment to quality is reflected at all stages. 
                Strict Quality control procedures are followed right from material selections procurements, 
                receiving, processing production, works in progress and end products monitoring, timely supplies, 
                systematic and accurate installation, project handover and appropriate service backup.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Feature Dialogs */}
        {features.map((feature) => (
          <Dialog 
            key={feature.title} 
            open={selectedFeature === feature.title} 
            onOpenChange={(open) => !open && setSelectedFeature(null)}
          >
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.extendedDescription}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;