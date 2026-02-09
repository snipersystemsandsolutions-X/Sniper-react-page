import { Layout } from "@/components/Layout";
import { ArrowRight, Cloud, LineChart, Shield, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ITConsulting = () => {
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

  const services = [
    {
      title: "IT Assessment & Audits",
      description: "Evaluate existing infrastructure, security, applications, and workflows to identify bottlenecks, risks, and opportunities."
    },
    {
      title: "IT Strategy & Roadmapping",
      description: "Define a scalable, cost-effective, and future-ready IT roadmap aligned to business priorities."
    },
    {
      title: "Infrastructure Modernization",
      description: "Evolve IT infrastructure from on-prem to hybrid to fully cloud-native, matching modern workloads and user expectations."
    },
    {
      title: "Cloud & Virtualization Consulting",
      description: "Guide transition to cloud environments — public, private, or hybrid — ensuring performance, security, and cost optimization."
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Risk assessments, data protection strategies, compliance audits, and recommendations aligned to industry standards."
    },
    {
      title: "CIO Advisory Services",
      description: "Virtual CIO services providing strategic guidance on IT investments, architecture, and vendor management for growing enterprises without in-house tech leadership."
    }
  ];

  const whyChoose = [
    {
      icon: Target,
      label: "15+ YEARS IN ENTERPRISE IT",
      description: "Over a decade and a half of proven experience delivering IT consulting services across diverse industries and business models."
    },
    {
      icon: Shield,
      label: "CERTIFIED CONSULTANTS",
      description: "Our team holds certifications across Apple, Microsoft, Cisco, AWS, and more, ensuring expert-level guidance on every engagement."
    },
    {
      icon: LineChart,
      label: "BUSINESS-FIRST APPROACH",
      description: "We align technology decisions with real business outcomes, ensuring every IT investment drives measurable value and growth."
    },
    {
      icon: Users,
      label: "INDEPENDENT & BRAND-AGNOSTIC",
      description: "Our recommendations are unbiased and tailored to your needs, not influenced by vendor partnerships or product quotas."
    },
    {
      icon: Cloud,
      label: "PROVEN SUCCESS ACROSS ALL SCALES",
      description: "From fast-growing startups to SMBs and large enterprises, we've helped organizations of all sizes achieve IT excellence."
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
              Transforming Businesses with<br />
              Expert IT Consulting
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Strategic Technology Consulting to Drive Business Transformation
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Sniper, we help organizations make smarter IT decisions. With over two decades of experience in enterprise technology, our IT consulting services are designed to align your IT strategy with your business goals. Whether you're scaling fast, modernizing legacy systems, or migrating to the cloud — we bring clarity, strategy, and execution to your IT roadmap.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
                alt="IT Consulting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">IT CONSULTING SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our IT Consulting<br />Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="grid grid-cols-1 gap-6 items-start pb-12 border-b border-gray-300"
    >
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {service.title}
      </h3>

      <p className="text-lg text-gray-800 leading-relaxed">
        {service.description}
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center w-fit px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
      >
        Get started
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
            Strategy meets<br />execution
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
              alt="IT Strategy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why choose<br />Sniper India?
            </h2>
          </div>

          <div className="space-y-12">
            {whyChoose.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {item.label}
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

      {/* Process Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our consulting<br />approach
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                TAILORED, STRATEGIC,<br />AND RESULTS-DRIVEN
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Every business is unique, and so are its IT challenges. Our consulting methodology begins with a deep understanding of your business objectives, current technology landscape, and future ambitions.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We don't believe in cookie-cutter solutions. From discovery to implementation, our consultants work as an extension of your team, providing <strong>actionable insights, strategic roadmaps, and hands-on support</strong> to ensure successful outcomes.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">500+</div>
                <p className="text-gray-600 text-lg">Consulting Projects</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">200+</div>
                <p className="text-gray-600 text-lg">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-lg">Years of Expertise</p>
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
              Ready to transform<br />your IT?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            LET'S TALK
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

export default ITConsulting;
