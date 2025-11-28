import { Layout } from "@/components/Layout";
import { ArrowRight, Box, Cloud, Layers, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AEC = () => {
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

  const offerings = [
    {
      title: "CAD/BIM Workstations & Laptops",
      description: "High-performance workstations and laptops engineered for demanding CAD and BIM applications. Purpose-built for architects and engineers who require reliable computing power for complex 3D modeling and rendering tasks."
    },
    {
      title: "Design & Visualization Software",
      description: "Industry-leading software solutions from Autodesk, Adobe, and Unity. Complete toolsets for architectural design, structural engineering, 3D visualization, and immersive presentations that bring your projects to life."
    },
    {
      title: "Cloud Storage & Project Collaboration Tools",
      description: "Secure cloud infrastructure and collaboration platforms that enable seamless project coordination across distributed teams. Access your designs and documents anywhere, anytime, with enterprise-grade security."
    },
    {
      title: "Large Format Monitors & Displays",
      description: "Professional-grade displays with exceptional color accuracy and resolution for detailed design work. Experience your projects in stunning clarity with monitors optimized for CAD, BIM, and visualization workflows."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      label: "HIGH-PERFORMANCE DESIGN TOOLS",
      description: "Purpose-built workstations powered by NVIDIA professional graphics and Intel processors deliver the performance your design teams demand for complex modeling and simulation tasks."
    },
    {
      icon: Layers,
      label: "STREAMLINED WORKFLOWS",
      description: "Integrated solutions that connect design, collaboration, and visualization tools into cohesive workflows, reducing friction and accelerating project timelines from concept to completion."
    },
    {
      icon: Cloud,
      label: "REMOTE PROJECT EXECUTION",
      description: "Cloud-enabled infrastructure and secure remote access solutions ensure your teams can collaborate effectively from anywhere, maintaining productivity across distributed work environments."
    },
    {
      icon: Box,
      label: "BIM & 3D MODELING EXPERTISE",
      description: "Specialized hardware and software configurations optimized for Building Information Modeling and advanced 3D modeling applications, ensuring smooth operation even with the largest project files."
    }
  ];

  const trustedBrands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
    { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Building Tomorrow<br />
              with Precision IT
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Sniper Systems & Solutions empowers AEC firms with high-performance design tools, workstations,
              and collaboration platforms that streamline workflows, boost creativity, and support remote project
              execution. Whether it's BIM, 3D modeling, or simulation, our solutions are built for architects,
              engineers, and builders shaping the future.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
                alt="Architecture and Engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">AEC SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Key Offerings
            </h2>
          </div>

          <div className="space-y-16">
            {offerings.map((offering, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {offering.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose<br />Our AEC Solutions
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

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Precision meets<br />innovation
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"
              alt="Design and Engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Powering AEC Firms<br />Across India
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                EMPOWERING ARCHITECTS,<br />ENGINEERS & BUILDERS
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                From small architectural studios to large engineering firms, we provide the technology infrastructure
                that enables creative teams to push boundaries and deliver exceptional projects.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our AEC solutions combine cutting-edge hardware, professional software, and cloud collaboration tools
                to create an ecosystem where innovation thrives and projects come to life with unprecedented efficiency.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">1800+</div>
                <p className="text-gray-600 text-lg">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">500+</div>
                <p className="text-gray-600 text-lg">AEC Firms Served</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Trusted Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
            {trustedBrands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={brand.logo} alt={brand.name} className="h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to build<br />the future?<br />Let's connect
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            GET STARTED
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

export default AEC;
