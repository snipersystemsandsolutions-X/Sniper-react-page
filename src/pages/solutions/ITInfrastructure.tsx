import { Layout } from "@/components/Layout";
import { ArrowRight, Award, Cpu, Globe, Headphones, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ITInfrastructure = () => {
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

  const solutions = [
    {
      title: "End-User Computing",
      description: "We architect and deploy desktop/laptop and productivity platforms that empower employees while simplifying management. Our solutions improve efficiency and user experience."
    },
    {
      title: "Networking & Connectivity",
      description: "We build high-performance LAN/WAN networks and integrated Wi-Fi/telecom environments for fast, secure, reliable connectivity."
    },
    {
      title: "Audio/Visual & Collaboration",
      description: "We integrate AV, UC, conferencing, digital signage, and collaboration systems to enhance communication and teamwork."
    },
    {
      title: "Data Center & Virtualisation",
      description: "We design scalable, resilient data center infrastructures for mission-critical workloads. We guide enterprises through virtualization, automation, and cloud transformation."
    },
    {
      title: "Enterprise Mobility",
      description: "We enable secure remote workforces with device management, connectivity, and collaboration platforms using modern MDM and wireless technologies."
    },
    {
      title: "High Performance Computing (HPC)",
      description: "We deliver HPC solutions for simulations, analytics, AI/ML workloads, and scientific computing — combining CPU/GPU power, storage, and networking."
    },
  ];

  const benefits = [
    {
      icon: Globe,
      label: "NATIONWIDE REACH",
      description: "Pan-India deployment and support for fast, reliable, on-ground service."
    },
    {
      icon: Shield,
      label: "360° COVERAGE",
      description: "Complete end-to-end IT solutions across devices, networking, cloud, security, and AV systems."
    },
    {
      icon: Award,
      label: "PROVEN EXPERTISE",
      description: "15+ years of validated delivery excellence and client satisfaction."
    },
    {
      icon: Cpu,
      label: "CENTER OF EXCELLENCE",
      description: "Advanced technical center focused on wireless, mobility, AV, and security innovations."
    },
    {
      icon: Headphones,
      label: "MANAGED SERVICES",
      description: "Reimagined managed IT services with proactive monitoring, maintenance, support, and performance optimization."
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
              Future-Ready IT Infrastructure<br />
              for Unstoppable Growth
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              Streamline Operations with Sniper's IT Infrastructure Services
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Sniper, we partner with you to design, deploy, and manage robust IT infrastructures that drive business growth. As a 100% business-focused managed IT services provider, our team brings a consultative, strategic approach to every project. We tailor technology solutions to your goals and ensure seamless integration with your operations.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
                alt="IT Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">IT INFRASTRUCTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-lg">Years of Industry Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">1900+</div>
                <p className="text-gray-600 text-lg">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our Comprehensive<br />Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
  {solutions.map((solution, index) => (
    <div
      key={index}
      className="grid grid-cols-1 gap-6 items-start pb-12 border-b border-gray-300"
    >
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {solution.title}
      </h3>

      <p className="text-lg text-gray-800 leading-relaxed">
        {solution.description}
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
            Building the backbone<br />of your digital future
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
              alt="Technology Infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose Sniper<br />IT Infrastructure Services?
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

      {/* Additional Image Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80"
              alt="Infrastructure Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to<br />transform your<br />IT infrastructure?
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

export default ITInfrastructure;
