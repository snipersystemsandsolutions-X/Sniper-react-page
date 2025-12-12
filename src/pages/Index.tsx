import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Clock, Lightbulb, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// -------------------- CTA SECTION WITH CUSTOM CURSOR --------------------
const CTASection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => {
      setCursorVisible(false);
      setIsHoveringButton(false);
    };
    const handleMouseMove = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        } ${
          isHoveringButton
            ? "w-32 h-32 bg-white text-black"
            : "w-24 h-24 bg-white text-black"
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) ${cursorVisible ? (isHoveringButton ? "scale(1.3)" : "scale(1)") : "scale(0.5)"}`,
        }}
      >
        {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
      </div>

      {/* CTA Section */}
      <section
        ref={sectionRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12 cursor-none"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight">
              Have<br />an idea?<br />We make it happen
            </h2>
          </div>
          <Link
            ref={buttonRef}
            to="/contact"
            className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300"
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
          >
            TELL US
          </Link>
        </div>
      </section>
    </>
  );
};

// -------------------- MAIN INDEX PAGE --------------------
const Index = () => {
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const solutions = [
    { title: "AV Solutions", description: "Providing innovative audio-visual solutions tailored for business environments." },
    { title: "Device Deployment & MDM", description: "Managing the deployment of devices and implementing Mobile Device Management strategies." },
    { title: "IT Asset Disposal Plans", description: "Ensuring secure and environmentally responsible disposal of IT assets." },
    { title: "IT Consulting Services", description: "Providing expert advice to align IT strategies with business objectives." },
    { title: "Managed IT Services", description: "Offering reliable comprehensive IT support and management services." },
    { title: "Payment Services", description: "Facilitating seamless and flexible IT financing and leasing options for businesses." },
    { title: "IT Infrastructure Solutions", description: "Designing and implementing robust IT infrastructure to support business operations." },
    { title: "Networking Solutions", description: "Providing networking solutions to ensure seamless connectivity and communication." },
  ];

  const benefits = [
    { icon: Clock, label: "EXPERTISE THAT KNOWS NO BOUNDS", description: "With 15+ years of experience, our IT solutions are seamless, reliable, and tailored for businesses across any location or time zone." },
    { icon: Shield, label: "CHALLENGES? WE'VE GOT IT COVERED", description: "\"Impossible\" isn't in our vocabulary. We deliver solutions exactly as designed—no shortcuts, no compromises, just results." },
    { icon: CheckCircle, label: "TAILORED SOLUTIONS, EVERY TIME", description: "Every business is unique. Our IT strategies, managed services, and technology integrations are customized to fit your exact needs." },
    { icon: Lightbulb, label: "PARTNERED WITH THE BEST", description: "As authorized resellers of Apple, Autodesk, Adobe, Unity, and more, we combine global technology with local expertise for maximum impact." },
    { icon: Zap, label: "SUPPORT THAT NEVER SLEEPS", description: "Monitoring and support ensure your operations run smoothly, securely, and without interruption." },
  ];

  const clientTypes = [
    { title: "Large Organizations", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { title: "Mid-Enterprise & Scale-ups", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { title: "GCC (Global Capability Centers)", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { title: "Developers", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
  ];

  const partners = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
    { name: "Cisco", logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo", logo: "https://cdn.brandfetch.io/idUM4QuKhG/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751421771798" },
    { name: "Autodesk", logo: "https://sniperindia.com/wp-content/uploads/2025/05/Onsitego.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Trimble_Logo.svg" },
    { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Brand_Wordmark_for_SketchUp.png" },
    { name: "Adobe", logo: "https://www.keyshot.com/wp-content/uploads/2024/07/Frame-1707478913-1.png" },
    { name: "Unity", logo: "https://cdn.brandfetch.io/id31rkiryT/w/300/h/100/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1749280180362" },
    { name: "Adobe", logo: "https://cdn.brandfetch.io/id59i_vTyl/w/360/h/140/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1752254441901" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans">
              Empowering Enterprises<br />
              with Cutting-Edge IT Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Sniper Systems and Solutions Pvt Ltd, we specialize in delivering comprehensive IT solutions
              tailored to your business needs. From advanced infrastructure management to strategic consulting,
              our team ensures your enterprise stays ahead in a rapidly evolving technological landscape.
            </p>
          </div>

          {/* Main Video/Image Section */}
          <div className="max-w-6xl mx-auto pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                alt="Modern Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">SNIPER SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Since 2009, Sniper Systems and Solutions Pvt. Ltd. has been at the forefront of delivering
                  state-of-the-art IT solutions to businesses across India.
                </p>
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Headquartered in Chennai, we specialize in providing comprehensive IT support services that
                  empower organizations to achieve operational excellence and drive business growth.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                What we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Our solutions
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
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link to="/solutions" className="inline-flex items-center px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Benefits of<br />working with us
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
            Creativity<br />meets technology
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt="Technology Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
              Simply Put, We Deliver<br />What Others Can't
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                SIMPLY PUT, WE DELIVER<br />WHAT OTHERS CAN'T
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                We build solutions that make a difference, and we take pride in doing it. <strong>Sniper Systems and Solutions Pvt. Ltd.</strong> is a dedicated team of experts ready to tackle the most complex IT challenges for businesses.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Mainstream? Not for us. Because for Sniper, it's not just about delivering IT services—it's about <strong>solving real business problems, supporting people, and ensuring every project succeeds.</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">1800+</div>
                <p className="text-gray-600 text-lg">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">5000+</div>
                <p className="text-gray-600 text-lg">Completed Projects</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="min-h-screen bg-black text-white flex rounded-[4rem] mx-6 my-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Clearly, We Stand<br />With Everyone
            </h2>
            <div className="w-full h-px bg-gray-700 my-8"></div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider leading-tight mb-8">
              CLEARLY, WE STAND<br />WITH EVERYONE
            </h3>
            <Link to="/clients" className="inline-flex items-center px-8 py-3 border-2 border-gray-700 rounded-full bg-gray-900 text-white font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Read more
            </Link>
          </div>
        </div>

        <div className="hidden lg:block w-1/2 px-20 py-20 space-y-6 overflow-y-auto">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <img src={client.image} alt={client.title} className="w-full h-64 object-cover" />
              <div className="h-16 flex items-center justify-center p-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {client.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
     <section className="bg-white py-20 px-6 flex justify-center">
  <div className="max-w-4xl w-full text-left -ml-10">

    <div className="mb-20">
      <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
        Partnering with<br />amazing teams<br />all over the world
      </h2>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-8 object-contain"
          />
        </div>
      ))}
    </div>

  </div>
</section>


      {/* CTA Section with Custom Cursor - NOW USING THE COMPONENT */}
      <CTASection />

      {/* Scroll To Top */}
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

export default Index;
