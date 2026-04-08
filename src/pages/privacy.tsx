import { Layout } from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Cookie, Eye, FileText, Globe, Lock, Mail, RefreshCw, Shield, Trash2, UserCheck, Users } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// -------------------- Easing presets --------------------
const ease = [0.16, 1, 0.3, 1] as const;

// ========================================================
// ✦ WHITE SCREEN TRANSITION
// ========================================================
const WhiteScreenTransition = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-white z-[9999]"
    initial={{ y: 0 }}
    animate={{ y: "-105%" }}
    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    onAnimationComplete={onComplete}
  />
);

// ========================================================
// ✦ SPRING BADGE PILL
// ========================================================
const SpringBadge = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase cursor-default border border-black/10 bg-gray-100 text-gray-700"
    whileHover={{ scale: 1.08, backgroundColor: "#111", color: "#fff" }}
    transition={{ type: "spring", stiffness: 400, damping: 18 }}
  >
    {children}
  </motion.span>
);

// ========================================================
// ✦ SPRING HEADING
// ========================================================
const SpringHeading = ({
  children,
  trigger,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  trigger: boolean;
  delay?: number;
  className?: string;
}) => (
  <motion.h2
    className={`font-semibold leading-tight ${className}`}
    initial={{ opacity: 0, y: 60 }}
    animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
    transition={{ duration: 0.8, ease, delay }}
  >
    {children}
  </motion.h2>
);

// ========================================================
// ✦ GSAP MARQUEE TICKER
// ========================================================
const MarqueeTicker = ({ items }: { items: string[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: `-${totalWidth}px`, duration: 24, ease: "none", repeat: -1 });
    return () => tween.kill();
  }, []);
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-gray-950 py-4 sm:py-5 border-y border-gray-800">
      <div ref={trackRef} className="flex gap-10 whitespace-nowrap will-change-transform">
        {doubled.map((text, i) => (
          <span key={i} className="flex items-center gap-10 text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-500">
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

// ========================================================
// ✦ GSAP LINE-DRAW SECTION DIVIDER
// ========================================================
const SectionDivider = ({ inView, delay = 0 }: { inView: boolean; delay?: number }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!inView || !lineRef.current) return;
    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.1, ease: "power3.out", delay }
    );
  }, [inView, delay]);
  return (
    <div className="w-full h-px bg-gray-200 overflow-hidden my-6">
      <div ref={lineRef} className="h-full bg-gradient-to-r from-gray-900/40 via-gray-900 to-gray-900/40" style={{ transform: "scaleX(0)" }} />
    </div>
  );
};

// ========================================================
// ✦ POLICY SECTION CARD (white bg)
// ========================================================
const PolicySection = ({
  icon: Icon,
  number,
  title,
  children,
  trigger,
  index,
}: {
  icon: React.ElementType;
  number: string;
  title: string;
  children: React.ReactNode;
  trigger: boolean;
  index: number;
}) => (
  <motion.div
    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 sm:py-16"
    initial={{ opacity: 0, y: 40 }}
    animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.75, ease, delay: 0.1 + index * 0.07 }}
  >
    {/* Left — number + icon */}
    <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
      <motion.span
        className="text-5xl sm:text-6xl font-semibold text-gray-200 leading-none select-none"
        initial={{ opacity: 0, x: -20 }}
        animate={trigger ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.2 + index * 0.07 }}
      >
        {number}
      </motion.span>
      <motion.div
        className="mt-0 lg:mt-6"
        whileHover={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-gray-700" />
      </motion.div>
    </div>

    {/* Right — title + content */}
    <div className="lg:col-span-9">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 leading-snug">{title}</h3>
      <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </motion.div>
);

// ========================================================
// ✦ POLICY BULLET LIST
// ========================================================
const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mt-4">
    {items.map((item, i) => (
      <motion.li
        key={i}
        className="flex items-start gap-3 text-gray-700"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: i * 0.06 }}
      >
        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-900" />
        <span>{item}</span>
      </motion.li>
    ))}
  </ul>
);

// ========================================================
// ✦ QUICK NAV PILLS (sticky index)
// ========================================================
const QuickNav = ({ sections }: { sections: { id: string; label: string }[] }) => {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      className="hidden xl:flex flex-col gap-2 sticky top-32 self-start"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease, delay: 1.6 }}
    >
      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400 mb-2">Contents</p>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`text-left text-sm font-medium transition-all duration-300 leading-snug py-1 border-l-2 pl-3 ${
            active === id
              ? "border-gray-900 text-gray-900"
              : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </motion.div>
  );
};

// ========================================================
// ✦ ORBITAL RINGS (for CTA)
// ========================================================
const OrbitalRings = () => (
  <div className="absolute inset-0 bg-black overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border-white blur-sm" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" /></div>
      <div className="absolute inset-8 animate-[spin_15s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border-white blur-sm" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" /></div>
      <div className="absolute inset-16 animate-[spin_12s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border blur-[2px]" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_18px_rgba(244,114,182,0.9)]" /></div>
      <div className="absolute inset-24 animate-[spin_9s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border blur-[1px]" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.9)]" /></div>
      <div className="absolute inset-32 animate-[spin_7s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border blur-[1px]" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,1)]" /></div>
      <div className="absolute inset-40 animate-[spin_5s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border" /><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(232,121,249,1)]" /></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
        <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl" />
        <div className="absolute w-8 h-8 bg-white/50 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
      </div>
    </div>
  </div>
);

// ========================================================
// ✦ CTA SECTION
// ========================================================
const CTASection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const animationFrameRef = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => { setIsTouchDevice(window.matchMedia("(hover: none)").matches); }, []);

  const lerp = (s: number, e: number, f: number) => s + (e - s) * f;

  const animateCursor = useCallback(() => {
    if (!cursorVisible) return;
    const sf = isHoveringButton ? 0.2 : 0.1;
    setDisplayPosition(prev => {
      const newX = lerp(prev.x, cursorPosition.x, sf);
      const newY = lerp(prev.y, cursorPosition.y, sf);
      velocity.current = { x: newX - prev.x, y: newY - prev.y };
      return { x: newX, y: newY };
    });
    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, [cursorVisible, cursorPosition, isHoveringButton]);

  useEffect(() => {
    if (isTouchDevice) return;
    const section = sectionRef.current;
    if (!section) return;
    const enter = () => { setCursorVisible(true); animationFrameRef.current = requestAnimationFrame(animateCursor); };
    const leave = () => { setCursorVisible(false); setIsHoveringButton(false); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
    const move = (e: MouseEvent) => setCursorPosition({ x: e.clientX, y: e.clientY });
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    section.addEventListener("mousemove", move);
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    return () => { section.removeEventListener("mouseenter", enter); section.removeEventListener("mouseleave", leave); section.removeEventListener("mousemove", move); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, [animateCursor, isTouchDevice]);

  useEffect(() => {
    const btn = ctaBtnRef.current;
    if (!btn || isTouchDevice) return;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, [isTouchDevice]);

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {!isTouchDevice && (
        <>
          <div
            className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-sm ${cursorVisible ? "opacity-100" : "opacity-0"} ${isHoveringButton ? "w-32 h-32 bg-white text-black" : "w-24 h-24 bg-white text-black"}`}
            style={{ left: `${displayPosition.x}px`, top: `${displayPosition.y}px`, transform: `translate(-50%, -50%) ${cursorVisible ? (isHoveringButton ? "scale(1.3)" : "scale(1)") : "scale(0.5)"}`, transition: cursorVisible ? "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease" : "all 0.3s ease", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
          >
            {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
          </div>
          <div
            className={`fixed pointer-events-none z-40 rounded-full ${cursorVisible ? "opacity-30" : "opacity-0"} ${isHoveringButton ? "w-20 h-20 bg-white/30" : "w-16 h-16 bg-white/20"}`}
            style={{ left: `${displayPosition.x - velocity.current.x * 0.5}px`, top: `${displayPosition.y - velocity.current.y * 0.5}px`, transform: "translate(-50%, -50%)", transition: "left 0.1s linear, top 0.1s linear" }}
          />
        </>
      )}

      <motion.section
        ref={(el) => { sectionRef.current = el; ctaRef.current = el; }}
        className={`relative bg-black text-white py-16 sm:py-20 px-4 sm:px-6 rounded-[2rem] sm:rounded-[4rem] mx-3 sm:mx-6 my-8 sm:my-12 overflow-hidden ${!isTouchDevice ? "cursor-none" : ""}`}
        initial={{ opacity: 0, y: 60 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <div className="hidden sm:block"><OrbitalRings /></div>
        <div className="block sm:hidden absolute inset-0 bg-black">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div className="mb-10 sm:mb-12" initial={{ opacity: 0, y: 40 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease, delay: 0.2 }}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight text-white">
              Questions<br />about your<br />privacy?
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.4 }}>
            <a
              ref={ctaBtnRef as any}
              href="/contact"
              className="inline-flex items-center px-8 sm:px-12 py-3 sm:py-4 border-2 border-white rounded-full text-white font-medium text-base sm:text-lg hover:bg-white hover:text-black transition-colors duration-300 relative z-10 will-change-transform"
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
            >
              CONTACT US
              <span className="absolute inset-[-10px] rounded-full" />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

// ========================================================
// ✦ KEY COMMITMENTS CARD (black section)
// ========================================================
const CommitmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!inView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.9, ease: "power3.out", delay: 0.3 + i * 0.1 }
      );
    });
  }, [inView]);

  const commitments = [
    { label: "No data selling",   text: "We never sell, rent, or trade your personal information to third parties for commercial gain." },
    { label: "Purpose-limited",   text: "Data collected is used only for the specific purposes outlined — nothing more, nothing less." },
    { label: "Security-first",    text: "Robust technical and organizational measures protect your data at every layer." },
    { label: "Transparent",       text: "Every data practice is documented here. We update this Policy whenever our practices change." },
  ];

  return (
    <motion.section
      ref={ref}
      className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 rounded-[2rem] sm:rounded-[4rem] mx-3 sm:mx-6 my-8 sm:my-12"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <SpringHeading trigger={inView} delay={0.1} className="text-4xl sm:text-6xl md:text-7xl text-white">
            Our core<br />commitments
          </SpringHeading>
        </motion.div>

        <div className="space-y-0">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              className="relative pb-6 sm:pb-8 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 + index * 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start py-6 sm:py-8">
                <div className="sm:col-span-3">
                  <motion.span
                    className="text-lg sm:text-xl font-semibold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease, delay: 0.3 + index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                </div>
                <div className="sm:col-span-9">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
              {index < commitments.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700 overflow-hidden">
                  <div
                    ref={el => { linesRef.current[index] = el; }}
                    className="h-full bg-gradient-to-r from-white/40 via-white/80 to-white/40"
                    style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ========================================================
// ✦ MAIN PRIVACY PAGE
// ========================================================
const Privacy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhiteScreen, setShowWhiteScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // GSAP: Hero heading word-by-word stagger
  const gsapHeroRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = gsapHeroRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".gsap-word");
    gsap.fromTo(words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.09, delay: 1.4 }
    );
  }, []);

  const heroRef     = useRef(null);
  const introRef    = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);

  const heroInView      = useInView(heroRef,      { once: true, margin: "-60px" });
  const introInView     = useInView(introRef,     { once: true, margin: "-60px" });
  const section1InView  = useInView(section1Ref,  { once: true, margin: "-60px" });
  const section2InView  = useInView(section2Ref,  { once: true, margin: "-60px" });
  const section3InView  = useInView(section3Ref,  { once: true, margin: "-60px" });
  const section4InView  = useInView(section4Ref,  { once: true, margin: "-60px" });
  const section5InView  = useInView(section5Ref,  { once: true, margin: "-60px" });
  const section6InView  = useInView(section6Ref,  { once: true, margin: "-60px" });
  const section7InView  = useInView(section7Ref,  { once: true, margin: "-60px" });
  const section8InView  = useInView(section8Ref,  { once: true, margin: "-60px" });
  const section9InView  = useInView(section9Ref,  { once: true, margin: "-60px" });
  const section10InView = useInView(section10Ref, { once: true, margin: "-60px" });
  const section11InView = useInView(section11Ref, { once: true, margin: "-60px" });



  const marqueeItems = [
    "Privacy Policy", "Data Security", "Your Rights", "Transparency", "Sniper Systems", "Secure Data", "Trust First",
  ];

  const navSections = [
    { id: "section-1",  label: "Information We Collect" },
    { id: "section-2",  label: "How We Use Your Info" },
    { id: "section-3",  label: "Cookies & Tracking" },
    { id: "section-4",  label: "Sharing & Disclosure" },
    { id: "section-5",  label: "Data Security" },
    { id: "section-6",  label: "Third-Party Links" },
    { id: "section-7",  label: "Data Retention" },
    { id: "section-8",  label: "Your Rights" },
    { id: "section-9",  label: "Children's Privacy" },
    { id: "section-10", label: "Policy Updates" },
    { id: "section-11", label: "Contact Us" },
  ];

  return (
    <Layout>
      {showWhiteScreen && <WhiteScreenTransition onComplete={() => setShowWhiteScreen(false)} />}

      {/* ── Hero Section ── */}
      <section className="relative bg-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" ref={heroRef}>

            {/* GSAP word-by-word heading */}
            <h1
              ref={gsapHeroRef}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {["Privacy", "Policy"].map((word, i) => (
                <span
                  key={i}
                  className="gsap-word inline-block opacity-0 mr-[0.25em] last:mr-0"
                  style={{ overflow: "visible" }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <motion.p
              className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 1.9 }}
            >
              Sniper Systems and Solutions Pvt Ltd
            </motion.p>




          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeTicker items={marqueeItems} />

      {/* ── Intro Statement (black pill section) ── */}
      <motion.section
        ref={introRef}
        className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 rounded-[2rem] sm:rounded-[4rem] mx-3 sm:mx-6 my-8 sm:my-12"
        initial={{ opacity: 0, y: 60 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <SpringHeading trigger={introInView} delay={0.1} className="text-4xl sm:text-5xl md:text-6xl text-white mb-8">
              Privacy is a<br />foundational<br />commitment.
            </SpringHeading>
          </motion.div>
          <motion.p
            className="text-base sm:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            At Sniper Systems and Solutions Pvt Ltd, your privacy is not an afterthought. This Privacy Policy
            is designed to give you a clear, transparent understanding of how we collect, use, store, and
            safeguard your personal information whenever you engage with our website or services.
            By accessing or using our website, you acknowledge that you have read and understood the
            practices described herein and agree to be bound by this Policy.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Main Policy Content ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-16">

            {/* Sticky side nav */}
            <div className="xl:col-span-2">
              <QuickNav sections={navSections} />
            </div>

            {/* Policy sections */}
            <div className="xl:col-span-10">

              {/* Section 1 */}
              <div id="section-1" ref={section1Ref}>
                <PolicySection icon={FileText} number="01" title="Information We Collect" trigger={section1InView} index={0}>
                  <p>
                    We collect only the information necessary to deliver our services effectively and to
                    improve your experience with us. The categories of information we may gather include:
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 mt-4 mb-2">1.1 Personal Information</p>
                    <p>
                      This encompasses information that can be used to identify you as an individual.
                      It may include, but is not limited to:
                    </p>
                    <PolicyList items={[
                      "Full name",
                      "Email address and phone number",
                      "Company name and job title",
                      "Mailing or business address",
                      "Any other details you voluntarily submit via contact forms, inquiries, or direct correspondence",
                    ]} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mt-6 mb-2">1.2 Technical and Usage Information</p>
                    <p>
                      When you visit our website, certain information is automatically recorded by our systems
                      to help us maintain performance, security, and user experience. This includes:
                    </p>
                    <PolicyList items={[
                      "IP address and geographic location (country/region level)",
                      "Browser type, version, and operating system",
                      "Device type and screen resolution",
                      "Pages visited, time spent, and navigation paths within our site",
                      "Date, time, and duration of each visit",
                    ]} />
                    <p className="mt-4 text-gray-500 text-sm">
                      This data is primarily used in aggregate and does not typically identify you as an individual.
                    </p>
                  </div>
                </PolicySection>
                <SectionDivider inView={section1InView} delay={0.4} />
              </div>

              {/* Section 2 */}
              <div id="section-2" ref={section2Ref}>
                <PolicySection icon={Eye} number="02" title="How We Use Your Information" trigger={section2InView} index={1}>
                  <p>
                    The information we collect serves specific, legitimate purposes. We do not use your data
                    for any purpose incompatible with the reasons for which it was originally collected.
                    Our uses include:
                  </p>
                  <PolicyList items={[
                    "Responding promptly and accurately to your inquiries, requests, or service queries",
                    "Providing detailed information about our products, solutions, and capabilities",
                    "Enhancing the functionality, usability, and performance of our website",
                    "Sending relevant communications, including service updates, announcements, or changes to our policies",
                    "Maintaining the security, integrity, and operational continuity of our digital systems",
                    "Fulfilling applicable legal, regulatory, or contractual obligations",
                  ]} />
                </PolicySection>
                <SectionDivider inView={section2InView} delay={0.3} />
              </div>

              {/* Section 3 */}
              <div id="section-3" ref={section3Ref}>
                <PolicySection icon={Cookie} number="03" title="Cookies and Tracking Technologies" trigger={section3InView} index={2}>
                  <p>
                    Our website may utilize cookies — small data files stored on your device — along with
                    similar tracking technologies, to deliver a seamless browsing experience and to understand
                    how visitors interact with our content. Cookies serve several functional purposes, including:
                  </p>
                  <PolicyList items={[
                    "Retaining your preferences across sessions for a more personalized experience",
                    "Analyzing traffic patterns and page performance to guide improvements",
                    "Supporting essential website functionality and session management",
                  ]} />
                  <p className="mt-4">
                    You retain full control over cookie usage. You may configure your browser settings at any
                    time to decline, restrict, or delete cookies. Please note that disabling certain cookies
                    may affect the functionality of some features on our website.
                  </p>
                </PolicySection>
                <SectionDivider inView={section3InView} delay={0.3} />
              </div>

              {/* Section 4 */}
              <div id="section-4" ref={section4Ref}>
                <PolicySection icon={Users} number="04" title="Sharing and Disclosure of Information" trigger={section4InView} index={3}>
                  <p>
                    Sniper Systems and Solutions Pvt Ltd operates on a strict policy of not selling, renting,
                    leasing, or trading your personal information to third parties for commercial purposes.
                    We may disclose information in the following limited and clearly defined circumstances:
                  </p>
                  <PolicyList items={[
                    "With vetted, trusted service providers and technology partners engaged to support our website operations and service delivery — each bound by confidentiality obligations",
                    "When required to comply with applicable law, legal process, court order, or regulatory authority",
                    "To protect and defend the legitimate rights, assets, or safety of Sniper Systems, our clients, or our personnel",
                  ]} />
                  <p className="mt-4">
                    In all cases, we ensure that any such sharing is proportionate, purposeful, and carried out
                    with appropriate safeguards in place.
                  </p>
                </PolicySection>
                <SectionDivider inView={section4InView} delay={0.3} />
              </div>

              {/* Section 5 */}
              <div id="section-5" ref={section5Ref}>
                <PolicySection icon={Shield} number="05" title="Data Security" trigger={section5InView} index={4}>
                  <p>
                    We implement robust technical and organizational security measures designed to protect your
                    personal information from unauthorized access, inadvertent disclosure, alteration, or loss.
                    Our security practices are continuously reviewed and updated to remain aligned with industry standards.
                  </p>
                  <p>
                    That said, it is important to acknowledge that no method of data transmission over the
                    Internet, or electronic storage mechanism, can be guaranteed to be completely impenetrable.
                    While we take every reasonable precaution, we encourage you to exercise care when sharing
                    sensitive information online.
                  </p>
                </PolicySection>
                <SectionDivider inView={section5InView} delay={0.3} />
              </div>

              {/* Section 6 */}
              <div id="section-6" ref={section6Ref}>
                <PolicySection icon={Globe} number="06" title="Third-Party Links" trigger={section6InView} index={5}>
                  <p>
                    Our website may contain hyperlinks to external websites or third-party platforms operated
                    independently of Sniper Systems and Solutions Pvt Ltd. These external sites maintain their
                    own privacy policies, over which we have no authority or oversight.
                  </p>
                  <p>
                    We strongly recommend reviewing the privacy policy of any external website you visit through
                    links on our platform. Sniper Systems bears no responsibility for the content, accuracy, or
                    data practices of such third-party sites.
                  </p>
                </PolicySection>
                <SectionDivider inView={section6InView} delay={0.3} />
              </div>

              {/* Section 7 */}
              <div id="section-7" ref={section7Ref}>
                <PolicySection icon={Trash2} number="07" title="Data Retention" trigger={section7InView} index={6}>
                  <p>
                    We retain your personal information only for as long as is necessary to fulfil the purposes
                    for which it was collected — including the provision of services, compliance with legal
                    obligations, and the resolution of disputes. Once data is no longer required, it is securely
                    deleted or anonymized in accordance with applicable regulations.
                  </p>
                </PolicySection>
                <SectionDivider inView={section7InView} delay={0.3} />
              </div>

              {/* Section 8 */}
              <div id="section-8" ref={section8Ref}>
                <PolicySection icon={UserCheck} number="08" title="Your Rights and Choices" trigger={section8InView} index={7}>
                  <p>
                    Depending on your jurisdiction and applicable data protection legislation, you may be
                    entitled to exercise certain rights concerning the personal information we hold about you.
                    These may include:
                  </p>
                  <PolicyList items={[
                    "The right to access a copy of the personal data we have collected about you",
                    "The right to request correction of any inaccurate, incomplete, or outdated information",
                    "The right to request erasure of your personal data, subject to applicable legal and contractual limitations",
                    "The right to withdraw consent for specific uses of your information at any time",
                  ]} />
                  <p className="mt-4">
                    To exercise any of the above rights, please reach out to us via the contact details
                    provided at the end of this Policy. We are committed to responding in a timely and
                    transparent manner.
                  </p>
                </PolicySection>
                <SectionDivider inView={section8InView} delay={0.3} />
              </div>

              {/* Section 9 */}
              <div id="section-9" ref={section9Ref}>
                <PolicySection icon={Lock} number="09" title="Children's Privacy" trigger={section9InView} index={8}>
                  <p>
                    Our website and the services we offer are intended exclusively for adults and business
                    professionals. We do not knowingly solicit or collect personal information from individuals
                    under the age of 13.
                  </p>
                  <p>
                    Should we discover that personal data has been inadvertently collected from a minor without
                    verifiable parental consent, we will promptly take appropriate measures to remove such
                    information from our records.
                  </p>
                </PolicySection>
                <SectionDivider inView={section9InView} delay={0.3} />
              </div>

              {/* Section 10 */}
              <div id="section-10" ref={section10Ref}>
                <PolicySection icon={RefreshCw} number="10" title="Updates to This Privacy Policy" trigger={section10InView} index={9}>
                  <p>
                    As our services evolve and regulatory landscapes shift, we may update this Privacy Policy
                    periodically to reflect those changes. All revisions will be published on this page, with
                    the "Last Updated" date revised accordingly.
                  </p>
                  <p>
                    We encourage you to review this Policy on a regular basis to remain informed about how we
                    protect your information. Continued use of our website following any updates constitutes
                    your acceptance of the revised Policy.
                  </p>
                </PolicySection>
                <SectionDivider inView={section10InView} delay={0.3} />
              </div>

              {/* Section 11 */}
              <div id="section-11" ref={section11Ref}>
                <PolicySection icon={Mail} number="11" title="Contact Us" trigger={section11InView} index={10}>
                  <p>
                    If you have questions, concerns, or requests relating to this Privacy Policy or our data
                    handling practices, we welcome you to get in touch. We are committed to addressing all
                    inquiries with diligence and care.
                  </p>
                  <motion.div
                    className="mt-8 p-6 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={section11InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease, delay: 0.35 }}
                  >
                    <p className="font-semibold text-gray-900 text-lg mb-4">Sniper Systems and Solutions Pvt Ltd</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <a
                          href="https://sniperindia.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors"
                        >
                          https://sniperindia.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <a
                          href="mailto:enquiry@sniperindia.com"
                          className="text-gray-700 hover:text-gray-900 underline underline-offset-4 transition-colors"
                        >
                          enquiry@sniperindia.com
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </PolicySection>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Marquee bottom */}
      <MarqueeTicker items={["Data Privacy", "Your Rights", "Transparency", "Security First", "Sniper Systems", "Trust", "Confidentiality"]} />

      {/* ── Core Commitments (black section) ── */}
      <CommitmentsSection />

      {/* ── CTA Section ── */}
      <CTASection />

      {/* ── Scroll to Top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Privacy;
