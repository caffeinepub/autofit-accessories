import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'autofit-accessories';

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/generated/logo-autofit.dim_512x512.png" 
                alt="AutoFit Accessories" 
                className="h-10 w-10"
              />
              <span className="font-bold text-lg">
                Auto<span className="text-primary">Fit</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional car accessories fitting and installation services you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: 9892475239</li>
              <li>Email: swamisamarth211125@gmail.com</li>
              <li>Mon-Fri: 8AM - 6PM</li>
              <li>Sat: 9AM - 4PM</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <SiFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <SiX className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground text-center sm:text-right">
            <p>© {currentYear} AutoFit Accessories. All rights reserved.</p>
            <p className="mt-1">
              Built with <Heart className="inline h-4 w-4 text-primary fill-primary" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
