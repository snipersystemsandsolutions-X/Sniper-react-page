import { Layout } from "@/components/Layout";
import { ArrowRight, Film, Palette, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MediaEntertainment = () => {
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
      title: "Video Editing & Animation Workstations",
      description: "Powerhouse workstations engineered for demanding video editing and 3D animation workflows. Built with professional-grade components to handle 4K, 8K, and high frame rate content without compromise, ensuring smooth playback and rapid rendering."
    },
    {
      title: "High-Resolution Displays & Color Accuracy Tools",
      description: "Cinema-grade displays with exceptional color accuracy and HDR support for precise color grading and content review. Calibrated monitors that ensure your creative vision translates perfectly from screen to final delivery."
    },
    {
      title: "Post-Production & Creative Software",
      description: "Complete suite of industry-standard software from Adobe, Autodesk, Unity, and leading creative platforms. Everything you need for editing, motion graphics, visual effects, color grading, and audio post-production in one integrated ecosystem."
    },
    {
      title: "Collaboration & Remote Review Tools",
      description: "Cloud-based collaboration platforms and secure remote review tools that keep creative teams connected and projects moving forward. Real-time feedback, version control, and seamless asset sharing across distributed production environments."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      label: "LIGHTNING-FAST RENDERING",
      description: "NVIDIA RTX graphics and high-performance processors deliver the rendering speed your deadlines demand. Cut render times in half and iterate faster with workstations purpose-built for creative professionals."
    },
    {
      icon: Film,
      label: "STORYBOARD TO SCREEN",
      description: "End-to-end solutions that support your entire creative pipeline, from pre-visualization and shooting to editing, color grading, and final delivery. Every tool optimized for seamless creative workflows."
    },
    {
      icon: Palette,
      label: "CREATIVE FREEDOM, TECHNICAL POWER",
      description: "Hardware and software that never gets in the way of creativity. Reliable, powerful systems that handle the technical complexity so your team can focus on storytelling and artistic vision."
    },
    {
      icon: Users,
      label: "LIVE COLLABORATION ENABLED",
      description: "Real-time collaboration tools and cloud infrastructure that keep remote teams in sync. Review sessions, asset sharing, and project coordination that work as smoothly as being in the same studio."
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
              Creative Power Meets<br />
              Technical Precision
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Sniper supports media houses, production studios, and creative agencies with cutting-edge tools
              for editing, rendering, animation, and live collaboration. We help content creators and studios
              work faster and smarter—from storyboard to screen.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80"
                alt="Media Production Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">MEDIA & ENTERTAINMENT</span>
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
              Why Creative Teams<br />Choose Sniper
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
            Where creativity<br />comes alive
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80"
              alt="Creative Studio"
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
              Empowering Creators<br />Across Industries
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                FROM STORYBOARD<br />TO SCREEN
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you're a boutique creative agency or a large-scale production house, we provide the
                technology backbone that transforms ideas into compelling visual stories that captivate audiences.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our media and entertainment solutions combine raw computing power, color-accurate displays,
                professional software, and collaborative tools to create an environment where creativity flows
                uninterrupted and deadlines are met with confidence.
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
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">300+</div>
                <p className="text-gray-600 text-lg">Creative Studios</p>
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
              Ready to elevate<br />your creative work?<br />Let's talk
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            GET IN TOUCH
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

export default MediaEntertainment;
