import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Products & Services', href: '/products-services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Affiliations', href: '/affiliations' },
    { name: 'Team Members', href: '/team-members' },
    { name: 'Contact Us', href: '/locate-us' },
  ];

  const services = [
    'Modular Operation Theaters',
    'Clean Room Solutions',
    'Laboratory Furniture',
    'Storage Systems',
    'Installation Services',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src={logo}
                alt="Modular MED Solutions" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-xl font-bold mb-2">
                Modular MED Solutions
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Pakistan's leading manufacturer of world-class medical infrastructure solutions. 
                Delivering excellence in modular operation theaters and laboratory equipment since 2021.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Head Office: 36 G Sabzazar Lahore</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Branch: Plot # 34, Tarlai Kalan, Street # 1 Islamabad</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+92 3224498238</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">sajjadsaeed@modular-med.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-background/80 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-background/80 text-sm flex items-start space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Quote</h4>
            <div className="space-y-4">
              <p className="text-background/80 text-sm">
                Need medical equipment solutions? Email us directly for a personalized quote.
              </p>
              <a
                href="mailto:sajjadsaeed@modular-med.com?subject=Request for Medical Equipment Quote&body=Dear Modular MED Solutions Team,%0D%0A%0D%0AI am interested in your medical equipment and solutions. Please provide me with a detailed quote for:%0D%0A%0D%0A- [Please specify your requirements]%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Location: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A%0D%0APlease feel free to contact me for any additional information.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,"
                className="inline-block w-full"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us for Quote
                </Button>
              </a>
              
              {/* Social Links */}
              <div className="pt-4">
                <h5 className="text-sm font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors duration-200 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-background/80 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2021 Modular MED Solutions (Pvt) Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;