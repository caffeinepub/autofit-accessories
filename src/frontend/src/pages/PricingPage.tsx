import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Pricing for Your Needs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every vehicle and installation is unique. We provide personalized quotes based on your specific requirements, 
            ensuring you get the best value for your investment.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary shadow-glow">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl mb-3">Get Your Custom Quote</CardTitle>
              <CardDescription className="text-lg">
                Contact us today to discuss your project and receive a detailed, no-obligation quote 
                tailored to your vehicle and accessory needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Request a Quote
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Call Us</CardTitle>
              <CardDescription>
                Speak directly with our team for immediate assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="tel:9892475239" 
                className="text-primary hover:underline font-semibold text-lg"
              >
                9892475239
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Email Us</CardTitle>
              <CardDescription>
                Send us your requirements and we'll respond promptly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:swamisamarth211125@gmail.com" 
                className="text-primary hover:underline font-semibold break-all"
              >
                swamisamarth211125@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Visit Us</CardTitle>
              <CardDescription>
                Stop by our workshop for a face-to-face consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Why Custom Pricing */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vehicle-Specific Solutions</h4>
                  <p className="text-sm">
                    Different vehicles require different approaches. We assess your specific make and model 
                    to provide accurate pricing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality Parts Selection</h4>
                  <p className="text-sm">
                    We work with various suppliers and quality levels to match your budget and expectations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Complexity Varies</h4>
                  <p className="text-sm">
                    Installation complexity depends on the accessory type and your vehicle's existing setup.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transparent Estimates</h4>
                  <p className="text-sm">
                    We provide detailed breakdowns so you know exactly what you're paying for.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
