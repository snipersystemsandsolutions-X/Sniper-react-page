import { Layout } from "@/components/Layout";
import { ArrowRight, Shield, Lock, CheckCircle, Zap } from "lucide-react";
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

// ---- Animated Counter ----
const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);
  const numericMatch = target.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : null;
  const prefix = target.replace(/[\d.]+.*/, "");
  const trailingSuffix =
    numericValue !== null
      ? target.replace(new RegExp(`^${prefix}[\\d.]+`), "").replace(suffix, "")
      : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || numericValue === null) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericValue,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            if (el)
              el.textContent =
                prefix + Math.round(obj.val).toLocaleString() + trailingSuffix + suffix;
          },
        });
      },
    });
    return () => st.kill();
  }, [numericValue]);

  if (numericValue === null) return <span ref={ref}>{target}</span>;
  return (
    <span ref={ref}>
      {prefix}0{trailingSuffix}{suffix}
    </span>
  );
};

// ---- Benefits List with GSAP line-draw dividers ----
const BenefitsList = ({ benefits, inView }: { benefits: any[]; inView: boolean }) => {
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
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 last:pb-0"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.1 }}
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
            <p className="text-lg text-gray-200 leading-relaxed">{benefit.description}</p>
          </div>
          {index < benefits.length - 1 && (
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

// ---- Offerings List with GSAP line-draw dividers ----
const OfferingsList = ({ offerings, inView }: { offerings: any[]; inView: boolean }) => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!inView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.2 + i * 0.1 }
      );
    });
  }, [inView]);

  return (
    <div className="space-y-16">
      {offerings.map((offering, index) => (
        <motion.div
          key={index}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-12 last:pb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.1 }}
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {offering.title}
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">{offering.description}</p>
          </div>
          {index < offerings.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 overflow-hidden">
              <div
                ref={(el) => { linesRef.current[index] = el; }}
                className="h-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ---- Trusted Brands — GSAP random stagger ----
const BrandsGrid = ({ brands, inView }: { brands: any[]; inView: boolean }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!inView || triggered.current) return;
    triggered.current = true;
    const items = gridRef.current?.querySelectorAll(".brand-item");
    if (!items) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: () => gsap.utils.random(20, 45) },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: { amount: 0.7, from: "random" },
      }
    );
  }, [inView]);

  return (
    <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="brand-item opacity-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img src={brand.logo} alt={brand.name} className="h-8 object-contain" />
        </div>
      ))}
    </div>
  );
};

// ---- Magnetic CTA link ----
const MagneticCTALink = ({
  to,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
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
      onMouseLeave?.();
    };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <Link
      ref={btnRef as any}
      to={to}
      className={`will-change-transform ${className ?? ""}`}
      onMouseEnter={onMouseEnter}
    >
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

// ---- Government Level Card with GSAP hover ----
const GovLevelCard = ({ level }: { level: any }) => {
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
    <div ref={cardRef} className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-80">
      <img
        ref={imgRef}
        src={level.image}
        alt={level.title}
        className="w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
          {level.title}
        </h3>
        <p className="text-gray-200 text-sm leading-relaxed">{level.description}</p>
      </div>
    </div>
  );
};

