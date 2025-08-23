import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Activity, AlertTriangle, Settings, Shield, Gauge, Zap, CheckCircle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import medicalGasPipelineImg from '@/assets/medical-gas-pipeline.jpg';
import medicalGasPipelineImg2 from '@/assets/medical-gas-pipeline-2.jpg';
import medicalGasPipelineImg3 from '@/assets/medical-gas-pipeline-3.jpg';

const MedicalGasPipelineSystem = () => {
  const features = [
    {
      icon: Activity,
      title: "Life-Sustaining Gas Delivery",
      description: "Safe, uninterrupted delivery of oxygen, nitrous oxide, medical air, and vacuum to critical areas"
    },
    {
      icon: AlertTriangle,
      title: "Advanced Alarm Systems",
      description: "Comprehensive monitoring with visual and audible alarms for pressure levels and system status"
    },
    {
      icon: Settings,
      title: "Pressure Regulation",
      description: "Precise pressure control with regulators, zone valves, and manifold systems for optimal performance"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Designed and tested to meet NFPA 99, HTM 02-01, and other international medical gas standards"
    }
  ];

  const gasTypes = [
    {
      gas: "Medical Oxygen (O₂)",
      description: "High-purity oxygen for respiratory support and emergency resuscitation",
      applications: ["Operating rooms", "ICU units", "Emergency departments", "Patient rooms"],
      specifications: ["99.5% purity minimum", "Pressure: 400-500 kPa", "Dew point: -65°C", "Color code: White/Blue"]
    },
    {
      gas: "Medical Air",
      description: "Clean, dry compressed air for ventilators and pneumatic medical equipment",
      applications: ["Ventilators", "Anesthesia machines", "Pneumatic tools", "CPAP devices"],
      specifications: ["Oil-free compression", "Pressure: 400-500 kPa", "Dew point: -40°C", "Color code: White/Black"]
    },
    {
      gas: "Nitrous Oxide (N₂O)",
      description: "Anesthetic gas for pain management and surgical procedures",
      applications: ["Operating theaters", "Dental procedures", "Pain management", "Pediatric care"],
      specifications: ["99.0% purity minimum", "Pressure: 400-500 kPa", "Moisture: <67 ppm", "Color code: Blue"]
    },
    {
      gas: "Medical Vacuum",
      description: "Reliable suction for surgical procedures and waste removal",
      applications: ["Surgical suction", "Drainage systems", "Laboratory equipment", "Waste evacuation"],
      specifications: ["Vacuum level: -53 kPa", "Flow rate: Variable", "Bacterial filtration", "Color code: Yellow"]
    }
  ];

  const systemComponents = [
    {
      component: "Gas Manifolds",
      description: "Central supply points that distribute medical gases from source to pipeline network",
      features: ["Automatic/manual changeover", "Pressure monitoring", "Reserve supply systems", "Emergency backup"],
      specifications: ["Material: Brass/SS", "Pressure rating: 3000 psi", "Flow capacity: Variable", "Redundancy: Dual supply"]
    },
    {
      component: "Zone Valves",
      description: "Isolation valves that control gas flow to specific areas or departments",
      features: ["Emergency shut-off capability", "Clear position indication", "Lockable in off position", "Area-specific control"],
      specifications: ["Material: Brass", "Operation: Quarter-turn", "Sealing: Metal-to-metal", "Pressure: Up to 2000 psi"]
    },
    {
      component: "Terminal Outlets",
      description: "Patient care connection points for medical gas delivery at point of use",
      features: ["Gas-specific connections", "Self-sealing valves", "Positive engagement", "Easy identification"],
      specifications: ["Material: Brass/Chrome", "Flow rate: 0-120 L/min", "Inlet: 8mm copper", "Standards: AS/NZS 2896"]
    },
    {
      component: "Alarm Panels",
      description: "Monitoring systems that provide real-time status and alert capabilities",
      features: ["Master and area alarms", "Digital pressure displays", "Audio/visual indicators", "Remote monitoring"],
      specifications: ["Display: LED/LCD", "Alarm levels: High/Low", "Power: 24V DC", "Communication: Digital"]
    }
  ];

  const criticalAreas = [
    {
      area: "Operating Rooms",
      requirements: ["Multiple gas outlets per room", "Redundant supply systems", "Individual room isolation", "Emergency backup"],
      gases: ["Oxygen", "Medical Air", "Nitrous Oxide", "Vacuum"]
    },
    {
      area: "Intensive Care Units",
      requirements: ["High flow capacity", "Continuous monitoring", "Patient-specific outlets", "Rapid response capability"],
      gases: ["Oxygen", "Medical Air", "Vacuum"]
    },
    {
      area: "Emergency Departments",
      requirements: ["Immediate availability", "High reliability", "Multiple access points", "Emergency protocols"],
      gases: ["Oxygen", "Medical Air", "Vacuum"]
    },
    {
      area: "Recovery Wards",
      requirements: ["Bedside access", "Flow regulation", "Patient safety features", "Easy maintenance"],
      gases: ["Oxygen", "Medical Air"]
    }
  ];

  const safetyFeatures = [
    "Dual gas detection systems prevent cross-contamination",
    "Emergency shut-off valves for immediate isolation",
    "Pressure relief systems prevent over-pressurization", 
    "Color-coded piping and outlets for gas identification",
    "Redundant supply systems ensure continuous availability",
    "Regular testing and certification protocols",
    "Staff training programs for proper system operation",
    "Comprehensive documentation and maintenance records"
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
                  Medical Gas <span className="text-gradient">Pipeline System</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  The Medical Gas Pipeline System (MGPS) is a centralized network that supplies medical gases such as oxygen, nitrous oxide, medical air, and vacuum to various points in a healthcare facility. The system ensures safe, uninterrupted, and efficient delivery of life-sustaining gases to critical areas like operating rooms, ICUs, and emergency departments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                    System Design
                  </Button>
                  <Button variant="outline" className="px-8 py-3">
                    Compliance Guide
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  <img 
                    src={medicalGasPipelineImg} 
                    alt="Medical Gas Pipeline System" 
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Essential features that ensure patient safety, regulatory compliance, and operational reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-glass border-glass animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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
              System <span className="text-gradient">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional medical gas pipeline installations across healthcare facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in">
              <img 
                src={medicalGasPipelineImg2} 
                alt="Gas Manifold System" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Manifold System</h3>
                <p className="text-sm text-muted-foreground mt-1">Central gas distribution with monitoring systems</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src={medicalGasPipelineImg3} 
                alt="Terminal Outlets" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Terminal Outlets</h3>
                <p className="text-sm text-muted-foreground mt-1">Patient care connection points in ward areas</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src={medicalGasPipelineImg} 
                alt="Complete Installation" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Complete System</h3>
                <p className="text-sm text-muted-foreground mt-1">Fully integrated pipeline network installation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Gas Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Medical <span className="text-gradient">Gas Types</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive range of medical gases for different healthcare applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {gasTypes.map((gas, index) => (
              <Card 
                key={gas.gas}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {gas.gas}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {gas.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                      <div className="space-y-2">
                        {gas.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center gap-3">
                            <Activity className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                      <div className="space-y-2">
                        {gas.specifications.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              System <span className="text-gradient">Components</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential components that ensure reliable gas distribution and monitoring
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {systemComponents.map((component, index) => (
              <Card 
                key={component.component}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10">
                      <Gauge className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {component.component}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {component.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                      <div className="space-y-2">
                        {component.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                      <div className="space-y-2">
                        {Object.entries(component.specifications).map(([key, value], specIndex) => (
                          <div key={specIndex} className="flex justify-between">
                            <span className="text-sm text-muted-foreground">{key}:</span>
                            <span className="text-sm font-medium text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Critical <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized requirements for different healthcare environments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {criticalAreas.map((area, index) => (
              <Card 
                key={area.area}
                className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {area.area}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                      <div className="space-y-2">
                        {area.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Required Gases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.gases.map((gas, gasIndex) => (
                          <span key={gasIndex} className="px-3 py-1 text-xs bg-accent-cyan/10 text-accent-cyan rounded-full">
                            {gas}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-glass border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Safety <span className="text-gradient">Features</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive safety measures that protect patients, staff, and facilities
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Shield className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
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
              Secure Your <span className="text-gradient">Life Support Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ensure the highest standards of patient care with our comprehensive Medical Gas Pipeline Systems, designed for reliability, safety, and regulatory compliance in critical healthcare environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                System Assessment
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Compliance Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalGasPipelineSystem;