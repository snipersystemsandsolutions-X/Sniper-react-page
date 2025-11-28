import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Laptop, Package, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Acer = () => {
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
      icon: CheckCircle,
      label: "AUTHORIZED RESELLER BENEFITS",
      description: "As an Acer authorized reseller, we ensure genuine products backed by official Acer warranties and support. With us, you're guaranteed authenticity and peace of mind."
    },
    {
      icon: Package,
      label: "COMPREHENSIVE PRODUCT RANGE",
      description: "Our Acer product lineup caters to professionals, gamers, and creatives with versatile laptops for productivity, desktops with powerful performance, and monitors offering stunning clarity."
    },
    {
      icon: Users,
      label: "INDUSTRY-SPECIFIC SOLUTIONS",
      description: "We understand the unique needs of different industries. From IT and education to creative professionals, we provide tailored Acer solutions that align with your goals."
    },
    {
      icon: Laptop,
      label: "EXPERT CONSULTATION",
      description: "Leverage our expertise to find the perfect Acer product for your requirements. Our team ensures you get the right technology to enhance efficiency and innovation."
    },
  ];

  const products = [
    {
      title: "Acer Laptops & Notebooks",
      description: "Elevate your mobility & productivity with Acer laptops for professionals, students, & gamers. Featuring the latest processors & sleek designs, they deliver unmatched performance.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
    },
    {
      title: "Acer Monitors and Displays",
      description: "Experience immersive visuals with Acer's advanced monitors. Whether it's for gaming, work, or creative projects, our displays ensure clarity and vibrant colors.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80"
    },
    {
      title: "Acer Desktops & All-in-Ones",
      description: "Harness the power of Acer desktops built for multitasking and heavy workloads. From compact designs to powerhouse configurations, we have options for every need.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    },
    {
      title: "Accessories & Peripherals",
      description: "Complete your tech ecosystem with Acer's range of accessories, including keyboards, mice, and docking stations, ensuring seamless connectivity and performance.",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80"
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
              Your Trusted Acer<br />
              Authorized Reseller
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Efficient. Secure. Sustainable.
            </p>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-6">
              As an Acer authorized reseller, Sniper Systems and Solutions proudly brings you the latest in Acer technology
              to transform your workspace. From high-performance laptops to innovative solutions for businesses, we deliver
              Acer's cutting-edge products with unparalleled service and expertise.
            </p>
          </div>

          {/* Main Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1600&q=80"
                alt="Acer Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">ACER AUTHORIZED RESELLER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Why Choose Sniper Systems<br />and Solutions for<br />Acer Products?
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

      {/* Product Categories Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Explore Our Acer<br />Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Partnering with Acer<br />for Innovation
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                PARTNERING WITH ACER<br />FOR INNOVATION
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Acer's commitment to innovation aligns perfectly with our mission at Sniper Systems and Solutions. As an Acer authorized reseller, we deliver technologies that empower businesses and individuals to stay ahead in a competitive world.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you're looking for cutting-edge laptops, powerful desktops, or stunning displays, we provide the full spectrum of Acer products backed by expert support and genuine warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
            Innovation<br />meets performance
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
              alt="Acer Technology Showcase"
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

export default Acer;
