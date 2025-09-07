import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupImageSlider from '@/components/PopupImageSlider';
import { MapPin, Building, Calendar, CheckCircle, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import imcHospitalReal from '@/assets/imc-hospital-real.jpg';
import premiumHealthReal from '@/assets/premium-health-real.jpg';
import noorAlshifaReal from '@/assets/noor-alshifa-real.jpg';
import childrenHospitalMultanReal from '@/assets/children-hospital-multan-real.jpg';
import multanCardiologyReal from '@/assets/multan-cardiology-real.jpg';
import childrenHospitalGujranwala from '@/assets/children-hospital-gujranwala.jpg';
import retinaEyeCare from '@/assets/retina-eye-care.jpg';
import aficRawalpindiReal from '@/assets/afic-rawalpindi-real.jpg';
import ibadatUniversityHospital from '@/assets/ibadat-university-hospital.jpg';
import chBashirHospital from '@/assets/ch-bashir-hospital.png';
import haripurInternationalHospital from '@/assets/haripur-international-hospital.jpg';
import pobHospital from '@/assets/pob-hospital.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      name: 'Integrated Medical Care (IMC) Hospital',
      location: 'D.H.A Phase-5 Lahore',
      scope: '06 Operation Theaters',
      status: 'Completed',
      category: 'Multi-Specialty Hospital',
      image: imcHospitalReal,
      description: '125-bedded purpose-built multi-specialty modern healthcare facility established in 2022 with DHA Lahore joint venture',
      extendedDescription: 'IMC Hospital stands as a pinnacle of modern healthcare excellence in Lahore\'s prestigious DHA Phase-5. This state-of-the-art 125-bedded multi-specialty facility represents a landmark collaboration between DHA Lahore and private healthcare investors. Our team delivered an extraordinary installation of 06 world-class modular operation theaters, each equipped with cutting-edge technology and premium SS 304 grade stainless steel components. The facility features advanced HVAC systems, antimicrobial surfaces, and hermetically sealed environments that exceed international healthcare standards. Our modular design approach enabled rapid construction without compromising on quality, delivering fully functional operation theaters that support complex surgical procedures across multiple specialties including cardiology, orthopedics, and general surgery.',
      servicesProvided: [
        '06 Premium Modular Operation Theaters with SS 304 construction',
        'Advanced HVAC and air filtration systems for infection control',
        'Hermetic door systems with automatic operation',
        'LED surgical lighting with advanced control panels',
        'Medical gas pipeline systems for all theaters',
        'Antimicrobial flooring and wall protection systems'
      ]
    },
    {
      name: 'Premium Health International',
      location: 'G-8 Markaz Islamabad',
      scope: '04 Theaters & ICU',
      status: 'Completed',
      category: 'Healthcare Facility',
      image: premiumHealthReal,
      description: 'Leading healthcare institution providing world-class medical services with advanced modular operation theaters',
      extendedDescription: 'Premium Health International in Islamabad\'s prime G-8 Markaz location represents the epitome of modern healthcare infrastructure. This prestigious facility required the highest standards of medical equipment and infrastructure to match its reputation. Our team successfully installed 04 premium modular operation theaters along with specialized ICU facilities. Each theater incorporates advanced modular construction techniques using medical-grade materials including SS 304 stainless steel, powder-coated MS components, and high-grade glass panels. The facility features state-of-the-art infection control systems, advanced surgical lighting, and integrated medical gas pipelines. Our innovative modular approach reduced construction time by 70% compared to traditional methods while ensuring superior quality and functionality.',
      servicesProvided: [
        '04 Advanced Modular Operation Theaters with premium finishes',
        'Specialized ICU modular infrastructure',
        'Integrated surgical control panels and lighting systems',
        'Medical gas pipeline installation across all facilities',
        'Advanced air intake and filtration systems',
        'Complete infection control and antimicrobial solutions'
      ]
    },
    {
      name: 'Children Hospital Multan',
      location: 'Multan, Punjab',
      scope: '08 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultanReal,
      description: 'Government pediatric hospital providing specialized healthcare services for children with modern modular OT systems',
      extendedDescription: 'Children Hospital Multan stands as the largest pediatric healthcare facility in Southern Punjab, serving thousands of children annually. This massive government project required exceptional scale and precision in delivering 08 world-class modular operation theaters specifically designed for pediatric procedures. Each theater incorporates child-friendly design elements while maintaining the highest medical standards. Our modular construction approach enabled simultaneous installation across multiple theaters, significantly reducing project timeline. The facility features specialized pediatric surgical equipment integration, advanced infection control systems, and child-safe materials throughout. All theaters are equipped with premium SS 304 stainless steel components, specialized pediatric lighting systems, and advanced HVAC controls optimized for smaller patients. This project represents our commitment to improving pediatric healthcare infrastructure across Pakistan.',
      servicesProvided: [
        '08 Specialized Pediatric Modular Operation Theaters',
        'Child-friendly design elements with medical-grade safety standards',
        'Advanced pediatric surgical equipment integration',
        'Specialized infection control systems for pediatric care',
        'Premium SS 304 construction with child-safe finishing',
        'Advanced HVAC systems optimized for pediatric procedures'
      ]
    },
    {
      name: 'Noor Al-Shifa Cardiac Hospital',
      location: 'Lahore',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Specialty',
      image: noorAlshifaReal,
      description: 'Specialized cardiac care facility with state-of-the-art modular operation theaters for heart procedures',
      extendedDescription: 'Noor Al-Shifa Cardiac Hospital represents excellence in specialized cardiac care infrastructure. This facility demanded the highest precision and quality standards for life-critical cardiac procedures. Our team delivered 02 exceptionally advanced modular operation theaters specifically designed for cardiac surgeries. Each theater features specialized cardiac surgical equipment integration, advanced monitoring systems, and precision environmental controls. The modular construction utilizes premium SS 304 grade materials with specialized coatings for enhanced durability and hygiene. Advanced HVAC systems maintain precise temperature and humidity control essential for cardiac procedures. The theaters include integrated surgical control panels, LED X-ray viewers, and specialized medical gas systems optimized for cardiac surgery requirements.',
      servicesProvided: [
        '02 Specialized Cardiac Modular Operation Theaters',
        'Advanced cardiac surgical equipment integration',
        'Precision environmental control systems for cardiac procedures',
        'Specialized medical gas systems with cardiac surgery specifications',
        'Premium SS 304 construction with specialized antimicrobial coatings',
        'Integrated LED X-ray viewing systems and surgical control panels'
      ]
    },
    {
      name: 'Ch. Pervaiz Elahi Institute of Cardiology',
      location: 'Multan',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Institute',
      image: multanCardiologyReal,
      description: 'Premier cardiac care institute with advanced modular operation theaters for complex heart surgeries',
      extendedDescription: 'The Ch. Pervaiz Elahi Institute of Cardiology in Multan represents the pinnacle of cardiac care in Southern Punjab. This premier cardiac institute required the most advanced surgical infrastructure to perform complex heart procedures. Our team delivered 04 exceptional modular operation theaters designed specifically for advanced cardiac surgery applications. Each theater features cutting-edge cardiac surgical integration, specialized monitoring systems, and precision environmental controls critical for complex heart procedures. The modular construction utilizes the finest medical-grade materials including premium SS 304 stainless steel with specialized cardiac surgery finishes. Advanced HVAC systems provide precise environmental control essential for open-heart procedures. The theaters include integrated cardiac surgical control panels, advanced medical gas systems, and specialized lighting optimized for intricate cardiac operations.',
      servicesProvided: [
        '04 Advanced Cardiac Surgery Modular Operation Theaters',
        'Specialized cardiac surgical equipment integration systems',
        'Precision environmental controls for complex heart procedures',
        'Advanced cardiac surgical control panels and monitoring integration',
        'Premium SS 304 construction with specialized cardiac surgery finishes',
        'Integrated medical gas systems optimized for cardiac procedures'
      ]
    },
    {
      name: 'Children Hospital Gujranwala',
      location: 'Gujranwala, Punjab',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalGujranwala,
      description: 'Government pediatric healthcare facility equipped with modern modular operation theaters',
      extendedDescription: 'Children Hospital Gujranwala serves as a vital pediatric healthcare facility for the region, providing specialized medical services to children across Gujranwala and surrounding areas. This important government healthcare project required 02 advanced modular operation theaters designed specifically for pediatric surgical procedures. Our team delivered exceptional pediatric-focused surgical infrastructure incorporating child-friendly design elements while maintaining the highest medical standards. The theaters feature specialized pediatric equipment integration, advanced safety systems, and materials specifically selected for pediatric care environments. Each theater utilizes premium SS 304 stainless steel construction with specialized antimicrobial coatings safe for children. The modular approach enabled rapid installation with minimal disruption to ongoing hospital operations, ensuring continuous pediatric care during construction.',
      servicesProvided: [
        '02 Specialized Pediatric Modular Operation Theaters',
        'Child-friendly design with advanced safety features',
        'Pediatric surgical equipment integration systems',
        'Specialized antimicrobial surfaces safe for children',
        'Premium SS 304 construction with pediatric-optimized finishes',
        'Advanced infection control systems for pediatric environments'
      ]
    },
    {
      name: 'Ch. Bashir Hospital',
      location: 'G-13 Islamabad',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'General Hospital',
      image: chBashirHospital,
      description: 'General healthcare facility with modern modular operation theaters providing comprehensive medical services',
      extendedDescription: 'Ch. Bashir Hospital in Islamabad\'s G-13 sector represents modern healthcare excellence in the capital region. This comprehensive general hospital required 02 versatile modular operation theaters capable of supporting various surgical specialties. Our team delivered exceptional multi-purpose surgical facilities incorporating advanced modular construction techniques. Each theater features flexible equipment integration systems, advanced environmental controls, and premium medical-grade materials throughout. The modular design enables easy reconfiguration for different surgical procedures while maintaining consistent high-quality standards. Premium SS 304 stainless steel construction ensures durability and hygiene, while advanced HVAC systems provide optimal surgical environments. The theaters include integrated control panels, medical gas systems, and specialized lighting suitable for diverse surgical applications.',
      servicesProvided: [
        '02 Multi-Purpose Modular Operation Theaters',
        'Versatile surgical equipment integration for multiple specialties',
        'Advanced environmental control systems',
        'Premium SS 304 construction with medical-grade finishes',
        'Integrated surgical control panels and lighting systems',
        'Complete medical gas pipeline installation'
      ]
    },
    {
      name: 'Retina Eye Care Hospital',
      location: 'Gulberg-III Lahore',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Eye Specialty',
      image: retinaEyeCare,
      description: 'Specialized ophthalmology center with advanced modular operation theaters for retinal and eye care procedures',
      extendedDescription: 'Retina Eye Care Hospital in Lahore\'s prestigious Gulberg-III area represents the pinnacle of specialized ophthalmology care in Pakistan. This world-class eye care facility required 04 precision-engineered modular operation theaters specifically designed for delicate retinal and eye procedures. Each theater incorporates ultra-precise environmental controls, specialized ophthalmologic equipment integration, and advanced vibration isolation systems critical for microscopic eye procedures. The modular construction utilizes premium materials with specialized coatings optimized for ophthalmic procedures. Advanced HVAC systems maintain precise temperature and humidity control essential for retinal surgery. The theaters feature integrated ophthalmologic surgical control panels, specialized LED lighting systems, and precision medical gas controls designed specifically for eye surgery applications.',
      servicesProvided: [
        '04 Specialized Ophthalmologic Modular Operation Theaters',
        'Ultra-precise environmental controls for retinal procedures',
        'Advanced vibration isolation systems for microscopic surgery',
        'Specialized ophthalmologic equipment integration',
        'Premium construction with ophthalmic-optimized materials',
        'Integrated LED lighting systems designed for eye procedures'
      ]
    },
    {
      name: 'POB Hospital',
      location: 'Lahore',
      scope: '01 Operation Theater',
      status: 'Completed',
      category: 'General Hospital',
      image: pobHospital,
      description: 'Modern healthcare facility equipped with state-of-the-art modular operation theater systems',
      extendedDescription: 'POB Hospital in Lahore represents modern healthcare infrastructure designed for comprehensive medical services. This facility required 01 premium modular operation theater capable of supporting various surgical procedures with the highest quality standards. Our team delivered an exceptional single-theater installation incorporating advanced modular construction techniques and premium medical-grade materials. The theater features versatile equipment integration, advanced environmental controls, and premium SS 304 stainless steel construction throughout. Advanced HVAC systems provide optimal surgical environment conditions, while integrated control panels enable precise management of all theater systems. The modular approach enabled rapid installation with minimal disruption to hospital operations, ensuring continuous patient care during construction.',
      servicesProvided: [
        '01 Premium Multi-Purpose Modular Operation Theater',
        'Advanced surgical equipment integration systems',
        'Premium SS 304 stainless steel construction',
        'Integrated environmental control and HVAC systems',
        'Advanced surgical lighting and control panel integration',
        'Complete medical gas pipeline and distribution system'
      ]
    },
    {
      name: 'IBADAT International University Hospital',
      location: 'Rawalpindi',
      scope: '04 Operation Theaters',
      status: 'Ongoing',
      category: 'University Hospital',
      image: ibadatUniversityHospital,
      description: 'Academic medical institution with advanced modular operation theaters for teaching and patient care',
      extendedDescription: 'IBADAT International University Hospital in Rawalpindi represents the future of academic medical excellence in Pakistan. This prestigious university hospital project involves the installation of 04 advanced modular operation theaters designed for both cutting-edge patient care and medical education. Each theater incorporates state-of-the-art teaching integration systems, advanced surgical equipment, and observation facilities for medical students. The modular construction utilizes the finest medical-grade materials with specialized academic healthcare features. The project includes advanced HVAC systems, premium SS 304 stainless steel construction, and integrated technology systems designed for teaching hospitals. Currently in advanced stages of installation, this project will set new standards for academic medical infrastructure in Pakistan.',
      servicesProvided: [
        '04 Advanced Academic Modular Operation Theaters with teaching integration',
        'State-of-the-art medical student observation systems',
        'Advanced surgical equipment integration for teaching applications',
        'Premium SS 304 construction with academic healthcare specifications',
        'Integrated technology systems for medical education',
        'Advanced environmental controls optimized for teaching environments'
      ]
    },
    {
      name: 'Haripur International Hospital',
      location: 'Haripur',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'International Hospital',
      image: haripurInternationalHospital,
      description: 'International standard healthcare facility with cutting-edge hybrid modular operation theater technology',
      extendedDescription: 'Haripur International Hospital represents the advancement of healthcare infrastructure in the Haripur region, bringing international standards to local communities. This ambitious project involves the installation of a cutting-edge Hybrid Operation Theater incorporating the latest in modular construction technology. The hybrid theater combines advanced imaging capabilities with traditional surgical infrastructure, enabling complex procedures that require real-time imaging guidance. Our modular approach incorporates specialized radiation shielding, advanced imaging equipment integration, and premium medical-grade construction materials. The project features state-of-the-art HVAC systems, precision environmental controls, and specialized equipment designed for hybrid surgical procedures. Currently under construction, this facility will provide unprecedented surgical capabilities to the region.',
      servicesProvided: [
        'Advanced Hybrid Modular Operation Theater with imaging integration',
        'Specialized radiation shielding and safety systems',
        'Real-time imaging equipment integration for guided procedures',
        'Premium modular construction with hybrid theater specifications',
        'Advanced environmental controls for hybrid surgical applications',
        'Specialized medical gas systems optimized for hybrid procedures'
      ]
    },
    {
      name: 'Armed Forces Institute of Cardiology (AFIC)',
      location: 'Rawalpindi',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'Military Hospital',
      image: aficRawalpindiReal,
      description: 'Premier military cardiac care facility with 46+ years legacy, equipped with advanced hybrid modular OT systems',
      extendedDescription: 'The Armed Forces Institute of Cardiology (AFIC) in Rawalpindi stands as Pakistan\'s premier cardiac care institution with over 46 years of distinguished service to military personnel and civilians alike. This prestigious project involves the installation of an advanced Hybrid Operation Theater representing the pinnacle of cardiac surgical technology. The hybrid theater combines cutting-edge cardiac imaging capabilities with advanced surgical infrastructure, enabling the most complex cardiac procedures with real-time imaging guidance. Our modular construction approach incorporates specialized cardiac equipment integration, advanced radiation protection systems, and premium military-grade materials. The project features state-of-the-art environmental controls, precision HVAC systems, and specialized infrastructure designed specifically for hybrid cardiac procedures. This installation will enhance AFIC\'s position as the leading cardiac care facility in the region.',
      servicesProvided: [
        'Advanced Hybrid Cardiac Operation Theater with specialized imaging',
        'Military-grade construction standards with premium materials',
        'Specialized cardiac imaging equipment integration systems',
        'Advanced radiation protection and safety systems',
        'Precision environmental controls for complex cardiac procedures',
        'Specialized medical infrastructure optimized for military healthcare standards'
      ]
    }
  ];

  const completedProjects = projects.filter(p => p.status === 'Completed');
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing');

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: Building },
    { label: 'Completed', value: completedProjects.length, icon: CheckCircle },
    { label: 'Ongoing', value: ongoingProjects.length, icon: Clock },
    { label: 'Cities Served', value: '8+', icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across Pakistan's leading healthcare institutions with cutting-edge modular solutions.
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
                className="text-center bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in"
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

      {/* Completed Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">Completed</span> Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Successfully delivered modular operation theaters and medical infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {completedProjects.map((project, index) => (
              <Card 
                key={project.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project.name)}
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                      Completed
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent-cyan" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="w-4 h-4 mr-2 text-accent-pink" />
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

      {/* Ongoing Projects */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">Ongoing</span> Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Current projects in development and installation phases
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <Card 
                key={project.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project.name)}
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-orange/10">
                      <Clock className="w-6 h-6 text-accent-orange" />
                    </div>
                    <Badge variant="secondary" className="bg-accent-orange/10 text-accent-orange border-accent-orange/20">
                      In Progress
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent-cyan" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="w-4 h-4 mr-2 text-accent-pink" />
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

      {/* Project Excellence */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Project <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Every project represents our commitment to delivering world-class modular medical infrastructure 
            that meets the highest standards of quality and functionality.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 mb-4">
                <Award className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Every project meets international standards</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-4">
                <Calendar className="w-8 h-8 text-accent-pink" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Timely Delivery</h3>
              <p className="text-sm text-muted-foreground">On-schedule project completion</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 mb-4">
                <CheckCircle className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Success</h3>
              <p className="text-sm text-muted-foreground">Perfect project completion rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Dialogs */}
      {projects.map((project) => (
        <Dialog 
          key={project.name} 
          open={selectedProject === project.name} 
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {project.name}
                    </DialogTitle>
                    <Badge 
                      variant="secondary" 
                      className={
                        project.status === 'Completed' 
                          ? "bg-green-500/10 text-green-600 border-green-500/20"
                          : "bg-accent-orange/10 text-accent-orange border-accent-orange/20"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent-cyan" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="w-4 h-4 mr-2 text-accent-pink" />
                      {project.scope}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs mt-2">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {project.extendedDescription}
              </DialogDescription>
              
              {/* Add image slider for first 3 hospitals */}
              {[
                'Integrated Medical Care (IMC) Hospital',
                'Premium Health International', 
                'Children Hospital Multan'
              ].includes(project.name) && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Project Gallery</h4>
                  <PopupImageSlider />
                </div>
              )}
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Services Provided</h4>
                <div className="grid gap-3">
                  {project.servicesProvided.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground leading-relaxed">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}

      <Footer />
    </div>
  );
};

export default Projects;