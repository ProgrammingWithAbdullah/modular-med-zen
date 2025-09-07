import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Award, Globe, Download } from 'lucide-react';

const Affiliations = () => {
  const downloadPDF = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    link.click();
  };

  const affiliations = [
    {
      name: 'FBR',
      fullName: 'Federal Board of Revenue',
      description: 'Registered with Pakistan\'s premier tax collection authority, ensuring compliance with all fiscal regulations.',
      icon: Building2,
      color: 'text-accent-orange'
    },
    {
      name: 'PEC',
      fullName: 'Pakistan Engineering Council',
      description: 'Category C-4 registration with Pakistan\'s apex engineering body, validating our technical expertise.',
      icon: Award,
      color: 'text-accent-cyan'
    },
    {
      name: 'PSW',
      fullName: 'Pakistan Single Window',
      description: 'Registered with Pakistan\'s unified trade facilitation platform for seamless business operations.',
      icon: Globe,
      color: 'text-accent-pink'
    },
    {
      name: 'Adam S.r.l.',
      fullName: 'Modular Med x Adam',
      description: 'We are proud to partner with Adam S.r.l., Italy\'s leading specialist in healthcare and modular building solutions for over 30 years. With expertise in hospital partitions, prefabricated medical facilities, and turnkey healthcare projects worldwide, Adam brings innovation, quality, and international experience to every space. Through this affiliation, Modular Med delivers world-class, sustainable, and certified medical infrastructure solutions in Pakistan and beyond.',
      icon: Building2,
      color: 'text-primary',
      hasDownload: true
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
              Our <span className="text-gradient">Affiliations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified and registered with Pakistan's leading regulatory bodies, ensuring trust and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <Card 
                key={affiliation.name}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <affiliation.icon className={`w-10 h-10 ${affiliation.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {affiliation.name}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {affiliation.fullName}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {affiliation.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    {affiliation.hasDownload ? (
                      <Button 
                        onClick={() => downloadPDF('adam-partnership-brochure.pdf')}
                        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                    ) : (
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-primary/10 rounded-full">
                        <span className="text-sm font-medium text-primary">Certified Member</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">Regulatory Bodies</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our affiliations with Pakistan's premier regulatory institutions demonstrate our commitment to 
            excellence, compliance, and professional standards in the medical industry.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-pink mb-2">3+</div>
              <div className="text-muted-foreground">Regulatory Bodies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">2021</div>
              <div className="text-muted-foreground">Established</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliations;