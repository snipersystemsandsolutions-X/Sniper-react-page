import { Layout } from "@/components/Layout";
import { ArrowRight, DollarSign, Leaf, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ITAssetDisposal = () => {
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

  const disposalServices = [
    {
      title: "E-Waste Management",
      description: "Reduce your environmental footprint with our certified e-waste management services. Sniper Systems ensures that your retired electronics are disposed of in accordance with national and international environmental regulations. We handle everything from collection and sorting to responsible recycling, reducing landfill impact and promoting a greener future."
    },
    {
      title: "Switcher Program (Only for Apple)",
      description: "Upgrade your IT infrastructure effortlessly with our Switcher Program. We streamline the transition from outdated devices to new systems—managing removal, secure data wiping, and setup of new equipment. A hassle-free swap designed to keep your operations running smoothly with zero downtime."
    },
    {
      title: "Upgrade Program (Only for Apple)",
      description: "Stay ahead with flexible hardware/software upgrades. Sniper Systems provides planning, deployment, and disposal—ensuring maximum ROI and minimal disruption."
    },
    {
      title: "Buyback Program",
      description: "Turn outdated tech into cash. We assess the resale value of used IT equipment and offer competitive rates while handling secure and compliant processing."
    },
    {
      title: "Trade-In Program",
      description: "Exchange aging IT assets for credit toward new purchases. Unlock value from retired devices and reinvest in modern, efficient technology solutions."
    },
  ];

  const processSteps = [
    "Inspection",
    "Quote and Negotiation",
    "Customer Invoice",
    "Assets Pickup",
    "Payments",
    "Certificates"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      label: "CERTIFIED DATA DESTRUCTION",
      description: "Industry-leading data security protocols ensure complete and certified destruction of sensitive information from all retired devices."
    },
    {
      icon: Leaf,
      label: "ECO-FRIENDLY DISPOSAL PRACTICES",
      description: "Partnered with certified recyclers to minimize environmental impact and promote sustainable technology lifecycle management."
    },
    {
      icon: TrendingUp,
      label: "MAXIMIZED ASSET RECOVERY",
      description: "Our expert assessment and market analysis ensure you receive the highest possible value for your retired IT equipment."
    },
    {
      icon: DollarSign,
      label: "NATIONWIDE PICKUP & LOGISTICS SUPPORT",
      description: "Comprehensive logistics solutions across India with secure transportation and professional handling of all IT assets."
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
              Eco-Friendly Disposal of<br />
              Outdated IT Equipment
            </h1>
            <p className="text-2xl text-gray-600 mb-4 font-medium">
              IT Asset Disposal Plans
            </p>
            <p className="text-xl text-gray-500 mb-8">
              Efficient. Secure. Sustainable.
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Sniper Systems, we understand the importance of managing end-of-life IT assets responsibly. Our comprehensive IT Asset Disposal Plans help organizations minimize e-waste, recover value, and maintain data security—all while supporting sustainable technology practices.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
                alt="IT Asset Disposal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">SUSTAINABLE IT DISPOSAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Maximizing Value Through<br />Secure IT Asset Disposal
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                WHY OUR IT ASSET DISPOSAL PLANS ARE<br />THE RIGHT CHOICE FOR YOUR BUSINESS
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                In today's fast-paced technology environment, managing the lifecycle of IT assets is crucial for both security and sustainability. Our disposal plans are designed to maximize value recovery while ensuring complete data security and environmental compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disposal Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {disposalServices.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Leaf className="w-16 h-16 mx-auto mb-8 text-white" />
            <h2 className="text-6xl md:text-7xl font-semibold mb-12 leading-tight">
              Commitment to<br />Sustainability
            </h2>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-xl text-gray-200 leading-relaxed">
              At Sniper, sustainability is at the heart of our IT asset disposal practices. We use environmentally responsible processes that minimize e-waste, reduce carbon footprint, and promote reuse and recycling.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed">
              We partner with certified recyclers and ensure data-safe repurposing of hardware to help clients meet their ESG goals.
            </p>
            <p className="text-xl text-white font-medium leading-relaxed pt-6">
              Choosing Sniper means choosing a smarter, greener approach to retiring IT assets.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-semibold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step}
                  </h3>
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
            Responsible disposal<br />meets innovation
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
              alt="Sustainable Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose<br />Sniper Systems?
            </h2>
          </div>

          <div className="space-y-12">
            {whyChooseUs.map((item, index) => (
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

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to dispose<br />responsibly?<br />Let's talk
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

export default ITAssetDisposal;
