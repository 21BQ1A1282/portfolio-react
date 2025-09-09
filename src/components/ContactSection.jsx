import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Get In{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600">
            Contact
          </span>
        </h2>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Contact Info */}
          <div className="space-y-6 col-span-2">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href="mailto:madhavarapu.saimanikanta@gmail.com"
                className="text-lg hover:text-pink-400 transition-colors"
              >
                madhavarapu.saimanikanta@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href="tel:+919014465918"
                className="text-lg font-semibold hover:text-pink-400 transition-colors"
              >
                +91 9014465918
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-lg text-gray-300">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">
              Pages
            </h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Me", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">
              Social Media
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://x.com/rebuiltWithSai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/saimanikantamadhavarapu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
