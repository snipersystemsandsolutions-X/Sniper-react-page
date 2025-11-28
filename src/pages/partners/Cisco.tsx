import { Layout } from "@/components/Layout";
import { ArrowRight, Network, Shield, Users, Building2, Landmark, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cisco = () => {
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
      label: "CERTIFIED CISCO EXPERTISE",
      description: "Our team is highly trained and certified in Cisco network architecture, cybersecurity, and collaboration technologies."
    },
    {
      icon: Network,
      label: "TAILORED ENTERPRISE SOLUTIONS",
      description: "We design customized Cisco solutions to align with your business goals and compliance needs."
    },
    {
      icon: Users,
      label: "END-TO-END SUPPORT",
      description: "From planning and deployment to ongoing support and scaling, we provide comprehensive service excellence."
    },
  ];

  const solutions = [
    {
      title: "Networking Hardware & Software",
      description: "High-performance routers, switches, wireless controllers, and next-generation firewalls built for secure, uninterrupted connectivity.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      title: "Collaboration Tools",
      description: "Advanced communication platforms like Cisco Webex, enabling efficient video conferencing, messaging, and team collaboration anywhere.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security solutions including advanced threat protection, zero-trust frameworks, and secure access control tailored for hybrid workforces.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "IT & Software Development",
      description: "Enhance network performance and protect critical digital assets."
    },
    {
      icon: Landmark,
      title: "Financial Institutions",
      description: "Achieve regulatory compliance, mitigate risks, and ensure 24/7 infrastructure uptime."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Maintain secure, reliable communication and data access in sensitive environments."
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
              Trusted Cisco Authorized<br />
              Partner in India
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Smarter Networking Starts Here
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              As a Cisco Authorized Partner in India, Sniper Systems & Solutions delivers the full spectrum of Cisco
              networking solutions designed to transform your enterprise connectivity, collaboration, and cybersecurity.
              Whether you're scaling infrastructure or modernizing communication and network management, our Cisco-certified
              solutions guarantee performance, reliability, and future-readiness.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
                alt="Cisco Networking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">CISCO AUTHORIZED PARTNER</span>
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
                Sniper Systems proudly partners with Cisco, the global leader in networking and IT solutions. As a certified
                Cisco authorized partner, we provide industry-leading Cisco enterprise solutions backed by innovation, global
                standards, and unmatched support.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our partnership ensures tailored deployment, seamless integration, and end-to-end service delivery—helping
                businesses across India maximize the benefits of Cisco's advanced technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:col-start-2">
              <p className="text-lg text-gray-800 leading-relaxed">
                Cisco leads the way in developing scalable, secure, and intelligent networking technologies that meet today's
                enterprise demands. From traditional on-premise networks to cloud-managed infrastructures, Cisco enables seamless,
                secure connectivity across locations, devices, and users. Sniper Systems leverages Cisco's innovation to help
                enterprises build secure, agile, and scalable IT environments that support hybrid work, digital transformation,
                and global collaboration.
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
              Cisco Solutions Offered<br />by Sniper Systems
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12 border-b border-gray-300 last:border-0">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
            Enterprise networking<br />that scales with you
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
              alt="Network Infrastructure"
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

export default Cisco;
