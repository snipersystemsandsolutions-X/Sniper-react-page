import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  Cloud,
  Database,
  Globe,
  Lock,
  Server,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AWS = () => {
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
      icon: ShieldCheck,
      label: "CERTIFIED AWS EXPERTISE",
      description:
        "Official AWS authorized partner in India. Get 100% genuine AWS services with full support, compliance assurance, and access to the latest cloud innovations.",
    },
    {
      icon: Settings,
      label: "CUSTOMIZED CLOUD SOLUTIONS",
      description:
        "We help businesses architect and deploy the right AWS solutions based on specific workloads, industry requirements, and growth goals.",
    },
    {
      icon: Users,
      label: "COMPETITIVE PRICING",
      description:
        "Access to exclusive AWS partner pricing, reserved instance discounts, and value-added bundles tailored for your business scale.",
    },
    {
      icon: Cloud,
      label: "END-TO-END SUPPORT",
      description:
        "From cloud consultation and migration planning to deployment and 24/7 managed services, we offer full lifecycle cloud support.",
    },
  ];

  const solutions = [
    {
      title: "Cloud Migration & Modernization",
      description:
        "Seamlessly migrate your on-premises workloads to AWS with minimal downtime. We handle planning, execution, and optimization for a smooth cloud journey.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "AWS Infrastructure & DevOps",
      description:
        "Build scalable, resilient cloud infrastructure using EC2, VPC, RDS, and more—combined with CI/CD pipelines and DevOps best practices.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "Data & Analytics on AWS",
      description:
        "Leverage AWS data services like Redshift, Athena, and QuickSight to unlock business insights from your data at any scale.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Harness AWS AI/ML services like SageMaker, Rekognition, and Bedrock to build intelligent applications and automate business workflows.",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    },
  ];

  const industries = [
    {
      icon: Globe,
      title: "Startups & Scale-ups",
      description:
        "Flexible, pay-as-you-go cloud infrastructure that grows with your business from day one.",
    },
    {
      icon: Lock,
      title: "BFSI & Compliance-Heavy Sectors",
      description:
        "Secure, compliant cloud environments designed for banking, finance, and insurance workloads.",
    },
    {
      icon: Database,
      title: "Healthcare & Life Sciences",
      description:
        "HIPAA-eligible services and data management solutions for healthcare providers and researchers.",
    },
    {
      icon: Zap,
      title: "Retail & E-Commerce",
      description:
        "High-availability cloud architecture to handle traffic spikes, personalization, and real-time analytics.",
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
              AWS Authorized Partner
              <br />
              in India
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Accelerate Your Business with Amazon Web Services
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              Looking for enterprise-grade cloud infrastructure, reliable
              scalability, and future-ready technology? Sniper Systems &
              Solutions, an official AWS authorized partner in India, offers a
              full suite of AWS cloud solutions. Whether you're migrating legacy
              systems, building cloud-native applications, leveraging AI/ML
              capabilities, or managing data at scale—we deliver cloud
              technology built for results.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80"
                alt="AWS Cloud Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    AWS AUTHORIZED PARTNER
                  </span>
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
              About Our
              <br />
              Partnership
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                ABOUT OUR
                <br />
                PARTNERSHIP
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Amazon Web Services (AWS) is the world's most comprehensive and
                broadly adopted cloud platform, offering over 200 fully featured
                services from data centers globally. AWS powers millions of
                active customers—including the fastest-growing startups, largest
                enterprises, and leading government agencies.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                At Sniper Systems & Solutions, we proudly partner with AWS—a
                globally recognized leader in cloud innovation. As an official
                AWS reseller and consulting partner in India, we deliver
                cutting-edge cloud solutions and tailored IT strategies that
                meet the demands of modern enterprises, fast-growing startups,
                and digital-first organizations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:col-start-2">
              <p className="text-lg text-gray-800 leading-relaxed">
                With Sniper Systems, you get access to genuine AWS services,
                dedicated cloud architects, and the latest in cloud
                innovation—all from a trusted technology partner who understands
                your business.
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
              Why Choose Sniper Systems
              <br />
              for Your Organization?
            </h2>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-gray-700 last:border-0"
              >
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
              Explore our
              <br />
              AWS Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
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
              Industries
              <br />
              We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="space-y-4 pb-8 border-b border-gray-700"
              >
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
            Scale without
            <br />
            limits
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80"
              alt="AWS Cloud Showcase"
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
              Have an idea?
              <br />
              We make it happen
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
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

export default AWS;
