import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Building, Calendar, CheckCircle, Clock, Award } from 'lucide-react';
import imcHospitalReal from '@/assets/imc-hospital-real.jpg';
import premiumHealthReal from '@/assets/premium-health-real.jpg';
import noorAlshifaReal from '@/assets/noor-alshifa-real.jpg';
import childrenHospitalMultanReal from '@/assets/children-hospital-multan-real.png';
import multanCardiologyReal from '@/assets/multan-cardiology-real.jpg';
import childrenHospitalGujranwala from '@/assets/children-hospital-gujranwala.png';
import retinaEyeCare from '@/assets/retina-eye-care.jpg';
import aficRawalpindiReal from '@/assets/afic-rawalpindi-real.jpg';
import ibadatUniversityHospital from '@/assets/ibadat-university-hospital.jpg';
import chBashirHospital from '@/assets/ch-bashir-hospital.jpg';
import haripurInternationalHospital from '@/assets/haripur-international-hospital.jpg';
import pobHospital from '@/assets/pob-hospital.png';

const Projects = () => {
  const projects = [
    {
      name: 'Integrated Medical Care (IMC) Hospital',
      location: 'D.H.A Phase-5 Lahore',
      scope: '06 Operation Theaters',
      status: 'Completed',
      category: 'Multi-Specialty Hospital',
      image: imcHospitalReal,
      description: '125-bedded purpose-built multi-specialty modern healthcare facility established in 2022 with DHA Lahore joint venture'
    },
    {
      name: 'Premium Health International',
      location: 'G-8 Markaz Islamabad',
      scope: '04 Theaters & ICU',
      status: 'Completed',
      category: 'Healthcare Facility',
      image: premiumHealthReal,
      description: 'Leading healthcare institution providing world-class medical services with advanced modular operation theaters'
    },
    {
      name: 'Noor Al-Shifa Cardiac Hospital',
      location: 'Lahore',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Specialty',
      image: noorAlshifaReal,
      description: 'Specialized cardiac care facility with state-of-the-art modular operation theaters for heart procedures'
    },
    {
      name: 'Children Hospital Multan',
      location: 'Multan, Punjab',
      scope: '08 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultanReal,
      description: 'Government pediatric hospital providing specialized healthcare services for children with modern modular OT systems'
    },
    {
      name: 'Ch. Pervaiz Elahi Institute of Cardiology',
      location: 'Multan',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Institute',
      image: multanCardiologyReal,
      description: 'Premier cardiac care institute with advanced modular operation theaters for complex heart surgeries'
    },
    {
      name: 'Children Hospital Gujranwala',
      location: 'Gujranwala, Punjab',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalGujranwala,
      description: 'Government pediatric healthcare facility equipped with modern modular operation theaters'
    },
    {
      name: 'Ch. Bashir Hospital',
      location: 'G-13 Islamabad',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'General Hospital',
      image: chBashirHospital,
      description: 'General healthcare facility with modern modular operation theaters providing comprehensive medical services'
    },
    {
      name: 'Retina Eye Care Hospital',
      location: 'Gulberg-III Lahore',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Eye Specialty',
      image: retinaEyeCare,
      description: 'Specialized ophthalmology center with advanced modular operation theaters for retinal and eye care procedures'
    },
    {
      name: 'POB Hospital',
      location: 'Lahore',
      scope: '01 Operation Theater',
      status: 'Completed',
      category: 'General Hospital',
      image: pobHospital,
      description: 'Modern healthcare facility equipped with state-of-the-art modular operation theater systems'
    },
    {
      name: 'IBADAT International University Hospital',
      location: 'Rawalpindi',
      scope: '04 Operation Theaters',
      status: 'Ongoing',
      category: 'University Hospital',
      image: ibadatUniversityHospital,
      description: 'Academic medical institution with advanced modular operation theaters for teaching and patient care'
    },
    {
      name: 'Haripur International Hospital',
      location: 'Haripur',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'International Hospital',
      image: haripurInternationalHospital,
      description: 'International standard healthcare facility with cutting-edge hybrid modular operation theater technology'
    },
    {
      name: 'Armed Forces Institute of Cardiology (AFIC)',
      location: 'Rawalpindi',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'Military Hospital',
      image: aficRawalpindiReal,
      description: 'Premier military cardiac care facility with 46+ years legacy, equipped with advanced hybrid modular OT systems'
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
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
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
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
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

      <Footer />
    </div>
  );
};

export default Projects;