import { Layout } from "@/components/Layout";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "OUR OFFICE",
      content: "Chennai, Tamil Nadu, India"
    },
    {
      icon: Phone,
      label: "PHONE",
      content: "+91 (044) 1234 5678"
    },
    {
      icon: Mail,
      label: "EMAIL",
      content: "info@snipersystems.com"
    },
    {
      icon: Clock,
      label: "WORKING HOURS",
      content: "Mon - Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Get in touch with Sniper Systems and Solutions. We're here to help you transform your IT infrastructure
              and drive your business forward with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
                Send us<br />a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-full text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                    placeholder="+91 1234 567 890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-3xl text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-12 py-4 border-2 border-gray-900 rounded-full text-gray-900 font-medium text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
                Get in<br />touch
              </h2>

              <div className="space-y-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="pb-12 border-b border-gray-300 last:border-0">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <info.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Whether you need IT consulting, managed services, or technology infrastructure solutions,
                  our team is ready to help you achieve your business goals.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Reach out today and discover how Sniper Systems can transform your IT operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Visit our<br />office
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
              alt="Office Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black bg-opacity-50 text-white px-6 py-4 rounded-2xl backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wider mb-2">OUR LOCATION</p>
                <p className="text-lg">Sniper Systems and Solutions Pvt. Ltd.<br />Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Have<br />an idea?<br />We make it happen
            </h2>
          </div>
          <Link to="/" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            BACK TO HOME
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </Layout>
  );
};

export default Contact;
