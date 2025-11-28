import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Clock, Headphones, Lightbulb, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of companies can benefit from your IT infrastructure solutions?",
      answer: "Our solutions are designed for all business sizes—startups to large enterprises. We tailor our services to meet the unique needs of each organization, ensuring scalable and efficient IT infrastructure."
    },
    {
      question: "How do you determine the specific needs of a company?",
      answer: "We begin with a comprehensive assessment of your current IT infrastructure, business goals, and operational challenges. Our expert team conducts detailed consultations to understand your requirements and design customized solutions that align with your objectives."
    },
    {
      question: "How can we get started with your tailored IT solutions?",
      answer: "Getting started is simple. Contact us through our website or call our team directly. We'll schedule an initial consultation to discuss your needs, followed by a detailed proposal outlining our recommended solutions and implementation timeline."
    }
  ];

  const stats = [
    { icon: Users, number: "1900+", label: "Happy Customers" },
    { icon: CheckCircle, number: "100%", label: "Client Satisfaction" },
    { icon: Shield, number: "World Class", label: "Worker" }
  ];

  const whyChooseUs = [
    {
      icon: Headphones,
      title: "Dedicated Customer Support",
      description: "personalized assistance, seamless experience"
    },
    {
      icon: Lightbulb,
      title: "Smart IT Solutions",
      description: "innovative technology, streamlined processes, improved efficiency"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Our Approach",
      description: "technology easy & worry-free"
    },
    {
      number: "02",
      title: "Our Values",
      description: "trust, customer loyalty"
    },
    {
      number: "03",
      title: "Our Support",
      description: "fast, reliable engineering team"
    },
    {
      number: "04",
      title: "Our Solution",
      description: "we unite top technologies for performance and scalability"
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
              Creating a better<br />
              IT solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Let us handle your IT, so you can focus on what matters. Our expertise will manage your
              technology needs efficiently and securely.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
                Transform every<br />Digital Process
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Revolutionize your digital workflows with our transformative solutions. Streamline every
                process for enhanced efficiency and productivity.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our comprehensive approach ensures that every aspect of your digital infrastructure works
                seamlessly together, delivering measurable results and competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Image */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="IT Solutions"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                  20+ years of<br />experience
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  We help companies by delivering state-of-the-art IT solutions. From hardware optimization
                  to customized software solutions, we ensure maximum efficiency and effectiveness.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  With our expertise, companies can streamline operations and achieve their productivity
                  goals confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Frequently<br />Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-6 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg text-white font-medium pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {faq.question}
                  </h3>
                  <ArrowRight
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Trusted by 1900+<br />Happy Customers
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                WORKS ABOUT /<br />HAPPY CUSTOMERS
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                With a proven track record of satisfaction, we've earned the trust of over 1900 happy customers.
                Our commitment to excellence ensures tailored service for each client.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Every project we undertake is backed by our dedication to delivering world-class solutions
                and maintaining 100% client satisfaction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-gray-900" />
                </div>
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">{stat.number}</div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              We Provide Outsourced IT Services For Your Business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
                <div className="mb-6">
                  <item.icon className="w-12 h-12 text-gray-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Process —<br />How we work
            </h2>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 text-center lg:text-left">
                  <span className="text-5xl font-semibold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
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
            Excellence in<br />every solution
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
              alt="Team Excellence"
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
              Ready to<br />transform<br />your business?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
