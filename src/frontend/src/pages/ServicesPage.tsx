import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Radio, Camera, Lightbulb, Gauge, Speaker, Bluetooth, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Radio,
    title: 'Audio System Installation',
    description: 'Professional installation of car stereos, head units, amplifiers, and complete audio systems. Custom wiring and integration with factory systems.',
  },
  {
    icon: Camera,
    title: 'Camera & Sensor Fitting',
    description: 'Backup cameras, dash cams, 360-degree camera systems, and parking sensors. Expert calibration and seamless integration.',
  },
  {
    icon: Lightbulb,
    title: 'LED & Lighting Upgrades',
    description: 'Interior and exterior LED lighting, underglow kits, headlight upgrades, and custom lighting solutions for enhanced visibility and style.',
  },
  {
    icon: Gauge,
    title: 'Dashboard Accessories',
    description: 'Gauge clusters, digital displays, phone mounts, and dashboard cameras. Clean installation with no damage to your interior.',
  },
  {
    icon: Speaker,
    title: 'Speaker Systems',
    description: 'Premium speaker installation, subwoofer mounting, and sound system optimization for the ultimate audio experience.',
  },
  {
    icon: Bluetooth,
    title: 'Connectivity Solutions',
    description: 'Bluetooth adapters, wireless charging pads, USB ports, and smartphone integration systems for modern connectivity.',
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Car alarms, immobilizers, GPS tracking, and comprehensive security solutions to protect your investment.',
  },
  {
    icon: Zap,
    title: 'Performance Accessories',
    description: 'Performance monitors, boost gauges, and diagnostic tools. Professional installation with proper calibration.',
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From audio upgrades to advanced safety systems, we offer comprehensive installation services 
            for all your car accessory needs. Every installation is performed by certified technicians 
            with attention to detail and quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/30 border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See What You Need?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We offer many more specialized services and custom installations. 
                Contact us to discuss your specific requirements and we'll find the perfect solution.
              </p>
              <a href="/contact" className="text-primary hover:underline font-medium">
                Get in Touch →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
