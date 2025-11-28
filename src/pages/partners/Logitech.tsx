import { Layout } from "@/components/Layout";
import { ArrowRight, Building2, GraduationCap, Headphones, Heart, Palette, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Logitech = () => {
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
      icon: Building2,
      label: "CERTIFIED DEPLOYMENT ACROSS INDUSTRIES",
      description: "We ensure smooth implementation of Logitech products tailored to specific industry requirements."
    },
    {
      icon: Video,
      label: "PROVEN EXPERIENCE IN HYBRID WORK ENABLEMENT",
      description: "We help organizations transform their communication infrastructure to support flexible, hybrid work environments."
    },
    {
      icon: Headphones,
      label: "DEDICATED AFTER-SALES SERVICE AND TECHNICAL SUPPORT",
      description: "Our support team provides ongoing assistance to keep your Logitech solutions performing at their best."
    },
  ];

  const solutions = [
    {
      title: "Video Conferencing Systems",
      description: "Logitech video collaboration tools bring HD-quality video and clear audio to conference rooms of all sizes.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    },
    {
      title: "Business Webcams and Headsets",
      description: "Equip your teams with professional webcams and noise-cancelling headsets ideal for remote and hybrid work environments.",
      image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=800&q=80"
    },
    {
      title: "Meeting Room Solutions",
      description: "Deploy complete Logitech room solutions integrated with Microsoft Teams, Zoom, and Google Meet for consistent user experiences.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      title: "Keyboards, Mice, and Ergonomic Accessories",
      description: "Improve workplace comfort and efficiency with Logitech's range of ergonomic and high-performance input devices.",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
    },
    {
      title: "Logitech Sync for Device Management",
      description: "Remotely monitor, manage, and update all your Logitech video collaboration devices through a single cloud-based platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Logitech Digital Signage Solutions",
      description: "Enhance communication and engagement in workplaces with digital signage systems powered by Logitech's high-quality display and streaming technology.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices and Enterprises",
      description: "Reliable video collaboration tools to support seamless communication across distributed teams."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Enable virtual classrooms with high-quality audio and video for schools, universities, and training centers."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Enhance remote consultation experiences with secure, user-friendly communication solutions."
    },
    {
      icon: Palette,
      title: "Media & Design",
      description: "Support creative professionals with intuitive devices built for performance and flexibility."
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
              Logitech Authorized Partner<br />
              in India
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Integrated Logitech Systems for Modern Businesses
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              Sniper Systems, a trusted Logitech Authorized Reseller in India, offers a complete portfolio of Logitech
              for Business solutions to meet the growing needs of hybrid work and enterprise collaboration. From enterprise
              meeting rooms to individual workstations, we help businesses of all sizes enhance communication and streamline
              collaboration with Logitech's innovative technology.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=80"
                alt="Logitech Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">LOGITECH AUTHORIZED RESELLER</span>
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
                As a certified Logitech partner, Sniper Systems delivers reliable, scalable, and user-friendly collaboration
                tools tailored for modern business environments. Our partnership with Logitech allows us to provide end-to-end
                support, from consultation and deployment to after-sales service.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                With a focus on performance and usability, Logitech solutions enable seamless hybrid work experiences,
                professional-grade video conferencing, and productivity-enhancing peripherals.
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
              Logitech Solutions Offered<br />by Sniper Systems
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
            Collaboration<br />without boundaries
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
              alt="Modern Collaboration"
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
              Have<br />an idea?<br />We make it happen
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

export default Logitech;
