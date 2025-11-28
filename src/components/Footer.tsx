import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Support", href: "/support" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const solutionsLinks = [
  { name: "IT Infrastructure", href: "/solutions/it-infrastructure" },
  { name: "Managed IT Services", href: "/solutions/managed-it-services" },
  { name: "IT Consulting", href: "/solutions/it-consulting" },
  { name: "AV Solutions", href: "/solutions/av-solutions" },
  { name: "Networking Solutions", href: "/solutions/networking-solutions" },
  { name: "Device Deployment", href: "/solutions/device-deployment-mdm" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
             <div className="flex items-center gap-2">
  <a href="https://sniperindia.com/" target="_blank" rel="noopener noreferrer">

      <img
        src="public/assets/sniper-logo-neww.png"   // change to your actual logo path
        alt="Logo"
        className="w-15 h-10 "
      />

  </a>
</div>


            </div>
            <p className="text-secondary/80 text-sm leading-relaxed">
              Sniper Systems and Solutions Pvt. Ltd. is a comprehensive enterprise IT solutions provider,
              dedicated to delivering customized services that strategically position your business for future readiness.
            </p>
            <div className="flex items-start gap-2 text-sm text-secondary/70">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Solutions</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Get in Touch</h3>
            <div className="space-y-3">
              <a href="mailto:enquiry@sniperindia.com" className="flex items-center gap-2 text-sm text-secondary/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                enquiry@sniperindia.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-secondary/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </a>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary text-sm inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-secondary/60">
            © 2025 Sniper Systems and Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
