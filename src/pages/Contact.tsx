import { Layout } from "@/components/Layout";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ========================================================
// GSAP UTILITIES
// ========================================================

// ---- Marquee Ticker ----
const MarqueeTicker = ({ items }: { items: string[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: `-${totalWidth}px`, duration: 26, ease: "none", repeat: -1 });
    return () => tween.kill();
  }, []);
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-gray-950 py-4 border-y border-gray-800">
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

// ---- Form field focus underline animation ----
const AnimatedInput = ({ label, id, type = "text", value, onChange, required = false, placeholder, className = "" }: {
  label: string; id: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string; className?: string;
}) => {
  const underlineRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    gsap.fromTo(underlineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.5, ease: "power3.out" }
    );
  };
  const handleBlur = () => {
    gsap.to(underlineRef.current, { scaleX: 0, transformOrigin: "right center", duration: 0.4, ease: "power2.in" });
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-6 py-4 border-2 border-gray-300 rounded-full text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300 ${className}`}
        />
        {/* ✦ GSAP focus underline */}
        <div className="absolute bottom-0 left-6 right-6 overflow-hidden rounded-full pointer-events-none">
          <div ref={underlineRef} className="h-full w-full bg-black" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </div>
  );
};

const AnimatedTextarea = ({ label, id, value, onChange, required = false, rows = 6, placeholder }: {
  label: string; id: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean; rows?: number; placeholder?: string;
}) => {
  const underlineRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    gsap.fromTo(underlineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.5, ease: "power3.out" }
    );
  };
  const handleBlur = () => {
    gsap.to(underlineRef.current, { scaleX: 0, transformOrigin: "right center", duration: 0.4, ease: "power2.in" });
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-6 py-4 border-2 border-gray-300 rounded-3xl text-gray-900 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none"
        />
        <div className="absolute bottom-0 left-6 right-6 overflow-hidden rounded-full pointer-events-none">
          <div ref={underlineRef} className="h-full w-full bg-black" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </div>
  );
};

// ---- Contact Info cards with GSAP line-draw dividers ----
const ContactInfoList = ({ contactInfo, infoInView }: { contactInfo: any[]; infoInView: boolean }) => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!infoInView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.9, ease: "power3.out", delay: 0.2 + i * 0.1 }
      );
    });
  }, [infoInView]);

  return (
    <div className="space-y-12">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          className="relative pb-2 last:pb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.1 }}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <info.icon className="w-6 h-6 text-gray-900" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{info.label}</p>
              <p className="text-lg text-gray-800 leading-relaxed">{info.content}</p>
            </div>
          </div>
          {/* ✦ GSAP line-draw divider */}
          {index < contactInfo.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 overflow-hidden">
              <div
                ref={el => { linesRef.current[index] = el; }}
                className="h-full bg-gradient-to-r from-gray-900/60 via-gray-900 to-gray-900/60"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ---- Magnetic CTA button ----
const MagneticLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
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
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);
  return (
    <Link ref={btnRef as any} to={to} className={`will-change-transform ${className ?? ""}`}>
      {children}
    </Link>
  );
};

// ---- Location card with GSAP image parallax ----
const LocationCard = ({ loc, index, locInView }: { loc: any; index: number; locInView: boolean }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const wrap = wrapRef.current;
    if (!img || !wrap) return;
    const tween = gsap.fromTo(img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <motion.div
      ref={wrapRef}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${index === 0 ? "col-span-2 row-span-2" : ""}`}
      style={{ height: index === 0 ? "420px" : "196px" }}
      initial={{ opacity: 0, y: 40 }}
      animate={locInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (index % 4) * 0.08 }}
      whileHover={{ y: -4 }}
    >
      {/* ✦ GSAP parallax image */}
      <img
        ref={imgRef}
        src={loc.img}
        alt={loc.city}
        className="absolute inset-0 w-full h-full object-cover scale-110 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <span className="inline-block text-white uppercase tracking-widest mb-2 px-3 py-1 rounded-full"
          style={{ fontSize: "9px", fontWeight: 600, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
          {loc.tag}
        </span>
        <h3 className="text-white font-semibold leading-tight" style={{ fontSize: index === 0 ? "26px" : "15px" }}>{loc.city}</h3>
        <p className="text-gray-300 font-normal mt-0.5" style={{ fontSize: index === 0 ? "13px" : "11px" }}>{loc.state}</p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center justify-center rounded-full"
          style={{ width: "30px", height: "30px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <ArrowRight className="w-3.5 h-3.5 text-white -rotate-45" />
        </div>
      </div>
    </motion.div>
  );
};


// ========================================================
// WHITE SCREEN TRANSITION
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


// ========================================================
// ORBITAL RINGS
// ========================================================
const OrbitalRings = () => (
  <div className="absolute inset-0 bg-black overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border-white blur-sm"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div></div>
      <div className="absolute inset-8 animate-[spin_15s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border-white blur-sm"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div></div>
      <div className="absolute inset-16 animate-[spin_12s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border blur-[2px]"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_18px_rgba(244,114,182,0.9)]"></div></div>
      <div className="absolute inset-24 animate-[spin_9s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border blur-[1px]"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.9)]"></div></div>
      <div className="absolute inset-32 animate-[spin_7s_linear_infinite]"><div className="absolute inset-0 rounded-full border-2 border blur-[1px]"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(167,139,250,1)]"></div></div>
      <div className="absolute inset-40 animate-[spin_5s_linear_infinite_reverse]"><div className="absolute inset-0 rounded-full border-2 border"></div><div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(232,121,249,1)]"></div></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
        <div className="absolute w-8 h-8 bg-white/50 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
      </div>
    </div>
  </div>
);


