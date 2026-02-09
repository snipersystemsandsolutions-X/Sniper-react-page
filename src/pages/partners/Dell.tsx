import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Database, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dell = () => {
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

  const partnerBenefits = [
    {
      icon: CheckCircle,
      label: "EXPERT CONSULTATION",
      description: "Our certified Dell specialists provide in-depth consultations to understand your business requirements and recommend the perfect solutions for your organization."
    },
    {
      icon: Zap,
      label: "SMOOTH IMPLEMENTATION",
      description: "From initial setup to full deployment, we ensure seamless integration of Dell products into your existing infrastructure with minimal disruption."
    },
    {
      icon: Shield,
      label: "COMPREHENSIVE SUPPORT",
      description: "Round-the-clock support and maintenance services to keep your Dell systems running at peak performance, backed by our team of experts."
    },
    {
      icon: Database,
      label: "FLEXIBLE LICENSING",
      description: "Customized licensing solutions and financing options that align with your budget and business growth plans, ensuring maximum ROI."
    },
  ];

  const dellBenefits = [
    { title: "Scalable Solutions", description: "Dell products grow with your business, from startups to global enterprises, offering solutions that scale seamlessly as your needs evolve." },
    { title: "Reliability and Performance", description: "Industry-leading uptime, powerful processing capabilities, and robust build quality ensure your business operations never miss a beat." },
    { title: "Future-Ready IT", description: "Stay ahead with cutting-edge technology designed for tomorrow's challenges, including AI-ready infrastructure and next-gen computing power." },
    { title: "Enhanced Security", description: "Built-in security features, hardware-level protection, and enterprise-grade encryption safeguard your critical business data." },
    { title: "Seamless Integration", description: "Dell solutions integrate effortlessly with existing systems, cloud platforms, and enterprise applications for unified workflows." },
  ];

  const solutions = [
    {
      title: "Workforce Solutions",
      items: [
        "Latitude laptops for mobile professionals and remote teams",
        "Precision workstations for demanding creative and technical workloads",
        "OptiPlex desktops for reliable everyday business computing"
      ]
    },
    {
      title: "Server and Data Center Solutions",
      items: [
        "PowerEdge servers for scalable computing power",
        "EMC storage solutions for enterprise data management",
        "Hyperconverged infrastructure for simplified IT operations"
      ]
    },
    {
      title: "Cloud and Virtualization Solutions",
      items: [
        "Dell Cloud platforms for flexible hybrid cloud deployments",
        "VMware virtualization for optimized resource utilization",
        "Software-defined infrastructure for agile IT environments"
      ]
    },
    {
      title: "Networking Solutions",
      items: [
        "High-performance switches and routers for enterprise networks",
        "Network security appliances for threat protection",
        "SD-WAN solutions for optimized connectivity"
      ]
    },
    {
      title: "Security Solutions",
      items: [
        "Endpoint security and threat detection systems",
        "Data protection and backup solutions",
        "Compliance and governance tools for regulatory requirements"
      ]
    },
  ];

  const industries = [
    {
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      description: "Secure, compliant IT solutions for patient care and medical data management."
    },
    {
      title: "Education",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      description: "Empowering learning with technology that scales from classrooms to campuses."
    },
    {
      title: "Finance",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
      description: "High-performance, secure systems for banking and financial services."
    },
    {
      title: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      description: "Robust infrastructure supporting automation, IoT, and smart manufacturing."
    },
    {
      title: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      description: "Point-of-sale systems and retail management solutions for seamless operations."
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
              Dell for Business:<br />
              Empowering Enterprises with<br />
              Cutting-Edge Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              In today's fast-paced digital landscape, businesses need technology that enhances productivity,
              strengthens security, and scales seamlessly. Dell for Business offers a comprehensive suite of
              high-performance solutions, including laptops, desktops, servers, storage, and enterprise-grade
              IT infrastructure. As a Dell Preferred Partner, Sniper India delivers tailored B2B solutions to
              meet the unique needs of businesses across industries. We ensure smooth integration, expert support,
              and measurable results to help your organization thrive in a competitive world.
            </p>
          </div>

          {/* Main Video/Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=1600&q=80"
                alt="Dell Technology Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">DELL PREFERRED PARTNER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Partner with<br />Sniper for Dell Solutions?
            </h2>
          </div>

          <div className="space-y-12">
            {partnerBenefits.map((benefit, index) => (
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

      {/* Benefits Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Benefits of Using<br />Dell Products
            </h2>
          </div>

          <div className="space-y-16">
            {dellBenefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {benefit.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
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
              Transforming Businesses<br />with Dell Solutions
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {solution.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="text-lg text-gray-800 leading-relaxed flex items-start">
                        <span className="text-gray-900 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Industries<br />We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {industry.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
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

export default Dell;
