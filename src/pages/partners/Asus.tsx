import { Layout } from "@/components/Layout";
import { ArrowRight, Building2, Gamepad2, GraduationCap, Laptop, Monitor, Palette, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Asus = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const benefits = [
    {
      icon: Shield,
      label: "CERTIFIED ASUS EXPERTISE",
      description: "Official Asus authorized reseller in India. Get 100% genuine Asus products with full manufacturer warranty, direct support, and the latest updates."
    },
    {
      icon: Laptop,
      label: "CUSTOMIZED IT SOLUTIONS",
      description: "We help businesses choose the right Asus solutions based on specific use cases and industry needs."
    },
    {
      icon: Users,
      label: "COMPETITIVE PRICING",
      description: "Access to exclusive Asus deals, commercial pricing, and value-added bundles."
    },
    {
      icon: Monitor,
      label: "END-TO-END SUPPORT",
      description: "From consultation and purchase to installation and post-sales service, we offer full lifecycle support."
    },
  ];

  const solutions = [
    {
      title: "ROG & TUF Gaming Series",
      description: "High-performance gaming laptops and desktops with advanced cooling, dedicated GPUs, and immersive displays for serious gamers.",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80"
    },
    {
      title: "Business Laptops",
      description: "Lightweight, secure, and enterprise-ready laptops, perfect for remote work, corporate use, and IT departments.",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80"
    },
    {
      title: "All-in-One PCs",
      description: "Space-saving systems designed for professional workspaces—offering clean aesthetics and strong performance.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    },
    {
      title: "Creator Series",
      description: "Optimized for graphic design, video editing, and 3D modeling with high-resolution displays and robust memory and graphics support.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    },
  ];

  const industries = [
    {
      icon: GraduationCap,
      title: "Education & Research",
      description: "Affordable, long-lasting devices for institutions, faculty, and students."
    },
    {
      icon: Building2,
      title: "Small & Medium Enterprises (SMEs)",
      description: "Reliable business laptops and desktops with enterprise-grade security."
    },
    {
      icon: Palette,
      title: "Creative Professionals",
      description: "Precision tools for content creators, designers, and developers."
    },
    {
      icon: Gamepad2,
      title: "Gaming and eSports",
      description: "Powerful devices for uninterrupted gameplay and streaming."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Asus Authorized Partner<br />
              in India
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Innovate Your Business with ASUS Technology
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              Looking for top-tier performance, reliability, and future-ready technology? Sniper Systems & Solutions,
              an official Asus authorized partner in India, offers a full suite of Asus business, gaming, and creator
              solutions. Whether you're upgrading your office with Asus business laptops, building a performance-heavy
              gaming setup with ROG series, or empowering your creative team with the Asus Creator Series, we deliver
              technology built for results.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1600&q=80"
                alt="Asus Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">ASUS AUTHORIZED PARTNER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Partnership Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              About Our<br />Partnership
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                ABOUT OUR<br />PARTNERSHIP
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Asus is globally known for pioneering breakthroughs in laptops, desktops, gaming rigs, and creator tools.
                With a focus on high-speed processors, advanced graphics, and reliable hardware, Asus empowers users across
                all industries.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                At Sniper Systems & Solutions, we proudly partner with Asus—a globally recognized leader in technology
                innovation. As an official Asus reseller in India, we deliver cutting-edge products and tailored IT solutions
                that meet the demands of modern enterprises, creative professionals, and gamers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:col-start-2">
              <p className="text-lg text-gray-800 leading-relaxed">
                With Sniper Systems, you get access to genuine Asus products, dedicated support, and the latest in computing
                innovation—all from a trusted technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose Sniper Systems<br />for Your Organization?
            </h2>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {benefit.label}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Explore our<br />Asus Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Industries<br />We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="space-y-4 pb-8 border-b border-gray-700 last:border-0">
                <div className="flex items-center gap-4">
                  <industry.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Performance<br />meets innovation
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1600&q=80"
              alt="Asus Technology Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Have an idea?<br />We make it happen
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            TELL US
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

export default Asus;
