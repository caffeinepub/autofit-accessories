import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AutoFit</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for professional car accessory installation since 2015
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  AutoFit Accessories was founded with a simple mission: to provide car owners with 
                  professional, reliable accessory installation services they can trust. What started 
                  as a small workshop has grown into a full-service installation center, serving 
                  hundreds of satisfied customers every year.
                </p>
                <p>
                  Our team of certified technicians brings decades of combined experience in automotive 
                  electronics, custom fabrication, and vehicle integration. We stay current with the 
                  latest technologies and installation techniques to ensure every job meets the highest 
                  standards of quality and safety.
                </p>
                <p>
                  Whether you're looking to upgrade your audio system, add safety features, or completely 
                  transform your vehicle's interior, we have the expertise and equipment to bring your 
                  vision to life. Every installation is backed by our comprehensive warranty and 
                  satisfaction guarantee.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AutoFit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Certified technicians with years of hands-on experience
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Precision Work</h3>
                <p className="text-muted-foreground">
                  Meticulous attention to detail in every installation
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranty on all parts and labor
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    We never compromise on the quality of our work or the parts we use
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    Honest advice and transparent pricing, always
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Staying ahead with the latest technology and techniques
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
