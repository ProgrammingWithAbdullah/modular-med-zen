import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Building, Calendar, CheckCircle, Clock, Award } from 'lucide-react';
import imcHospital from '@/assets/imc-hospital.jpg';
import premiumHealth from '@/assets/premium-health.jpg';
import noorAlshifa from '@/assets/noor-alshifa.jpg';
import childrenHospitalMultan from '@/assets/children-hospital-multan.jpg';
import multanCardiology from '@/assets/multan-cardiology.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Integrated Medical Care (IMC) Hospital',
      location: 'D.H.A Phase-5 Lahore',
      scope: '06 Operation Theaters',
      status: 'Completed',
      category: 'Multi-Specialty Hospital',
      image: imcHospital
    },
    {
      name: 'Premium Health International',
      location: 'G-8 Islamabad',
      scope: '04 Theaters & ICU',
      status: 'Completed',
      category: 'Healthcare Facility',
      image: premiumHealth
    },
    {
      name: 'Noor Al-Shifa Cardiac Hospital',
      location: 'Lahore',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Specialty',
      image: noorAlshifa
    },
    {
      name: 'Children Hospital Multan',
      location: 'Multan',
      scope: '08 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultan
    },
    {
      name: 'Multan Institute of Cardiology',
      location: 'Multan',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Cardiac Institute',
      image: multanCardiology
    },
    {
      name: 'Children Hospital Gujranwala',
      location: 'Gujranwala',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'Pediatric Hospital',
      image: childrenHospitalMultan
    },
    {
      name: 'Ch. Bashir Hospital',
      location: 'G-13 Islamabad',
      scope: '02 Operation Theaters',
      status: 'Completed',
      category: 'General Hospital',
      image: premiumHealth
    },
    {
      name: 'Retina Eye Care Hospital',
      location: 'Gulberg-III Lahore',
      scope: '04 Operation Theaters',
      status: 'Completed',
      category: 'Eye Specialty',
      image: imcHospital
    },
    {
      name: 'POB Hospital',
      location: 'Lahore',
      scope: '01 Operation Theater',
      status: 'Completed',
      category: 'General Hospital',
      image: imcHospital
    },
    {
      name: 'IBADAT International University Hospital',
      location: 'Rawalpindi',
      scope: '04 Operation Theaters',
      status: 'Ongoing',
      category: 'University Hospital',
      image: premiumHealth
    },
    {
      name: 'Haripur International Hospital',
      location: 'Haripur',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'International Hospital',
      image: imcHospital
    },
    {
      name: 'AFIC Rawalpindi',
      location: 'Rawalpindi',
      scope: 'Hybrid Operation Theater',
      status: 'Ongoing',
      category: 'Military Hospital',
      image: premiumHealth
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