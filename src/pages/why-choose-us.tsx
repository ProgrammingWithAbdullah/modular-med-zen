import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, MapPin, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const WhyChooseUs = () => {
  const [selectedReason, setSelectedReason] = useState(null);

  const reasons = [
    {
      icon: <CheckCircle className="h-16 w-16 text-accent mb-6" />,
      title: "INNOVATION",
      description:
        "We strive to bring innovation to the medical industry by introducing modular systems and unique designs that enhance overall experience.",
      gradient: "from-primary/20 to-accent/20",
      detailedDescription: "At Modular MED, innovation drives everything we do. We continuously research and develop cutting-edge modular systems that revolutionize healthcare infrastructure. Our team of engineers and designers work tirelessly to create solutions that not only meet current medical standards but anticipate future healthcare needs. From smart integration systems to IoT-enabled monitoring, we bring the latest technology to traditional medical equipment manufacturing. Our innovative approach has led to the development of modular operation theaters that can be customized and reconfigured based on specific surgical requirements, making healthcare facilities more adaptable and efficient.",
      keyPoints: [
        "State-of-the-art modular design technology",
        "Smart integration with hospital management systems", 
        "IoT-enabled monitoring and control systems",
        "Customizable and reconfigurable layouts",
        "Future-ready infrastructure solutions",
        "Advanced materials and construction techniques"
      ]
    },
    {
      icon: <Award className="h-16 w-16 text-secondary mb-6" />,
      title: "QUALITY",
      description:
        "At Modular Med, we prioritize quality in every aspect of our products and services. We use high-quality materials and employ rigorous quality control measures to ensure that our clients receive top-notch products.",
      gradient: "from-secondary/20 to-primary/20",
      detailedDescription: "Quality is not just a buzzword at Modular MED – it's our foundation. Every component that goes into our modular systems undergoes rigorous testing and quality assurance processes. We source materials from certified suppliers and maintain strict quality control standards throughout our manufacturing process. Our products are built to last, ensuring long-term reliability and performance in demanding healthcare environments. We hold multiple certifications including ISO standards for manufacturing and quality management, demonstrating our commitment to excellence in every aspect of our operations.",
      keyPoints: [
        "ISO 9001:2015 certified manufacturing processes",
        "Premium grade stainless steel and medical-grade materials",
        "Multi-stage quality inspection and testing",
        "Compliance with international healthcare standards",
        "Comprehensive warranty and after-sales support",
        "Continuous improvement and feedback integration"
      ]
    },
    {
      icon: <MapPin className="h-16 w-16 text-accent mb-6" />,
      title: "LOCAL MANUFACTURING",
      description:
        "As a local manufacturer, we are committed to supporting the growth and development of the Pakistani economy. By choosing Modular Med, clients contribute to the promotion of local industries.",
      gradient: "from-accent/20 to-secondary/20",
      detailedDescription: "Being proudly Pakistani, we understand the unique challenges and requirements of our healthcare system. Our local manufacturing capabilities enable us to provide faster delivery times, cost-effective solutions, and immediate support services. We've invested heavily in local talent development, creating skilled jobs and contributing to Pakistan's economic growth. Our proximity to clients means quicker response times for maintenance and support. We source materials locally whenever possible, supporting the entire supply chain ecosystem while maintaining international quality standards.",
      keyPoints: [
        "Faster delivery and reduced lead times",
        "Cost-effective solutions with local pricing advantages",
        "Immediate on-site support and maintenance",
        "Contributing to Pakistan's economic development",
        "Creating skilled employment opportunities",
        "Supporting local supply chain and vendors"
      ]
    },
    {
      icon: <Users className="h-16 w-16 text-primary mb-6" />,
      title: "EXPERTISE",
      description:
        "With years of experience in the medical field, our team of skilled professionals possesses the knowledge and expertise to deliver exceptional results. We work closely with clients to understand their needs and provide tailored solutions.",
      gradient: "from-primary/20 to-accent/20",
      detailedDescription: "Our team comprises seasoned professionals with extensive experience in medical equipment manufacturing, healthcare infrastructure design, and hospital operations. We have engineers with specialized knowledge in medical gas systems, HVAC for healthcare facilities, and infection control protocols. Our design team works closely with medical professionals to understand workflow requirements and create solutions that enhance operational efficiency. We continuously invest in training and development to stay updated with the latest healthcare technologies and international standards.",
      keyPoints: [
        "Experienced engineers and healthcare specialists",
        "In-depth understanding of hospital workflows",
        "Specialized knowledge in medical infrastructure",
        "Continuous professional development programs",
        "Collaborative approach with medical professionals",
        "Proven track record with 500+ successful installations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-elegant opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Why Choose <span className="text-gradient">Us?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Discover what sets Modular MED Solutions apart as Pakistan's
              premier medical equipment manufacturer
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${reason.gradient} backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedReason(reason)}
              >
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {reason.icon}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Animated Background Element */}
                <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                4+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                12
              </div>
              <div className="text-muted-foreground">All Projects</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                9
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us like our many satisfied clients who have chosen Modular MED
              Solutions for their medical infrastructure needs.
            </p>
            <Link to="/locate-us">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-elegant hover:shadow-glow">
                Get Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Detailed Popup Dialog */}
      <Dialog open={!!selectedReason} onOpenChange={() => setSelectedReason(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedReason && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  {selectedReason.icon}
                  {selectedReason.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedReason.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="bg-gradient-subtle p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Deep Dive into Our {selectedReason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedReason.detailedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedReason.keyPoints?.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Link to="/locate-us">
                    <Button className="bg-gradient-primary">
                      Get Consultation
                    </Button>
                  </Link>
                  <Button onClick={() => setSelectedReason(null)} variant="outline">
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WhyChooseUs;
