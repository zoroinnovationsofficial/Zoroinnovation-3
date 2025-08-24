import React, { useMemo } from "react";

// Memoized components for better performance
const SocialButton = React.memo(({ src, alt, href = "#" }) => (
  <a
    href={href}
    className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200 hover:scale-105 transform"
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-8 h-8" />
  </a>
));
SocialButton.displayName = "SocialButton";

const FooterLink = React.memo(({ href = "#", children }) => (
  <li>
    <a
      href={href}
      className="hover:text-white transition-colors duration-200 hover:underline"
    >
      {children}
    </a>
  </li>
));
FooterLink.displayName = "FooterLink";

const FooterSection = React.memo(({ title, children, className = "" }) => (
  <div className={className}>
    <h3 className="text-lg font-semibold mb-6 text-white">{title}</h3>
    {children}
  </div>
));
FooterSection.displayName = "FooterSection";

const Footer = React.memo(() => {
  // Memoized static data
  const socialLinks = useMemo(
    () => [
      { src: "/linkedin.svg", alt: "LinkedIn", href: "#" },
      { src: "/twitter.svg", alt: "Twitter", href: "#" },
      { src: "/facebook.svg", alt: "Facebook", href: "#" },
    ],
    []
  );

  const serviceLinks = useMemo(
    () => [
      "Web Development",
      "Custom Software",
      "AI Applications",
      "IT Consulting",
    ],
    []
  );

  const companyLinks = useMemo(
    () => ["About Us", "Our Team", "Careers & Certs", "Contact"],
    []
  );

  const contactInfo = useMemo(
    () => ({
      email: "zoroinnovations@yahoo.com",
      phone: "+919481414295",
      address: {
        line1: "#117 Reddys Colony Street",
        line2: "Thondebhavi, Gowribidanuru Taluk, Chikkaballapur District, KA 561213",
      },
    }),
    []
  );

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-gray-900 text-white py-16 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/zoro_logo_white.png"
                alt="Zoro Innovations Logo"
                className="h-20 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative AI solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4" role="list">
              {socialLinks.map((social, index) => (
                <SocialButton key={`${social.alt}-${index}`} {...social} />
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterSection title="Services">
            <ul className="space-y-3 text-gray-400" role="list">
              {serviceLinks.map((service, index) => (
                <FooterLink key={`service-${index}`}>{service}</FooterLink>
              ))}
            </ul>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <ul className="space-y-3 text-gray-400" role="list">
              {companyLinks.map((link, index) => (
                <FooterLink key={`company-${index}`}>{link}</FooterLink>
              ))}
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <div className="space-y-3 text-gray-400">
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <address className="not-italic">
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
              </address>
            </div>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zoro Innovations. All rights reserved.
          </p>
          <nav
            className="flex space-x-6 mt-4 md:mt-0"
            role="navigation"
            aria-label="Legal"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
