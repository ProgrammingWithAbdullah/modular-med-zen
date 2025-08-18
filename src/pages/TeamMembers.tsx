import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, User, Crown } from 'lucide-react';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Sajjad Saeed',
      position: 'Chief Executive Officer',
      phone: '+923224498238',
      email: 'ceo@modularmedsolutions.com',
      description: 'Visionary leader with extensive experience in medical equipment manufacturing and healthcare solutions.',
      icon: Crown,
      gradient: 'from-accent-cyan to-accent-pink'
    },
    {
      name: 'Abdul Razzaq',
      position: 'Managing Director',
      phone: '+923335173034',
      email: 'md@modularmedsolutions.com',
      description: 'Strategic operations expert driving innovation and excellence in modular medical infrastructure.',
      icon: User,
      gradient: 'from-accent-pink to-accent-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Leadership Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation in Pakistan's medical equipment industry.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${member.gradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                        <member.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-white/90 font-medium">
                        {member.position}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    {/* Contact Information */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-cyan/10">
                          <Phone className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <div className="font-medium text-foreground">{member.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-pink/10">
                          <Mail className="w-5 h-5 text-accent-pink" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <div className="font-medium text-foreground">{member.email}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        variant="default" 
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                        onClick={() => window.open(`tel:${member.phone}`)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`mailto:${member.email}`)}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Leadership <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our leadership team brings decades of combined experience in healthcare innovation, 
            manufacturing excellence, and strategic business development.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 mb-4">
                <Crown className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visionary</h3>
              <p className="text-sm text-muted-foreground">Forward-thinking leadership</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-pink/10 mb-4">
                <User className="w-8 h-8 text-accent-pink" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Experienced</h3>
              <p className="text-sm text-muted-foreground">Industry expertise</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 mb-4">
                <Phone className="w-8 h-8 text-accent-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Accessible</h3>
              <p className="text-sm text-muted-foreground">Direct communication</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Responsive</h3>
              <p className="text-sm text-muted-foreground">Quick decision making</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMembers;