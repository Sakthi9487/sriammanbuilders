import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Twitter,
  Instagram,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'Industrial Projects',
    'Renovation Services',
    'Project Management',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/groups/864475214044663/?ref=share&mibextid=NSMWBT' },
    { icon: MessageCircle, href: 'https://wa.me/919894885441' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: 'https://www.instagram.com/selvanathan351?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-gray-300">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-secondary hover:bg-brand-secondary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Section */}
          <div>
            <img
              src="/ammanbuilders_logo.jpg"
              alt="Amman Builders Logo"
              className="h-16 w-auto mb-6 brightness-110 drop-shadow-lg"
            />
            <p className="mb-6 leading-relaxed text-gray-400 text-sm">
              Building india's future with quality construction, innovative
              designs, and exceptional service since 2019.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-brand-secondary text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-4 border-brand-secondary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-brand-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-4 border-brand-secondary pl-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-brand-secondary transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-l-4 border-brand-secondary pl-3">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-brand-secondary mt-0.5 flex-shrink-0"
                  size={16}
                />
                <p>
                  Teachers Colony, Asiriyar Nagar<br />
                  Near Pachal Flyover<br />
                  Tirupattur, Tamilnadu, India-635601</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  className="text-brand-secondary flex-shrink-0"
                  size={16}
                />
                <p>+91 9894885441</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className="text-brand-secondary flex-shrink-0"
                  size={16}
                />
                <p>sriammanbuilders19@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 border-t border-gray-700 py-4 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sri Amman Builders. All rights
            reserved. Developed By <a href="https://rebelitechsolutions.in" className="text-brand-secondary hover:underline">Rebel iTech Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
