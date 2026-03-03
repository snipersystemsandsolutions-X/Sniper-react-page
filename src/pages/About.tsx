import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Headphones, Lightbulb, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// -------------------- Easing presets --------------------
const ease = [0.16, 1, 0.3, 1];

// -------------------- WHITE SCREEN TRANSITION --------------------
const WhiteScreenTransition = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-[9999]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      onAnimationComplete={onComplete}
    />
  );
};

// -------------------- Orbit Rings --------------------
const OrbitalRings = () => {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div className="absolute inset-0 rounded-full border-2 border-white blur-sm"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
        </div>
        <div className="absolute inset-8 animate-[spin_15s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border-2 border-white blur-sm"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
        </div>
        <div className="absolute inset-16 animate-[spin_12s_linear_infinite]">
          <div className="absolute inset-0 rounded-full border-2 border blur-[2px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_18px_rgba(244,114,182,0.9)]"></div>
        </div>
        <div className="absolute inset-24 animate-[spin_9s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border-2 border blur-[1px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.9)]"></div>
        </div>
        <div className="absolute inset-32 animate-[spin_7s_linear_infinite]">
          <div className="absolute inset-0 rounded-full border-2 border blur-[1px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,1)]"></div>
        </div>
        <div className="absolute inset-40 animate-[spin_5s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border-2 border"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(232,121,249,1)]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
          <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
          <div className="absolute w-8 h-8 bg-white/50 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

// -------------------- GSAP: Marquee Ticker --------------------
const MarqueeTicker = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items so the loop feels seamless
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: 22,
      ease: "none",
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, []);

  const items = [
    "IT Solutions",
    "Cloud Services",
    "Cybersecurity",
    "Digital Transformation",
    "24/7 Support",
    "World-Class Engineering",
  ];

  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden bg-gray-950 py-5 my-0 border-y border-gray-800">
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((text, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 inline-block"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

// -------------------- GSAP: Animated Counter --------------------
const AnimatedCounter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  // Extract numeric part
  const numericMatch = target.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : null;
  const prefix = target.replace(/[\d.]+.*/, "");
  const trailingSuffix = numericValue !== null ? target.replace(/.*[\d.]/, "").replace(numericMatch![0].replace(/^.*?(\d.*)$/, "$1"), "") : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || numericValue === null) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericValue,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (el) {
              el.textContent =
                prefix +
                (Number.isInteger(numericValue)
                  ? Math.round(obj.val).toLocaleString()
                  : obj.val.toFixed(1)) +
                trailingSuffix +
                suffix;
            }
          },
        });
      },
    });

    return () => st.kill();
  }, [numericValue, prefix, trailingSuffix, suffix]);

  if (numericValue === null) return <span ref={ref}>{target}</span>;

  return <span ref={ref}>{prefix}0{trailingSuffix}{suffix}</span>;
};

