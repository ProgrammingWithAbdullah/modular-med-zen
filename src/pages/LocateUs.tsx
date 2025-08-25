import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Navigation, Phone, Mail, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocateUs = () => {
  const handleGetDirections = () => {
  window.open('https://maps.google.com/maps?daddr=31.512345,74.345678', '_blank');
  };

  const handleViewOnMap = () => {
    window.open('https://share.google/npjrxrVGtL44xaHsx', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Locate <span className="text-gradient">Us</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Visit our state-of-the-art facility and discover innovative modular theatre solutions
              </p>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Company Information */}
              <div className="space-y-8 animate-fade-in">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Company Details</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        MODULAR MED SOLUTION PVT. (LTD)
                      </h3>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">
                            36-G, SABZAZAR SCHEME<br />
                            LAHORE, PAKISTAN (54000)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">+92 (042) 123-4567</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">info@modularmed.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      onClick={handleGetDirections}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleViewOnMap}
                      className="flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      View on Map
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Visit Us?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Live demonstration of modular theatre systems
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Consultation with our expert engineers
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      View material samples and finishes
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Discuss customization options
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="animate-scale-in">
                <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1234567890123!2d74.34123456789012!3d31.549876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c5e6d5e6d5%3A0x1234567890abcdef!2sSabzazar%20Scheme%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Click on the map to interact or use the buttons above for navigation
                    </p>
                    <Button 
                      onClick={handleViewOnMap}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              How to <span className="text-gradient">Reach Us</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">By Car</h3>
                <p className="text-muted-foreground text-sm">
                  Located in Sabzazar Scheme, easily accessible from main Lahore roads. Parking available on-site.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Public Transport</h3>
                <p className="text-muted-foreground text-sm">
                  Multiple bus routes serve the area. Nearest metro station is 2km away with easy rickshaw access.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Appointment</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule a visit for detailed consultation and facility tour. Contact us to book your slot.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocateUs;