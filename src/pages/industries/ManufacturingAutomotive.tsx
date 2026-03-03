import { Layout } from "@/components/Layout";
import { ArrowRight, Cpu, Network, Settings, Zap } from "lucide-react";
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

// ---- Sector Card with GSAP hover ----
const SectorCard = ({ sector }: { sector: any }) => {
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
        src={sector.image}
        alt={sector.title}
        className="w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
          {sector.title}
        </h3>
        <p className="text-gray-200 text-sm leading-relaxed">{sector.description}</p>
      </div>
    </div>
  );
};

// ========================================================
// MANUFACTURING & AUTOMOTIVE PAGE
// ========================================================
const ManufacturingAutomotive = () => {
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
      title: "CAD & Design Workstations",
      description:
        "High-performance engineering workstations powered by professional graphics cards and multi-core processors for complex CAD, CAM, and PLM applications. Purpose-built systems that handle large assemblies, detailed simulations, and parametric modeling with exceptional performance and stability.",
    },
    {
      title: "AR/VR & Simulation Tools",
      description:
        "Immersive technology platforms for virtual prototyping, assembly line simulation, and training environments. Hardware and software solutions that enable digital twins, virtual commissioning, and interactive design reviews, reducing physical prototyping costs and accelerating time-to-market.",
    },
    {
      title: "Rugged Devices & Connectivity Solutions",
      description:
        "Industrial-grade tablets, laptops, and mobile devices built to withstand harsh manufacturing environments. Dust-resistant, shock-proof, and temperature-tolerant hardware with reliable wireless connectivity for shop floor operations, inventory management, and quality control.",
    },
    {
      title: "Security & Industrial Networking",
      description:
        "Robust network infrastructure and cybersecurity solutions designed for operational technology environments. Secure communication between machines, sensors, and control systems with industrial protocols, firewalls, and intrusion detection for protecting critical manufacturing assets.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      label: "FACTORY FLOOR TO DESIGN BOARD",
      description:
        "Comprehensive technology solutions that span the entire manufacturing value chain, from engineering and design through production, quality control, and supply chain management. Integrated systems that drive efficiency across all operations.",
    },
    {
      icon: Settings,
      label: "ADVANCED MANUFACTURING SUPPORT",
      description:
        "Technology infrastructure that enables Industry 4.0 initiatives including IoT sensors, machine learning analytics, predictive maintenance, and automated quality inspection. Smart manufacturing solutions that optimize production and reduce downtime.",
    },
    {
      icon: Network,
      label: "SUPPLY CHAIN AUTOMATION",
      description:
        "Connected systems for real-time inventory tracking, automated logistics, and supply chain visibility. Integration with ERP, MES, and warehouse management systems for seamless material flow and just-in-time manufacturing.",
    },
    {
      icon: Cpu,
      label: "DIGITAL ENGINEERING AT SCALE",
      description:
        "High-performance computing clusters and workstation networks that support concurrent engineering, simulation-driven design, and collaborative product development across global teams and multiple facilities.",
    },
  ];

  const manufacturingSectors = [
    {
      title: "Automotive Manufacturing",
      description: "Design, simulation, and production line automation systems",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
    {
      title: "Aerospace & Defense",
      description: "Precision engineering workstations and secure collaboration tools",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    },
    {
      title: "Electronics & Components",
      description: "PCB design, testing equipment, and quality control systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
      title: "Heavy Equipment & Machinery",
      description: "Rugged computing and industrial IoT infrastructure",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
  ];

  const trustedBrands = [
    { name: "Apple",     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA",    logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo",    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Autodesk",  logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
    { name: "Cisco",     logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Unity",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
  ];

  // Section refs
  const heroRef     = useRef(null);
  const offerRef    = useRef(null);
  const benRef      = useRef(null);
  const featRef     = useRef(null);
  const sectorsRef  = useRef(null);
  const statsRef    = useRef(null);
  const brandsRef   = useRef(null);
  const ctaRef      = useRef(null);

  const heroInView    = useInView(heroRef,    { once: true, margin: "-60px" });
  const offerInView   = useInView(offerRef,   { once: true, margin: "-60px" });
  const benInView     = useInView(benRef,     { once: true, margin: "-60px" });
  const featInView    = useInView(featRef,    { once: true, margin: "-60px" });
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-60px" });
  const statsInView   = useInView(statsRef,   { once: true, margin: "-60px" });
  const brandsInView  = useInView(brandsRef,  { once: true, margin: "-60px" });
  const ctaInView     = useInView(ctaRef,     { once: true, margin: "-100px" });

  // ✦ GSAP: Hero heading word-stagger
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = heroHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".ma-word");
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

  // ✦ GSAP: Sector cards stagger
  const sectorGridRef = useRef<HTMLDivElement>(null);
  const sectorTriggered = useRef(false);
  useEffect(() => {
    if (!sectorsInView || sectorTriggered.current) return;
    sectorTriggered.current = true;
    const cards = sectorGridRef.current?.querySelectorAll(".sector-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.12 }
    );
  }, [sectorsInView]);

  const marqueeItems  = ["Manufacturing & Automotive", "CAD Workstations", "Industry 4.0", "Digital Engineering", "Factory Automation", "Rugged Devices"];
  const marqueeItems2 = ["Autodesk", "NVIDIA RTX", "Cisco", "AR/VR Simulation", "Industrial IoT", "Supply Chain", "Smart Factories"];
  const marqueeItems3 = ["Optimize Your Operations", "Engineering Excellence", "Industry 4.0", "Sniper Systems", "Digital Innovation"];

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
              aria-label="Driving Efficiency with Rugged, Scalable Tech"
            >
              {["Driving", "Efficiency", "with", <br key="br" />, "Rugged,", "Scalable", "Tech"].map((word, i) =>
                typeof word !== "string" ? word : (
                  <span key={i} className="ma-word inline-block opacity-0 mr-[0.25em] last:mr-0">
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
              Whether on the factory floor or the design board, our solutions support advanced manufacturing,
              supply chain automation, and automotive innovation. We help streamline operations and support
              digital engineering at scale.
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
                src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80"
                alt="Manufacturing Technology"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">MANUFACTURING & AUTOMOTIVE</span>
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
              Powering Industry 4.0<br />transformation
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
            Engineering excellence<br />meets innovation
          </motion.h2>
          <motion.div
            className="relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80"
              alt="Automotive Innovation"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ==================== MANUFACTURING SECTORS — ✦ GSAP stagger ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto" ref={sectorsRef}>
          <div className="mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Serving diverse<br />manufacturing sectors
            </motion.h2>
            <div className="w-full h-px bg-gray-300 mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                FROM DESIGN TO<br />PRODUCTION LINE
              </h3>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                We serve manufacturers across automotive, aerospace, electronics, and heavy machinery sectors
                with technology solutions that drive operational efficiency, product quality, and innovation.
                From CAD workstations to factory floor systems, we support the complete manufacturing ecosystem.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our manufacturing solutions enable smart factories with IoT connectivity, predictive analytics,
                and automation that optimize production, reduce waste, and accelerate time-to-market while
                maintaining the highest standards of quality and safety.
              </p>
            </motion.div>
          </div>

          {/* ✦ GSAP sector cards stagger */}
          <div ref={sectorGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingSectors.map((sector, index) => (
              <div key={index} className="sector-card opacity-0">
                <SectorCard sector={sector} />
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
              Powering Manufacturing<br />Across India
            </motion.h2>
            <div className="w-full h-px bg-gray-300" />
          </div>

          {/* ✦ GSAP counter numbers */}
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              {[
                { number: "1800", suffix: "+", label: "Happy Customers" },
                { number: "400",  suffix: "+", label: "Manufacturing Clients" },
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
              aria-label="Ready to optimize your operations? Let's innovate together"
            >
              {["Ready", "to", "optimize", <br key="br1" />, "your", "operations?", <br key="br2" />, "Let's", "innovate", "together"].map((word, i) =>
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

export default ManufacturingAutomotive;
