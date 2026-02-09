import { Layout } from "@/components/Layout";
import { ArrowRight, Briefcase, Clock, Shield, Target, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HRSolutions = () => {
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
      title: "Permanent Staffing",
      description: "Full-time talent for long-term growth. We find culturally aligned, high-performing candidates that stay."
    },
    {
      title: "Executive Search",
      description: "Board-level and senior leadership recruitment with a discreet, research-backed process."
    },
    {
      title: "Contract & Temp Hiring",
      description: "On-demand professionals for short-term needs, projects, or seasonal roles."
    },
    {
      title: "Bulk Hiring (RPO)",
      description: "End-to-end recruitment process outsourcing to help you scale rapidly without stress."
    },
  ];

  const employerBenefits = [
    { icon: Clock, label: "Fast turnaround times" },
    { icon: Users, label: "Industry-specific talent pools" },
    { icon: Briefcase, label: "Dedicated account manager" },
  ];

  const jobSeekerBenefits = [
    { icon: Target, label: "Resume & interview support" },
    { icon: Shield, label: "Confidential job matching" },
    { icon: TrendingUp, label: "Direct access to decision-makers" },
  ];

  const industries = [
    { title: "Architecture & Engineering", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { title: "Information Technology", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
    { title: "Healthcare", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
    { title: "Finance & Accounting", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { title: "Retail & E-commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
    { title: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    { title: "Logistics & Supply Chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 mb-4 font-medium">Human Resources Consulting That Drives Results</p>
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Building Better<br />
              Workplaces, Together.
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Expert HR Management Solutions to Recruit Smarter, Hire Better, and Grow Faster.
              We're a results-driven recruitment agency specializing in delivering exceptional candidates across industries. Whether you're scaling your startup or filling a critical executive role, our mission is simple: to find you the right people, at the right time.
              We also offer comprehensive HR management solutions and human resources consulting to help organizations strengthen their internal HR capabilities.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
                alt="HR Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">HR SOLUTIONS</span>
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
              Our services
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

      {/* For Employers Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              For Employers
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mt-8">
              Tired of sifting through unqualified resumes? Let us do the heavy lifting.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Our recruiters act as an extension of your HR team—delivering qualified, pre-vetted candidates who are ready to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {employerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* For Job Seekers Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              For Job Seekers
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mt-8">
              Looking for your next big opportunity? We work with leading companies across sectors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Share your resume and let's find your perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {jobSeekerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-gray-900" />
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-gray-900 rounded-full text-gray-900 font-medium text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
              Submit your resume
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Industries we serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img src={industry.image} alt={industry.title} className="w-full h-48 object-cover" />
                <div className="h-20 flex items-center justify-center p-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider text-center">
                    {industry.title}
                  </h3>
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
              Ready to build your<br />dream team?
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

export default HRSolutions;