// ========================================================
// CTA SECTION
// ========================================================
const CTASection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const sectionRef = useRef(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const animationFrameRef = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });

  const lerp = (s: number, e: number, f: number) => s + (e - s) * f;

  const animateCursor = useCallback(() => {
    if (!cursorVisible) return;
    const sf = isHoveringButton ? 0.2 : 0.1;
    const newX = lerp(displayPosition.x, cursorPosition.x, sf);
    const newY = lerp(displayPosition.y, cursorPosition.y, sf);
    velocity.current.x = newX - displayPosition.x;
    velocity.current.y = newY - displayPosition.y;
    setDisplayPosition({ x: newX, y: newY });
    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, [cursorVisible, cursorPosition, displayPosition, isHoveringButton]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const enter = () => { setCursorVisible(true); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); animationFrameRef.current = requestAnimationFrame(animateCursor); };
    const leave = () => { setCursorVisible(false); setIsHoveringButton(false); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
    const move = (e: MouseEvent) => setCursorPosition({ x: e.clientX, y: e.clientY });
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    section.addEventListener("mousemove", move);
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    return () => { section.removeEventListener("mouseenter", enter); section.removeEventListener("mouseleave", leave); section.removeEventListener("mousemove", move); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, [animateCursor]);

  useEffect(() => { return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); }; }, []);

  // ✦ GSAP magnetic CTA button
  useEffect(() => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
      gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <div className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-150 ease-out ${cursorVisible ? "opacity-100" : "opacity-0"} ${isHoveringButton ? "w-32 h-32 bg-white text-black" : "w-24 h-24 bg-white text-black"}`}
        style={{ left: `${displayPosition.x}px`, top: `${displayPosition.y}px`, transform: `translate(-50%, -50%) ${cursorVisible ? (isHoveringButton ? "scale(1.3)" : "scale(1)") : "scale(0.5)"}`, transition: cursorVisible ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease' : 'all 0.3s ease', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}>
        {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
      </div>
      <div className={`fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out ${cursorVisible ? "opacity-30" : "opacity-0"} ${isHoveringButton ? "w-20 h-20 bg-white/30" : "w-16 h-16 bg-white/20"}`}
        style={{ left: `${displayPosition.x - velocity.current.x * 0.5}px`, top: `${displayPosition.y - velocity.current.y * 0.5}px`, transform: 'translate(-50%, -50%)', transition: 'left 0.1s linear, top 0.1s linear' }} />

      <motion.section
        ref={(el) => { sectionRef.current = el; ctaRef.current = el; }}
        className="relative bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12 cursor-none overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <OrbitalRings />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div className="mb-12" initial={{ opacity: 0, y: 40 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight text-white">Have<br />an idea?<br />We make it happen</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}>
            {/* ✦ GSAP magnetic button */}
            <Link
              ref={ctaBtnRef as any}
              to="/"
              className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 relative z-10 will-change-transform"
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
            >
              BACK TO HOME
              <span className="absolute inset-[-10px] rounded-full"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};


// ========================================================
// CONTACT PAGE
// ========================================================
const Contact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhiteScreen, setShowWhiteScreen] = useState(true);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // ✦ GSAP: submit button ripple on click
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const handleSubmitClick = () => {
    const btn = submitBtnRef.current;
    if (!btn) return;
    gsap.fromTo(btn, { scale: 0.95 }, { scale: 1, duration: 0.5, ease: "elastic.out(1.2, 0.5)" });
  };

  const contactInfo = [
    { icon: MapPin, label: "OUR OFFICE",    content: "Chennai, Tamil Nadu, India" },
    { icon: Phone,  label: "PHONE",         content: "+91 (044) 1234 5678" },
    { icon: Mail,   label: "EMAIL",         content: "info@snipersystems.com" },
    { icon: Clock,  label: "WORKING HOURS", content: "Mon - Fri: 9:00 AM - 6:00 PM" },
  ];

  const locations = [
    { city: "Chennai",    state: "Tamil Nadu",     tag: "Headquarters", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
    { city: "Bangalore",  state: "Karnataka",      tag: "Tech Hub",     img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80" },
    { city: "Hyderabad",  state: "Telangana",      tag: "South Region", img: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800&q=80" },
    { city: "Coimbatore", state: "Tamil Nadu",     tag: "West TN",      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" },
    { city: "Kochi",      state: "Kerala",         tag: "Kerala Office", img: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80" },
    { city: "Gurugram",   state: "Haryana",        tag: "North Region", img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80" },
    { city: "Vijayawada", state: "Andhra Pradesh", tag: "AP Office",    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
  ];

  const ease = [0.16, 1, 0.3, 1] as const;

  // section refs
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const locRef  = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-60px" });
  const locInView  = useInView(locRef,  { once: true, margin: "-60px" });

  // ✦ GSAP: Hero heading character stagger
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = heroHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".contact-word");
    gsap.fromTo(words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.09, delay: 1.1 }
    );
  }, []);

  const marqueeItems = ["Get In Touch", "Contact Us", "Chennai HQ", "IT Solutions", "24/7 Support", "Enterprise Ready", "Sniper Systems"];

  return (
    <Layout>
      {showWhiteScreen && <WhiteScreenTransition onComplete={() => setShowWhiteScreen(false)} />}

      {/* ==================== HERO ==================== */}
      <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={heroRef}>

            {/* ✦ GSAP word-stagger heading */}
            <h1
              ref={heroHeadingRef}
              className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight font-sans"
              aria-label="Contact Us"
            >
              {["Contact", "Us"].map((word, i) => (
                <span key={i} className="contact-word inline-block opacity-0 mr-[0.25em] last:mr-0">
                  {word}
                </span>
              ))}
            </h1>

            <motion.p
              className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 1.35 }}
            >
              Get in touch with Sniper Systems and Solutions. We're here to help you transform your IT infrastructure
              and drive your business forward with innovative technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ✦ GSAP Marquee — between hero and form */}
      <MarqueeTicker items={marqueeItems} />

      {/* ==================== FORM + INFO ==================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <div ref={formRef}>
              <motion.h2
                className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease }}
              >
                Send us<br />a message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* ✦ GSAP animated inputs — focus underline wipe */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.1 }}>
                  <AnimatedInput label="Name" id="name" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required placeholder="Your full name" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.2 }}>
                  <AnimatedInput label="Email" id="email" type="email" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required placeholder="your.email@company.com" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.3 }}>
                  <AnimatedInput label="Phone" id="phone" type="tel" value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234 567 890" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.4 }}>
                  <AnimatedTextarea label="Message" id="message" value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required rows={6} placeholder="Tell us about your project or inquiry..." />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.5 }}>
                  {/* ✦ GSAP elastic spring on submit click */}
                  <motion.button
                    ref={submitBtnRef}
                    type="submit"
                    onClick={handleSubmitClick}
                    className="inline-flex items-center px-12 py-4 border-2 border-gray-900 rounded-full text-gray-900 font-medium text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    SEND MESSAGE
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Contact Info — ✦ GSAP line-draw dividers */}
            <div ref={infoRef}>
              <motion.h2
                className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease }}
              >
                Get in<br />touch
              </motion.h2>

              <ContactInfoList contactInfo={contactInfo} infoInView={infoInView} />

              <motion.div
                className="mt-12 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.55 }}
              >
                <p className="text-lg text-gray-800 leading-relaxed">
                  Whether you need IT consulting, managed services, or technology infrastructure solutions,
                  our team is ready to help you achieve your business goals.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Reach out today and discover how Sniper Systems can transform your IT operations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ✦ GSAP Marquee — between form and locations */}
      <MarqueeTicker items={["Chennai", "Bangalore", "Hyderabad", "Coimbatore", "Kochi", "Gurugram", "Vijayawada", "Pan India"]} />

      {/* ==================== LOCATIONS — ✦ GSAP parallax cards ==================== */}
      <section className="relative bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={locRef}
            className="text-6xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={locInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            Visit our<br />locations
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <LocationCard key={loc.city} loc={loc} index={i} locInView={locInView} />
            ))}
          </div>

          <motion.p
            className="mt-8 text-sm text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={locInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
          >
            Sniper Systems and Solutions Pvt. Ltd. — Serving clients across India
          </motion.p>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <CTASection />

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

export default Contact;
