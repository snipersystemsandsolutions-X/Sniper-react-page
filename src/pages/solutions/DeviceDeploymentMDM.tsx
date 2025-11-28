import { Layout } from "@/components/Layout";
import { CheckCircle, DollarSign, Lock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const DeviceDeploymentMDM = () => {
  const benefits = [
    {
      icon: TrendingUp,
      label: "EFFICIENCY",
      description: "Streamline the deployment of devices across your organization, saving time and resources."
    },
    {
      icon: Lock,
      label: "SECURITY",
      description: "Ensure that all devices are securely managed and compliant with company policies and regulations."
    },
    {
      icon: CheckCircle,
      label: "PRODUCTIVITY",
      description: "Empower teams with seamless access to essential tools and resources on their mobile devices, enhancing productivity and collaboration."
    },
    {
      icon: DollarSign,
      label: "COST SAVINGS",
      description: "Optimise device usage and reduce unnecessary expenses through efficient management and monitoring."
    },
  ];

  const challenges = [
    {
      title: "Device Fragmentation",
      description: "Managing diverse devices and platforms can lead to fragmentation and complexity."
    },
    {
      title: "Security Risks",
      description: "Unmanaged devices pose security risks, exposing sensitive data."
    },
    {
      title: "Resource Drain",
      description: "Manual deployment is time-consuming and resource-intensive."
    },
  ];

  const solutions = [
    {
      title: "Automated Deployment",
      description: "Automation reduces manual efforts and ensures consistency."
    },
    {
      title: "Centralized Management",
      description: "Manage all devices from a single dashboard with seamless monitoring and updates."
    },
    {
      title: "Security Features",
      description: "Implement encryption, access controls, and threat protection."
    },
    {
      title: "Expert Support",
      description: "Industry-leading help for deployment, monitoring, and management."
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
              Device Deployment &<br />
              Mobile Device Management
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Elevate Your Work Environment with Sniper Systems and Solutions
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
                alt="Device Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300">
            <div>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                OPTIMIZING TEAM PERFORMANCE
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Efficient device management is pivotal for optimal team performance. It ensures that devices are properly configured, updated, and secured, allowing teams to work seamlessly without disruptions.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                By managing devices effectively, organisations can maximise productivity, streamline workflows, and minimise downtime. This leads to improved efficiency, collaboration, and overall performance, enabling teams to achieve their best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="text-6xl md:text-7xl text-gray-900 mb-4 font-semibold">90%</div>
              <p className="text-gray-600 text-lg">of companies claim MDM allows them to embrace BYOD easier.</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-6xl md:text-7xl text-gray-900 mb-4 font-semibold">42%</div>
              <p className="text-gray-600 text-lg">of enterprises think of themselves as mobile-first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Device Deployment & MDM Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Device Deployment<br />& Mobile Device Management?
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

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Seamless device<br />management at scale
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
              alt="Device Management Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Industry challenges
            </h2>
          </div>

          <div className="space-y-16">
            {challenges.map((challenge, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 border-b border-gray-300 last:border-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {challenge.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {challenge.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    Get Solution
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Sniper Systems Can Help Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              How Sniper Systems<br />Can Help
            </h2>
            <div className="w-full h-px bg-gray-700 my-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Sniper Systems offers best-in-class Device Deployment & MDM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
                alt="Automated Deployment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt="Centralized Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Ready to streamline<br />your device management?
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300">
            GET STARTED
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DeviceDeploymentMDM;
