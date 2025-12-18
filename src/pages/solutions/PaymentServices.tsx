import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, DollarSign, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentServices = () => {
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

  const paymentServices = [
    {
      title: "Leasing Services",
      description: "Access the latest IT hardware without upfront costs. Our flexible leasing solutions help you reduce CAPEX, improve cash flow, and keep your technology updated with customizable payment terms."
    },
    {
      title: "Finance Services (AFS & More)",
      description: "Partner with premium brand finance programs like Apple Financial Services (AFS) to purchase cutting-edge devices through easy installments with transparent approval processes and pre-approved corporate credit lines."
    },
  ];

  const whyChooseSniper = [
    {
      icon: CheckCircle,
      label: "TRUSTED IT PARTNER",
      description: "With 15+ years of experience in the industry, we bring proven expertise and reliability to every financial solution we offer."
    },
    {
      icon: Zap,
      label: "VENDOR-NEUTRAL ACCESS",
      description: "Access to top global OEMs means you get the best technology options without being locked into a single vendor ecosystem."
    },
    {
      icon: TrendingUp,
      label: "END-TO-END SUPPORT",
      description: "From procurement to deployment, we manage every step of the process, ensuring seamless integration and ongoing support."
    },
    {
      icon: DollarSign,
      label: "TRANSPARENT PRICING",
      description: "Zero hidden charges and straightforward pricing structures mean you always know exactly what you're paying for."
    },
    {
      icon: Users,
      label: "PERSONALIZED SERVICE",
      description: "Quick approvals and dedicated account management ensure you get the attention and flexibility your business deserves."
    },
  ];

  const leasingBenefits = [
    "Access latest devices without upfront cost",
    "Pay monthly / quarterly / annually",
    "Upgrade devices at end of term",
    "Flexible tenure: 12 to 60 months",
    "Setup & maintenance support included"
  ];

  const financeOptions = [
    "Easy EMIs for individuals & companies",
    "Brand-backed programs like AFS",
    "Transparent approval process",
    "Pre-approved corporate credit lines",
    "Bundle devices + accessories + software"
  ];

  const beneficiaries = [
    "Startups scaling fast",
    "Enterprises standardizing hardware",
    "Creative & design teams",
    "Educational institutions",
    "Businesses preferring OPEX over CAPEX"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Empowering Businesses<br />
              with Smarter Payments
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              <strong>Flexible Leasing & Finance Solutions by Sniper</strong>
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Empower your business with the right technology — without the upfront financial burden. Sniper offers tailored leasing and finance services that help organizations acquire the latest IT hardware with flexible, affordable payment options. Whether you need laptops for your growing team or are looking to leverage brand-specific finance options like Apple Financial Services (AFS), we've got you covered.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
                alt="Payment Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">PAYMENT SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sniper Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why choose<br />Sniper?
            </h2>
          </div>

          <div className="space-y-12">
            {whyChooseSniper.map((benefit, index) => (
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

      {/* Payment Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our payment<br />services
            </h2>
          </div>

         <div className="space-y-16">
  {paymentServices.map((service, index) => (
    <div
      key={index}
      className="grid grid-cols-1 gap-6 items-start pb-12 border-b border-gray-300 last:border-0"
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

      {/* Leasing Services Detail Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Leasing Services"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  Simplify IT Procurement with Hassle-Free Leasing
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Sniper provides leasing solutions for laptops, desktops, workstations, servers, and peripherals. Ideal for startups, SMBs, and enterprises. Reduces CAPEX, improves cash flow, and keeps your tech updated.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Key Benefits</h4>
                <ul className="space-y-3">
                  {leasingBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Services Detail Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  Own the Tech You Love — Smarter & Faster
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed">
                  We support Apple Financial Services (AFS) and other finance programs to help you purchase premium devices (MacBooks, iPads, iPhones) with easy installments.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wider">Finance Options</h4>
                <ul className="space-y-3">
                  {financeOptions.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-800">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Finance Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-semibold mb-12 leading-tight">
              Who can<br />benefit?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {beneficiaries.map((beneficiary, index) => (
                <div key={index} className="flex items-start p-6 bg-gray-900 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-200">{beneficiary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Flexible payments<br />for modern business
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt="Modern Business"
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
              Ready to<br />upgrade your<br />technology?
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

export default PaymentServices;
