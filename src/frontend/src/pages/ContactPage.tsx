import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import InquiryForm from '../components/contact/InquiryForm';

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your vehicle? Contact us today for a free consultation and quote. 
            We're here to answer your questions and help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contact Person</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sanjay Utekar
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="tel:9892475239" className="hover:text-primary transition-colors">
                    9892475239
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="mailto:swamisamarth211125@gmail.com" className="hover:text-primary transition-colors">
                    swamisamarth211125@gmail.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  123 Auto Street<br />
                  Workshop District<br />
                  City, State 12345
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Monday - Friday: 8AM - 6PM<br />
                  Saturday: 9AM - 4PM<br />
                  Sunday: Closed
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InquiryForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
