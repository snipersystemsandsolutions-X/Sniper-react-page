import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Cloud, Database, Headphones, Server, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ========================================================
// GSAP UTILITIES
// ========================================================

// ---- Marquee Ticker ----
const MarqueeTicker = ({
  items,
  speed = 26,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: reverse ? `${totalWidth}px` : `-${totalWidth}px`,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    return () => tween.kill();
  }, [speed, reverse]);
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-gray-950 py-4 border-y border-gray-800">
      <div ref={trackRef} className="flex gap-10 whitespace-nowrap will-change-transform">
        {doubled.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-500"
          >
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

// ---- Parallax Image ----
const ParallaxImage = ({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
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
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  return (
    <div ref={wrapRef} className={`overflow-hidden ${className ?? ""}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110 will-change-transform"
      />
      {children}
    </div>
  );
};

// ---- Why Choose List with GSAP line-draw dividers ----
const WhyChooseList = ({ items, inView }: { items: any[]; inView: boolean }) => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!inView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.3 + i * 0.12 }
      );
    });
  }, [inView]);

  return (
    <div className="space-y-12">
      {items.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 last:pb-0"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.1 }}
        >
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {benefit.label}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-gray-200 leading-relaxed">{benefit.description}</p>
          </div>
          {index < items.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700 overflow-hidden">
              <div
                ref={(el) => { linesRef.current[index] = el; }}
                className="h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ---- Magnetic CTA link ----
const MagneticCTALink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <Link ref={btnRef as any} to={to} className={`will-change-transform ${className ?? ""}`}>
      {children}
    </Link>
  );
};

// ========================================================
// WHITE SCREEN TRANSITION — GSAP curtain wipe
// ========================================================
const WhiteScreenTransition = ({ onComplete }: { onComplete: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(ref.current, {
      yPercent: -105,
      duration: 0.9,
      ease: "power3.inOut",
      delay: 0.2,
      onComplete,
    });
  }, []);
  return <div ref={ref} className="fixed inset-0 bg-white z-[9999] will-change-transform" />;
};

// ---- Offering Card with GSAP line-draw divider ----
const OfferingCard = ({ offering, index }: { offering: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const ease = [0.16, 1, 0.3, 1];

  useEffect(() => {
    if (!inView || !lineRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.1 + (index % 2) * 0.1 }
    );
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-1 gap-6 items-start pb-12"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease, delay: (index % 2) * 0.1 }}
    >
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {offering.title}
      </h3>
      <p className="text-lg text-gray-800 leading-relaxed">{offering.description}</p>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-block"
      >
        <Link
          to="/contact"
          className="inline-flex items-center w-fit px-8 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          Get started
        </Link>
      </motion.div>
      {/* ✦ GSAP line-draw divider */}
      <div className="absolute bottom-4 left-0 right-0 h-px bg-gray-300 overflow-hidden">
        <div
          ref={lineRef}
          className="h-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </motion.div>
  );
};

// ---- Industry Card with GSAP hover ----
const IndustryCard = ({ industry }: { industry: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;
    const onEnter = () => gsap.to(img, { scale: 1.07, duration: 0.6, ease: "power2.out" });
    const onLeave = () => gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden h-48">
        <img
          ref={imgRef}
          src={industry.image}
          alt={industry.name}
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="h-16 flex items-center justify-center p-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider text-center">
          {industry.name}
        </h3>
      </div>
    </div>
  );
};

// ========================================================
// MANAGED IT SERVICES PAGE
// ========================================================
const ManagedITServices = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhiteScreen, setShowWhiteScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const offerings = [
    { title: "Infrastructure Management",           description: "Monitor & manage servers, workstations, networks, and endpoints — ensuring high availability and performance.",                                                                        icon: Server },
    { title: "Cybersecurity & Compliance",           description: "Firewalls, antivirus, threat detection, data loss prevention — multilayered protection keeping your business safe & compliant.",                                                         icon: Shield },
    { title: "Cloud Services",                       description: "Manage public, private, or hybrid cloud environments. Migrate, optimize, and scale with data security and uptime.",                                                                      icon: Cloud },
    { title: "Help Desk & System Maintenance",       description: "Expert support via phone, email, or chat. Timely patch management & software updates for secure, up-to-date systems.",                                                                  icon: Headphones },
    { title: "Backup, Recovery & Business Continuity", description: "Automated backups, rapid recovery solutions, disaster preparedness to protect data and ensure operations run smoothly.",                                                             icon: Database },
    { title: "End-User Training & Adoption",         description: "Tailored training for employees to confidently use new technologies and platforms — driving productivity & adoption.",                                                                  icon: Users },
  ];

  const whyChoose = [
    { label: "EXPERIENCED IT EXPERTS",  description: "Certified professionals with decades of experience in networks, cloud, cybersecurity, and more." },
    { label: "PROACTIVE MAINTENANCE",   description: "Regular updates, health checks, preventive measures reduce downtime & risk." },
    { label: "SCALABLE SOLUTIONS",      description: "From 10 to 10,000 users; solutions grow with your business." },
    { label: "COST PREDICTABILITY",     description: "Flat-rate pricing ensures transparent budgeting." },
    { label: "SERVICE & SUPPORT",       description: "24/7 monitoring & quick response from dedicated support desk." },
  ];

  const howItWorks = [
    { step: "01", title: "Initial Assessment",   description: "Evaluate current IT environment & business goals." },
    { step: "02", title: "Customized Solutions", description: "Design tailored service package for needs & budget." },
    { step: "03", title: "Onboarding & Setup",   description: "Smooth transition with minimal disruption." },
    { step: "04", title: "Ongoing Management",   description: "Continuous monitoring, reporting & optimization." },
  ];

  const industries = [
    { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    { name: "Healthcare",    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
    { name: "Education",     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
    { name: "Finance",       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { name: "Retail",        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
    { name: "AEC",           image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
    { name: "IT & Software", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
  ];

  // Section refs
  const heroRef     = useRef(null);
  const offerRef    = useRef(null);
  const whyRef      = useRef(null);
  const howRef      = useRef(null);
  const featRef     = useRef(null);
  const indRef      = useRef(null);
  const ctaRef      = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: "-60px" });
  const offerInView = useInView(offerRef, { once: true, margin: "-60px" });
  const whyInView   = useInView(whyRef,   { once: true, margin: "-60px" });
  const howInView   = useInView(howRef,   { once: true, margin: "-60px" });
  const featInView  = useInView(featRef,  { once: true, margin: "-60px" });
  const indInView   = useInView(indRef,   { once: true, margin: "-60px" });
  const ctaInView   = useInView(ctaRef,   { once: true, margin: "-100px" });

  const ease = [0.16, 1, 0.3, 1];

  // ✦ GSAP: Hero heading word-stagger
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = heroHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".mit-word");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.07, delay: 1.2 }
    );
  }, []);

  // ✦ GSAP: CTA heading word stagger
  const ctaHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!ctaInView) return;
    const el = ctaHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".cta-word");
    gsap.fromTo(
      words,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.06, delay: 0.2 }
    );
  }, [ctaInView]);

  // ✦ GSAP: How it works steps stagger
  const howGridRef = useRef<HTMLDivElement>(null);
  const howTriggered = useRef(false);
  useEffect(() => {
    if (!howInView || howTriggered.current) return;
    howTriggered.current = true;
    const steps = howGridRef.current?.querySelectorAll(".how-step");
    if (!steps) return;
    gsap.fromTo(
      steps,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15 }
    );
  }, [howInView]);

  // ✦ GSAP: Industry cards random stagger
  const indGridRef = useRef<HTMLDivElement>(null);
  const indTriggered = useRef(false);
  useEffect(() => {
    if (!indInView || indTriggered.current) return;
    indTriggered.current = true;
    const cards = indGridRef.current?.querySelectorAll(".ind-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: () => gsap.utils.random(20, 45) },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: { amount: 0.7, from: "random" } }
    );
  }, [indInView]);

  const marqueeItems  = ["Managed IT Services", "Infrastructure Management", "Cybersecurity", "Cloud Services", "Help Desk", "Backup & Recovery"];
  const marqueeItems2 = ["24/7 Monitoring", "Proactive Maintenance", "Scalable Solutions", "MDM", "Disaster Recovery", "End-User Training", "Digital Transformation"];
  const marqueeItems3 = ["Transform Your IT", "Smarter Businesses", "Future-Proof Tech", "Sniper Systems", "Unstoppable Growth"];

  return (
    <Layout>
      {showWhiteScreen && <WhiteScreenTransition onComplete={() => setShowWhiteScreen(false)} />}

      {/* ==================== HERO ==================== */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={heroRef}>

            <motion.p
              className="text-xl text-gray-700 mb-6 uppercase tracking-wider font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 1.0 }}
            >
              Future-Proof Your Business with Sniper's End-to-End IT Management
            </motion.p>

            {/* ✦ GSAP word-stagger heading */}
            <h1
              ref={heroHeadingRef}
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans"
              aria-label="Smarter IT Services for Smarter Businesses"
            >
              {["Smarter", "IT", "Services", "for", <br key="br" />, "Smarter", "Businesses"].map((word, i) =>
                typeof word !== "string" ? word : (
                  <span key={i} className="mit-word inline-block opacity-0 mr-[0.25em] last:mr-0">
                    {word}
                  </span>
                )
              )}
            </h1>

            <motion.p
              className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 1.72 }}
            >
              Technology should empower your business, not slow it down.
              At Sniper Systems & Solutions, our Managed IT Services are built to take the burden of IT off your shoulders — so you can focus on growth, performance, and innovation.
              Whether you're a startup or a large enterprise, we deliver proactive maintenance and expert support to keep your systems running smoothly.
            </motion.p>
          </div>

          {/* ✦ GSAP Parallax hero image */}
          <div className="max-w-6xl mx-auto pt-12">
            <motion.div
              className="relative rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, ease, delay: 0.25 }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
                alt="Managed IT Services"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">MANAGED IT SERVICES</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✦ GSAP Marquee — after hero */}
      <MarqueeTicker items={marqueeItems} speed={24} />

      {/* ==================== CORE OFFERINGS — ✦ GSAP line-draw per card ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={offerRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={offerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease }}
            >
              Our core offerings
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {offerings.map((offering, index) => (
              <OfferingCard key={index} offering={offering} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE — ✦ GSAP line-draw dividers ==================== */}
      <motion.section
        ref={whyRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12"
        initial={{ opacity: 0, y: 60 }}
        animate={whyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Why choose<br />Sniper?
            </motion.h2>
          </div>
          <WhyChooseList items={whyChoose} inView={whyInView} />
        </div>
      </motion.section>

      {/* ✦ GSAP Marquee — between why and how */}
      <MarqueeTicker items={marqueeItems2} speed={20} reverse />

      {/* ==================== HOW IT WORKS — ✦ GSAP stagger ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={howRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={howInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease }}
            >
              How it works
            </motion.h2>
            <div className="w-full h-px bg-gray-300" />
          </div>
          <div ref={howGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="how-step opacity-0 space-y-4">
                <div className="text-5xl font-semibold text-gray-300">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED IMAGE — ✦ GSAP parallax ==================== */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={featRef}>
          <motion.h2
            className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            Technology<br />that works for you
          </motion.h2>
          <motion.div
            className="relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease, delay: 0.15 }}
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
              alt="IT Management"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== INDUSTRIES — ✦ GSAP random stagger ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={indRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={indInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease }}
            >
              Industries<br />we serve
            </motion.h2>
          </div>
          <div ref={indGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="ind-card opacity-0">
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✦ GSAP Marquee — before CTA */}
      <MarqueeTicker items={marqueeItems3} speed={22} />

      {/* ==================== CTA — ✦ GSAP word stagger + magnetic button ==================== */}
      <motion.section
        ref={ctaRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 overflow-hidden">
            {/* ✦ GSAP word stagger on CTA heading */}
            <h2
              ref={ctaHeadingRef}
              className="text-7xl md:text-8xl font-semibold mb-6 leading-tight"
              aria-label="Ready to transform your IT?"
            >
              {["Ready", "to", <br key="br1" />, "transform", <br key="br2" />, "your", "IT?"].map((word, i) =>
                typeof word !== "string" ? word : (
                  <span key={i} className="cta-word inline-block opacity-0 mr-[0.22em] last:mr-0">
                    {word}
                  </span>
                )
              )}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
          >
            {/* ✦ GSAP magnetic button */}
            <MagneticCTALink
              to="/contact"
              className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              GET STARTED
            </MagneticCTALink>
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll to Top */}
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

export default ManagedITServices;