// -------------------- GSAP: Horizontal Parallax Image --------------------
const ParallaxImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const tween = gsap.fromTo(
      img,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className ?? ""}`}>
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover scale-110 will-change-transform" />
    </div>
  );
};

// -------------------- GSAP: Process Steps Line Draw --------------------
const ProcessSteps = ({ process, processInView }: { process: { number: string; title: string; description: string }[]; processInView: boolean }) => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!processInView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.35 + i * 0.12,
        }
      );
    });
  }, [processInView]);

  return (
    <div className="space-y-12">
      {process.map((step, index) => (
        <motion.div
          key={index}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 last:pb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.1 }}
        >
          <div className="lg:col-span-2 text-center lg:text-left">
            <span className="text-5xl font-semibold text-white">{step.number}</span>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
          </div>

          {/* GSAP-animated bottom border line (last item excluded) */}
          {index < process.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700 overflow-hidden">
              <div
                ref={(el) => { linesRef.current[index] = el; }}
                className="h-full bg-gradient-to-r from-white/40 via-white/80 to-white/40"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// -------------------- GSAP: Magnetic CTA Button --------------------
const MagneticLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link
      ref={btnRef as any}
      to={to}
      className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300 relative z-10 will-change-transform"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <span className="absolute inset-[-10px] rounded-full"></span>
    </Link>
  );
};

// -------------------- CTA Section --------------------
const CTASection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const animateCursor = useCallback(() => {
    if (!cursorVisible) return;
    const smoothFactor = isHoveringButton ? 0.2 : 0.1;
    const newX = lerp(displayPosition.x, cursorPosition.x, smoothFactor);
    const newY = lerp(displayPosition.y, cursorPosition.y, smoothFactor);
    velocity.current.x = newX - displayPosition.x;
    velocity.current.y = newY - displayPosition.y;
    setDisplayPosition({ x: newX, y: newY });
    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, [cursorVisible, cursorPosition, displayPosition, isHoveringButton]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMouseEnter = () => {
      setCursorVisible(true);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };
    const handleMouseLeave = () => {
      setCursorVisible(false);
      setIsHoveringButton(false);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
    const handleMouseMove = (e) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    section.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      section.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [animateCursor]);

  useEffect(() => {
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, []);

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-150 ease-out ${
          cursorVisible ? "opacity-100" : "opacity-0"
        } ${isHoveringButton ? "w-32 h-32 bg-white text-black" : "w-24 h-24 bg-white text-black"}`}
        style={{
          left: `${displayPosition.x}px`,
          top: `${displayPosition.y}px`,
          transform: `translate(-50%, -50%) ${cursorVisible ? (isHoveringButton ? "scale(1.3)" : "scale(1)") : "scale(0.5)"}`,
          transition: cursorVisible
            ? "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease"
            : "all 0.3s ease",
          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))",
        }}
      >
        {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
      </div>

      {/* Trailing cursor */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out ${
          cursorVisible ? "opacity-30" : "opacity-0"
        } ${isHoveringButton ? "w-20 h-20 bg-white/30" : "w-16 h-16 bg-white/20"}`}
        style={{
          left: `${displayPosition.x - velocity.current.x * 0.5}px`,
          top: `${displayPosition.y - velocity.current.y * 0.5}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s linear, top 0.1s linear",
        }}
      />

      {/* CTA Section */}
      <motion.section
        ref={(el) => { sectionRef.current = el; ctaRef.current = el; }}
        className="relative bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12 cursor-none overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <OrbitalRings />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight text-white">
              Ready to<br />transform<br />your business?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            {/* ✦ GSAP Magnetic Button replaces plain Link */}
            <MagneticLink to="/contact">
              TELL US
            </MagneticLink>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

