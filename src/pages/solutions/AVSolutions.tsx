import { Layout } from "@/components/Layout";
import { ArrowRight, Mic, Monitor, Radio, Settings, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AVSolutions = () => {
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

  const whyChooseSniper = [
    {
      icon: Monitor,
      title: "Pioneers in AV Solutions for Conference Rooms",
      description: "Our expertise ensures your workspace is equipped with the latest technology for seamless communication."
    },
    {
      icon: Settings,
      title: "Customized Corporate AV Solutions",
      description: "We understand the unique needs of businesses and deliver solutions tailored to your goals."
    },
    {
      icon: Mic,
      title: "High-Quality Audio Solutions",
      description: "Experience crystal-clear audio with advanced noise-canceling microphones, immersive sound systems for effective communication."
    },
    {
      icon: Wifi,
      title: "Seamless Integration",
      description: "Our AV infrastructures integrate smoothly with existing systems for a unified experience."
    },
    {
      icon: Radio,
      title: "End-to-End Support",
      description: "From consultation to deployment and maintenance, we support you at every step."
    }
  ];

  const expertise = [
    {
      title: "AV Solutions for Conference Rooms",
      description: "Transform your conference rooms with state-of-the-art AV solutions."
    },
    {
      title: "Corporate AV Solutions",
      description: "Integrated corporate AV solutions that boost productivity and collaboration."
    },
    {
      title: "Smart Meeting Rooms",
      description: "High-definition video conferencing, intuitive control interfaces, adaptive lighting."
    },
    {
      title: "Seamless Video Walls",
      description: "Stunning video walls for control rooms, events, retail spaces."
    },
    {
      title: "Experience Centres",
      description: "Immersive, interactive experience centers for showcasing products/services."
    },
    {
      title: "Cafeteria Town Halls",
      description: "Modern large-scale displays and audio systems for impactful events."
    },
    {
      title: "Digital Signage & Display Solutions",
      description: "Dynamic signage for corporate lobbies, retail, and events."
    },
    {
      title: "Centralized Control Room",
      description: "Manage audio, video, lighting, and environment from one interface."
    }
  ];

  const industries = [
    { name: "Architecture, Engineering & Construction (AEC)", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { name: "Software as a Service (SaaS)", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
    { name: "Media and Entertainment", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80" },
    { name: "AR/VR/MR/XR", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Creating a better<br />
              AV Solutions
            </h1>

            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-6">
              Choose Sniper Systems for best Audio and Video Solutions
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Elevate Your Work Environment with Sniper Systems and Solutions
            </p>
          </div>

          {/* Main Video/Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
                alt="AV Solutions Conference Room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">AV SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About AV Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Modern AV Technology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Explore cutting-edge AV Infra Design and Audio-Video Solutions with Sniper India, your trusted partner for innovative technology integration.
                </p>
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Elevate your audio and video experiences with our expert solutions tailored to your unique needs. Discover unparalleled quality and seamless integration for a dynamic and immersive AV experience.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sniper Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose Sniper<br />For Your Digital Workspace
            </h2>
          </div>

          <div className="space-y-12">
            {whyChooseSniper.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {item.title}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our Expertise in<br />AV Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
  {expertise.map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-1 gap-6 items-start pb-12 border-b border-gray-300"
    >
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {item.title}
      </h3>

      <p className="text-lg text-gray-800 leading-relaxed">
        {item.description}
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center w-fit px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
      >
        Learn more
      </Link>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Innovation<br />meets excellence
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1600&q=80"
              alt="AV Technology Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="min-h-screen bg-black text-white flex rounded-[4rem] mx-6 my-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Industries<br />We Serve
            </h2>
            <div className="w-full h-px bg-gray-700 my-8"></div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider leading-tight mb-8">
              EMPOWERING BUSINESSES<br />ACROSS SECTORS
            </h3>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 border-2 border-gray-700 rounded-full bg-gray-900 text-white font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="hidden lg:block w-1/2 px-20 py-20 space-y-6 overflow-y-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <img src={industry.image} alt={industry.name} className="w-full h-64 object-cover" />
              <div className="h-16 flex items-center justify-center p-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why We're Top Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Why We're Among the Top<br />AV Solution Providers in India
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                EXCELLENCE IN<br />AV INFRASTRUCTURE DESIGN
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our commitment to innovation, customer satisfaction, and AV infrastructure design makes us a trusted choice. From conference room AV solutions to seamless video walls, we deliver unmatched quality and value.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Sniper Systems and Solutions</strong> stands at the forefront of AV technology, combining cutting-edge solutions with deep industry expertise to transform how businesses communicate and collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to<br />transform your<br />workspace?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            CONTACT US
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

export default AVSolutions;
