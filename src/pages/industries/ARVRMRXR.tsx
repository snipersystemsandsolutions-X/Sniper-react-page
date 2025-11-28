import { Layout } from "@/components/Layout";
import { ArrowRight, Globe, Layers, Lightbulb, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ARVRMRXR = () => {
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
      title: "High-End XR Computing Platforms",
      description: "Powerhouse workstations and mobile computing solutions engineered for real-time 3D rendering, physics simulation, and immersive content creation. Built with NVIDIA RTX graphics and cutting-edge processors to handle the most demanding XR applications without compromise."
    },
    {
      title: "Professional XR Peripherals & Headsets",
      description: "Industry-leading AR, VR, and MR headsets and peripherals that deliver precise tracking, high-fidelity visuals, and comfortable extended-use experiences. From standalone devices to tethered professional solutions for every use case."
    },
    {
      title: "Creative & Development Tools",
      description: "Complete ecosystem of software tools from Unity, Unreal Engine, Autodesk, and Adobe for building immersive experiences. Industry-standard development environments, 3D modeling tools, and real-time engines optimized for XR content creation."
    },
    {
      title: "Training & Experiential Solutions",
      description: "End-to-end platforms for immersive training simulations, product visualization, and interactive experiences. Cloud-based deployment and management tools that scale from single-user prototypes to enterprise-wide training programs."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      label: "REAL-TIME SOLUTIONS",
      description: "Low-latency, high-performance computing that powers responsive XR experiences. Hardware configurations optimized for real-time rendering, physics calculations, and seamless interaction in virtual environments."
    },
    {
      icon: Globe,
      label: "ENDLESS OPPORTUNITIES",
      description: "Solutions that span industries from gaming and entertainment to industrial training, product design, and architectural visualization. Technology flexible enough to adapt to your unique XR vision and business objectives."
    },
    {
      icon: Layers,
      label: "DIGITAL TRANSFORMATION PARTNERS",
      description: "Strategic guidance and technical expertise to help you conceptualize, frame, and execute digital transformation initiatives. We understand XR's potential and help you unlock it for competitive advantage."
    },
    {
      icon: Lightbulb,
      label: "INDUSTRY-LEADING TECHNOLOGY",
      description: "Authorized partnerships with global technology leaders ensure you get authentic, supported solutions backed by the best in the industry. We bring together the ecosystem of tools and platforms that power world-class XR experiences."
    }
  ];

  const industries = [
    {
      title: "Media & Entertainment",
      description: "Immersive storytelling, virtual production, and interactive content experiences",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80"
    },
    {
      title: "Architecture & Engineering",
      description: "Virtual walkthroughs, design review, and collaborative spatial planning",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
      title: "Automotive & Manufacturing",
      description: "Product visualization, assembly training, and virtual prototyping",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
    },
    {
      title: "Gaming & E-Learning",
      description: "Immersive gameplay experiences and interactive educational environments",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80"
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
              Immersive Solutions for<br />
              Future-Ready Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Sniper enables businesses and creators to build immersive environments with high-end computing,
              XR peripherals, and industry-leading creative tools. From product design to experiential training,
              we support your AR/VR ambitions with the tech backbone it needs.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=1600&q=80"
                alt="XR Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">AR | VR | MR | XR</span>
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
              Real-time solutions,<br />endless opportunities
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
            Step into<br />the future
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1600&q=80"
              alt="Virtual Reality Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Empowering<br />industry leaders
            </h2>
            <div className="w-full h-px bg-gray-300 mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                DIGITAL TRANSFORMATION<br />ACROSS INDUSTRIES
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We help industry leaders in Media & Entertainment, Architecture & Engineering, Automotive &
                Manufacturing, Gaming & E-Learning to conceptualise, frame and execute their Digital transformation goals.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We are strategic and value added partners for global technology leaders in the industry, bringing
                together hardware, software, and expertise to create immersive experiences that drive business outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
                    {industry.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">1800+</div>
                <p className="text-gray-600 text-lg">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">200+</div>
                <p className="text-gray-600 text-lg">XR Projects Delivered</p>
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
              Ready to build<br />immersive<br />experiences?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            LET'S CREATE
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

export default ARVRMRXR;