// -------------------- MAIN ABOUT PAGE --------------------
const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhiteScreen, setShowWhiteScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✦ GSAP: Hero heading word-by-word stagger reveal
  const gsapHeroRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = gsapHeroRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".gsap-word");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 1.4, // after white screen exits
      }
    );
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleWhiteScreenComplete = () => setShowWhiteScreen(false);

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
    { icon: Users,       number: "1900",  suffix: "+", label: "Happy Customers" },
    { icon: CheckCircle, number: "100",   suffix: "%", label: "Client Satisfaction" },
    { icon: Shield,      number: null,    label: "World Class", staticText: "World Class" }
  ];

  const whyChooseUs = [
    { icon: Headphones, title: "Dedicated Customer Support", description: "personalized assistance, seamless experience" },
    { icon: Lightbulb,  title: "Smart IT Solutions",         description: "innovative technology, streamlined processes, improved efficiency" }
  ];

  const process = [
    { number: "01", title: "Our Approach", description: "technology easy & worry-free" },
    { number: "02", title: "Our Values",   description: "trust, customer loyalty" },
    { number: "03", title: "Our Support",  description: "fast, reliable engineering team" },
    { number: "04", title: "Our Solution", description: "we unite top technologies for performance and scalability" }
  ];

  // in-view refs
  const heroRef      = useRef(null);
  const transformRef = useRef(null);
  const expRef       = useRef(null);
  const faqRef       = useRef(null);
  const customersRef = useRef(null);
  const whyRef       = useRef(null);
  const processRef   = useRef(null);
  const featuredRef  = useRef(null);

  const heroInView      = useInView(heroRef,      { once: true, margin: "-60px" });
  const transformInView = useInView(transformRef, { once: true, margin: "-60px" });
  const expInView       = useInView(expRef,       { once: true, margin: "-60px" });
  const faqInView       = useInView(faqRef,       { once: true, margin: "-60px" });
  const customersInView = useInView(customersRef, { once: true, margin: "-60px" });
  const whyInView       = useInView(whyRef,       { once: true, margin: "-60px" });
  const processInView   = useInView(processRef,   { once: true, margin: "-60px" });
  const featuredInView  = useInView(featuredRef,  { once: true, margin: "-60px" });

  // ✦ GSAP: Why Choose Us cards scale-in on scroll
  const whyCardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!whyInView) return;
    const cards = whyCardsRef.current?.querySelectorAll(".why-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { scale: 0.88, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)", stagger: 0.15, delay: 0.2 }
    );
  }, [whyInView]);

  return (
    <Layout>
      {showWhiteScreen && <WhiteScreenTransition onComplete={handleWhiteScreenComplete} />}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={heroRef}>

            {/* ✦ GSAP word-by-word heading */}
            <h1
              ref={gsapHeroRef}
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans"
            >
              {["Creating", "a", "better", "IT", "solutions"].map((word, i) => (
                <span
                  key={i}
                  className="gsap-word inline-block opacity-0 mr-[0.25em] last:mr-0"
                  style={{ display: "inline-block", overflow: "visible" }}
                >
                  {word}
                  {word === "better" ? <br /> : null}
                </span>
              ))}
            </h1>

            <motion.p
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.9 }}
            >
              Let us handle your IT, so you can focus on what matters. Our expertise will manage your
              technology needs efficiently and securely.
            </motion.p>
          </div>

          {/* Main Image — GSAP Parallax */}
          <div className="max-w-6xl mx-auto pt-12">
            <motion.div
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                alt="Team Collaboration"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✦ GSAP Marquee Ticker — between Hero and Transform */}
      <MarqueeTicker />

      {/* Transform Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start" ref={transformRef}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={transformInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
            >
              <h2 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight">
                Transform every<br />Digital Process
              </h2>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={transformInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                Revolutionize your digital workflows with our transformative solutions. Streamline every
                process for enhanced efficiency and productivity.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our comprehensive approach ensures that every aspect of your digital infrastructure works
                seamlessly together, delivering measurable results and competitive advantages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={expRef}>
            {/* ✦ GSAP Parallax on experience image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-80 lg:h-96"
              initial={{ opacity: 0, x: -40 }}
              animate={expInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="IT Solutions"
                className="w-full h-full rounded-2xl"
              />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={expInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12"
        initial={{ opacity: 0, y: 60 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Frequently<br />Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-700 pb-6 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg text-white font-medium pr-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ArrowRight className="w-6 h-6 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-gray-300 text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Happy Customers Section — ✦ GSAP Counter on numbers */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={customersRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={customersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
            >
              Trusted by 1900+<br />Happy Customers
            </motion.h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={customersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                WORKS ABOUT /<br />HAPPY CUSTOMERS
              </h3>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={customersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                With a proven track record of satisfaction, we've earned the trust of over 1900 happy customers.
                Our commitment to excellence ensures tailored service for each client.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Every project we undertake is backed by our dedication to delivering world-class solutions
                and maintaining 100% client satisfaction.
              </p>
            </motion.div>
          </div>

          {/* ✦ Stats with GSAP animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={customersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-gray-900" />
                </div>
                <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">
                  {stat.staticText ? (
                    stat.staticText
                  ) : (
                    <AnimatedCounter target={stat.number!} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — ✦ GSAP scale-in cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={whyRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              We Provide Outsourced IT Services For Your Business
            </motion.p>
          </div>

          <div ref={whyCardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="why-card opacity-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <item.icon className="w-12 h-12 text-gray-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section — ✦ GSAP line-draw dividers */}
      <motion.section
        ref={processRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12"
        initial={{ opacity: 0, y: 60 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight">
              Process —<br />How we work
            </h2>
          </motion.div>

          <ProcessSteps process={process} processInView={processInView} />
        </div>
      </motion.section>

      {/* Featured Image Section — ✦ GSAP Parallax */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={featuredRef}>
          <motion.h2
            className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Excellence in<br />every solution
          </motion.h2>
          <motion.div
            className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={featuredInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* ✦ GSAP Parallax on featured image */}
            <ParallaxImage
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
              alt="Team Excellence"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default About;
