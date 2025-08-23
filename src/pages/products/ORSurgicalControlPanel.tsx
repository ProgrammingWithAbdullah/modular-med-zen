import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Lightbulb, Wind, Stethoscope, AlertTriangle, Gauge, Thermometer, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import orControlPanelImg from '@/assets/or-surgical-control-panel.jpg';
import orControlPanelImg2 from '@/assets/or-surgical-control-panel-2.jpg';
import orControlPanelImg3 from '@/assets/or-surgical-control-panel-3.jpg';

const ORSurgicalControlPanel = () => {
  const controlSystems = [
    {
      icon: Lightbulb,
      title: "General Lighting Control",
      description: "Ability to control and dim the four lighting groups separately with precise intensity adjustment",
      features: ["4-zone lighting control", "0-100% dimming capability", "Memory presets", "Emergency lighting backup"]
    },
    {
      icon: Wind,
      title: "Laminar Flow Lighting Control",
      description: "Ability to control and dim the four laminar flow lighting separately for optimal surgical field illumination",
      features: ["Individual flow control", "Color temperature adjustment", "Shadow-free lighting", "Sterile field optimization"]
    },
    {
      icon: Stethoscope,
      title: "Operation Lamp Control",
      description: "Ability to control and dim three operation lamp heads separately with precision focusing",
      features: ["3-head independent control", "Focus adjustment", "Intensity regulation", "Backup lighting system"]
    },
    {
      icon: AlertTriangle,
      title: "AGSS Control",
      description: "Comprehensive control of Anesthetic Gas Scavenging System for safe gas waste management",
      features: ["Real-time monitoring", "Automatic evacuation", "Leak detection", "Safety alarms"]
    }
  ];

  const medicalGasFeatures = [
    "Gas pressure level miniaturization for five different medical gases",
    "Ability to set low/high limits for five different medical gas pressure alarms",
    "Visual and audible alarms according to gas pressure level",
    "Real-time pressure monitoring and display",
    "Central gas system data communication",
    "Emergency gas supply switching"
  ];

  const climateFeatures = [
    {
      name: "Temperature Monitoring",
      description: "Precise ambient temperature control and monitoring",
      range: "18°C - 26°C"
    },
    {
      name: "Humidity Control",
      description: "Optimal humidity level maintenance for surgical environments",
      range: "45% - 65% RH"
    },
    {
      name: "Differential Pressure",
      description: "Positive pressure maintenance to prevent contamination",
      range: "15-25 Pa"
    },
    {
      name: "HEPA Filter Status",
      description: "Real-time filter condition monitoring and replacement alerts",
      range: "Clean/Dirty Status"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <div className="animate-fade-in">
            <Link 
              to="/products-services" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products & Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  OR/Surgical <span className="text-gradient">Control Panel</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Comprehensive operating room control system managing general lighting, laminar flow, operation lamps, AGSS control, medical gas monitoring, and air conditioning systems. Features advanced automation, real-time monitoring, and integrated alarm systems for optimal surgical environment management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    Request Demo
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Technical Manual
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={orControlPanelImg} 
                    alt="OR Surgical Control Panel" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Systems Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Control <span className="text-gradient">Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Integrated control systems for comprehensive operating room management and safety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {controlSystems.map((system, index) => (
              <Card 
                key={system.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <system.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {system.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {system.description}
                  </p>
                  
                  <div className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Control Panel <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced control interfaces designed for intuitive operation in critical surgical environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={orControlPanelImg2} 
                alt="Main Control Interface" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Main Control Interface</h3>
                <p className="text-sm text-muted-foreground mt-1">Central control hub with multiple system integration</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={orControlPanelImg3} 
                alt="Control Panel Detail" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Detail Control View</h3>
                <p className="text-sm text-muted-foreground mt-1">Close-up of control interfaces and monitoring displays</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={orControlPanelImg} 
                alt="Complete System Overview" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">System Overview</h3>
                <p className="text-sm text-muted-foreground mt-1">Complete control panel installation in operating theater</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Gas System */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Medical Gas <span className="text-gradient">System</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive monitoring and control of medical gas pressure levels with advanced alarm systems
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Gauge className="w-6 h-6 text-accent-cyan" />
                    Monitoring Features
                  </h3>
                  <div className="space-y-4">
                    {medicalGasFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    Alarm Systems
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <h4 className="font-medium text-foreground mb-2">Visual Alarms</h4>
                      <p className="text-sm text-muted-foreground">LED indicators for immediate visual feedback on gas pressure levels</p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10">
                      <h4 className="font-medium text-foreground mb-2">Audible Alarms</h4>
                      <p className="text-sm text-muted-foreground">Adjustable tone alarms with silence and acknowledge functions</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                      <h4 className="font-medium text-foreground mb-2">Central Communication</h4>
                      <p className="text-sm text-muted-foreground">Real-time data transmission to hospital management systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Air Conditioning Control */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Air Conditioning <span className="text-gradient">Control</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced climate control system with comprehensive monitoring and automation capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {climateFeatures.map((feature, index) => (
              <Card 
                key={feature.name}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Thermometer className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {feature.description}
                      </p>
                      <span className="text-xs bg-accent-cyan/10 text-accent-cyan px-2 py-1 rounded-full">
                        {feature.range}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-glass border-glass">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-accent-cyan" />
                    Control Features
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Heater Control</span>
                      <span className="text-primary font-medium">Automatic/Manual</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Fan Speed</span>
                      <span className="text-primary font-medium">Variable Speed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Damper Control</span>
                      <span className="text-primary font-medium">Motorized</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Flow Control</span>
                      <span className="text-primary font-medium">Full/Semi-flow</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    Time & Scheduling
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Time Display</span>
                      <span className="text-primary font-medium">24-hour Format</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Date Display</span>
                      <span className="text-primary font-medium">DD/MM/YYYY</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Scheduling</span>
                      <span className="text-primary font-medium">Programmable</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Data Logging</span>
                      <span className="text-primary font-medium">Continuous</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Master Your <span className="text-gradient">Operating Environment</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the ultimate in surgical environment control with our comprehensive OR/Surgical Control Panel system, designed to enhance safety, efficiency, and precision in critical medical procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                Schedule Demo
              </Button>
              <Button variant="outline" className="px-8 py-3">
                System Integration
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ORSurgicalControlPanel;