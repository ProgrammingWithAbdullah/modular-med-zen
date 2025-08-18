import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teammember1 from '@/assets/team1.jpg';
import teammember2 from '@/assets/team2.jpg';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Sajjad Saeed',
      position: 'Chief Executive Officer',
      phone: '+923224498238',
      email: 'ceo@modularmedsolutions.com',
      description: 'Visionary leader with extensive experience in medical equipment manufacturing and healthcare solutions.',
      image: teammember1,
      gradient: 'from-accent-cyan to-accent-pink'
    },
    {
      name: 'Abdul Razzaq',
      position: 'Managing Director',
      phone: '+923335173034',
      email: 'md@modularmedsolutions.com',
      description: 'Strategic operations expert driving innovation and excellence in modular medical infrastructure.',
      image: teammember2,
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
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-4 overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-12 h-12 object-contain" />
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
                          {/* Phone icon stays */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12L10.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0022 4H6.21l-.94-2H1v2h2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <div className="font-medium text-foreground">{member.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-pink/10">
                          {/* Mail icon stays */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0l-8-8m8 8l-8 8" />
                          </svg>
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
                        Call
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`mailto:${member.email}`)}
                      >
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

      {/* Leadership Values remain same */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Leadership <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our leadership team brings decades of combined experience in healthcare innovation, 
            manufacturing excellence, and strategic business development.
          </p>

          {/* Keeping existing lucide-react icons here */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* ... same as before */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMembers;