// ========================================================
// GOVERNMENT PAGE
// ========================================================
const Government = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhiteScreen, setShowWhiteScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const offerings = [
    {
      title: "IT Infrastructure Deployment",
      description:
        "Comprehensive infrastructure solutions designed for government agencies at central, state, and local levels. Scalable, reliable systems that support mission-critical operations, data centers, and network infrastructure with enterprise-grade performance and uptime guarantees.",
    },
    {
      title: "Endpoint Security & Device Management",
      description:
        "Advanced security frameworks and mobile device management solutions that protect sensitive government data across all endpoints. Centralized management, compliance monitoring, and threat detection to safeguard digital assets and maintain regulatory adherence.",
    },
    {
      title: "Government e-Procurement Support",
      description:
        "End-to-end technology solutions for government procurement systems, including hardware, software, and services delivered through GeM and other authorized channels. Streamlined procurement processes that ensure transparency, compliance, and value for public funds.",
    },
    {
      title: "Surveillance & Smart City Solutions",
      description:
        "Integrated surveillance systems and smart city infrastructure that enhance public safety, traffic management, and urban services. IoT-enabled solutions that connect sensors, cameras, and analytics platforms for intelligent city operations and citizen services.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      label: "SECURITY & COMPLIANCE FIRST",
      description:
        "Solutions built with government-grade security standards and compliance requirements. Data protection, access controls, and audit trails that meet stringent regulatory and policy requirements for public sector organizations.",
    },
    {
      icon: Zap,
      label: "SCALABLE INFRASTRUCTURE",
      description:
        "Future-proof technology architecture that scales from pilot projects to nationwide deployments. Flexible solutions that grow with your digital transformation initiatives while maintaining performance and reliability.",
    },
    {
      icon: CheckCircle,
      label: "RELIABILITY YOU CAN TRUST",
      description:
        "Mission-critical systems with high availability, redundancy, and disaster recovery capabilities. Proven track record of supporting government operations with minimal downtime and maximum operational continuity.",
    },
    {
      icon: Lock,
      label: "DIGITAL TRANSFORMATION PARTNERS",
      description:
        "Strategic guidance for modernizing legacy systems and implementing citizen-centric digital services. Expert support for e-governance initiatives, digital India programs, and administrative efficiency improvements.",
    },
  ];

  const governmentLevels = [
    {
      title: "Central Government",
      description: "National-level infrastructure, security systems, and enterprise solutions",
      image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80",
    },
    {
      title: "State Government",
      description: "State-wide digital transformation, smart city, and citizen services",
      image: "https://images.unsplash.com/photo-1554224311-beee460201f9?w=800&q=80",
    },
    {
      title: "Local Bodies",
      description: "Municipal services, surveillance, and community-level solutions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      title: "Public Services",
      description: "Healthcare, education, and public utility technology solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
  ];

  const trustedBrands = [
    { name: "Apple",     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA",    logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo",    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Cisco",     logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Adobe",     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  ];

  // Section refs
  const heroRef    = useRef(null);
  const offerRef   = useRef(null);
  const benRef     = useRef(null);
  const featRef    = useRef(null);
  const govRef     = useRef(null);
  const statsRef   = useRef(null);
  const brandsRef  = useRef(null);
  const ctaRef     = useRef(null);

  const heroInView   = useInView(heroRef,   { once: true, margin: "-60px" });
  const offerInView  = useInView(offerRef,  { once: true, margin: "-60px" });
  const benInView    = useInView(benRef,    { once: true, margin: "-60px" });
  const featInView   = useInView(featRef,   { once: true, margin: "-60px" });
  const govInView    = useInView(govRef,    { once: true, margin: "-60px" });
  const statsInView  = useInView(statsRef,  { once: true, margin: "-60px" });
  const brandsInView = useInView(brandsRef, { once: true, margin: "-60px" });
  const ctaInView    = useInView(ctaRef,    { once: true, margin: "-100px" });

  // ✦ GSAP: Hero heading word-stagger
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = heroHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".gov-word");
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

  // ✦ GSAP: Government level cards stagger
  const govGridRef = useRef<HTMLDivElement>(null);
  const govTriggered = useRef(false);
  useEffect(() => {
    if (!govInView || govTriggered.current) return;
    govTriggered.current = true;
    const cards = govGridRef.current?.querySelectorAll(".gov-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.12 }
    );
  }, [govInView]);

  const marqueeItems  = ["Government Solutions", "Digital India", "Smart Cities", "e-Governance", "Secure Infrastructure", "Public Services"];
  const marqueeItems2 = ["Cisco", "Microsoft", "GeM Procurement", "Endpoint Security", "Surveillance", "Smart City IoT", "Data Centers"];
  const marqueeItems3 = ["Transform Public Services", "Digital Governance", "Secure & Scalable", "Sniper Systems", "Building Digital India"];

  return (
    <Layout>
      {showWhiteScreen && <WhiteScreenTransition onComplete={() => setShowWhiteScreen(false)} />}

      {/* ==================== HERO ==================== */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={heroRef}>

            {/* ✦ GSAP word-stagger heading */}
            <h1
              ref={heroHeadingRef}
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans"
              aria-label="Empowering Governance with Secure & Scalable Solutions"
            >
              {["Empowering", "Governance", "with", <br key="br" />, "Secure", "&", "Scalable", "Solutions"].map((word, i) =>
                typeof word !== "string" ? word : (
                  <span key={i} className="gov-word inline-block opacity-0 mr-[0.25em] last:mr-0">
                    {word}
                  </span>
                )
              )}
            </h1>

            <motion.p
              className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            >
              Sniper Systems & Solutions supports digital transformation across central, state, and local
              government bodies. From infrastructure modernization to data security and citizen-centric
              applications, our solutions are tailored for reliability, compliance, and scalability.
            </motion.p>
          </div>

          {/* ✦ GSAP Parallax hero image */}
          <motion.div
            className="max-w-6xl mx-auto pt-12"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <div className="relative rounded-3xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px]">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1600&q=80"
                alt="Government Technology"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">GOVERNMENT SOLUTIONS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✦ GSAP Marquee — after hero */}
      <MarqueeTicker items={marqueeItems} speed={24} />

      {/* ==================== KEY OFFERINGS — ✦ GSAP line-draw ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={offerRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={offerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Key Offerings
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={offerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Empowering Governance to run your business smoothly and securely.
            </motion.p>
          </div>
          <OfferingsList offerings={offerings} inView={offerInView} />
        </div>
      </section>

      {/* ==================== BENEFITS — ✦ GSAP line-draw dividers ==================== */}
      <motion.section
        ref={benRef}
        className="bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12"
        initial={{ opacity: 0, y: 60 }}
        animate={benInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={benInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Why Government<br />Agencies Choose Us
            </motion.h2>
          </div>
          <BenefitsList benefits={benefits} inView={benInView} />
        </div>
      </motion.section>

      {/* ✦ GSAP Marquee — between benefits and featured */}
      <MarqueeTicker items={marqueeItems2} speed={30} reverse />

      {/* ==================== FEATURED IMAGE — ✦ GSAP parallax ==================== */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={featRef}>
          <motion.h2
            className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Building digital<br />India together
          </motion.h2>
          <motion.div
            className="relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
              alt="Digital Governance"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== GOVERNMENT LEVELS — ✦ GSAP stagger ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={govRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={govInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Serving all levels<br />of government
            </motion.h2>
            <div className="w-full h-px bg-gray-300 mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={govInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                COMPREHENSIVE DIGITAL<br />TRANSFORMATION SUPPORT
              </h3>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={govInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                From central ministries to local municipal bodies, we provide technology solutions that modernize
                operations, enhance citizen services, and strengthen governance frameworks across all levels of
                government administration.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our solutions are designed to meet the unique requirements of public sector organizations, with
                emphasis on security, compliance, transparency, and accountability while driving efficiency and
                innovation in service delivery.
              </p>
            </motion.div>
          </div>

          {/* ✦ GSAP government level cards stagger */}
          <div ref={govGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentLevels.map((level, index) => (
              <div key={index} className="gov-card opacity-0">
                <GovLevelCard level={level} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS — ✦ GSAP animated counters ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={statsRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Trusted by Government<br />Bodies Across India
            </motion.h2>
            <div className="w-full h-px bg-gray-300" />
          </div>

          {/* ✦ GSAP counter numbers */}
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              {[
                { number: "1800", suffix: "+", label: "Happy Customers" },
                { number: "150",  suffix: "+", label: "Government Projects" },
                { number: "15",   suffix: "+", label: "Years of Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl text-gray-900 mb-2 font-semibold">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUSTED BRANDS — ✦ GSAP random stagger ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={brandsRef}>
          <div className="mb-20">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={brandsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Trusted Brands
            </motion.h2>
          </div>
          <BrandsGrid brands={trustedBrands} inView={brandsInView} />
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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 overflow-hidden">
            {/* ✦ GSAP word stagger on CTA heading */}
            <h2
              ref={ctaHeadingRef}
              className="text-7xl md:text-8xl font-semibold mb-6 leading-tight"
              aria-label="Ready to transform public services? Partner with us"
            >
              {["Ready", "to", "transform", <br key="br1" />, "public", "services?", <br key="br2" />, "Partner", "with", "us"].map((word, i) =>
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            {/* ✦ GSAP magnetic button */}
            <MagneticCTALink
              to="/contact"
              className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              CONNECT TODAY
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

export default Government;
