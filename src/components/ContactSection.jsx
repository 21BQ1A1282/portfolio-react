import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
              <p className="text-lg hover:text-pink-400 transition-colors">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">
              Pages
            </h4>
            <ul className="space-y-2 hover:text-pink-400 transition-colors">
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
            <ul className="space-y-3 hover:text-pink-400 transition-colors">
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

        {/* Ready to Start a Project Section */}
        <div className="text-center mt-16 fade-in-up animate" style={{ animationDelay: "0.6s" }}>
          <div className="p-8 rounded-lg max-w-2xl mx-auto border border-white/10 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance opportunities and exciting new projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:madhavarapu.saimanikanta@gmail.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none h-11 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              
              <a
                href="https://wa.me/919014465918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none h-11 rounded-md bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};