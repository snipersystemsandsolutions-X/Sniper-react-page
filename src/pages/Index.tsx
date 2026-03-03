import { Layout } from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Clock, Lightbulb, Shield, Zap } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

import videoSrc from "@/assets/Introducing_Apple_Creator_Studio_1080P.mp4";
import imgSrc from "@/assets/sniper-logo-black.png";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.16, 1, 0.3, 1];

// ---- Animated Counter ----
const AnimatedCounter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);
  const numericMatch = target.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : null;
  const prefix = target.replace(/[\d.]+.*/, "");
  const trailingSuffix = numericValue !== null
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
            if (el) {
              el.textContent =
                prefix +
                (Number.isInteger(numericValue)
                  ? Math.round(obj.val).toLocaleString()
                  : obj.val.toFixed(0)) +
                trailingSuffix +
                suffix;
            }
          },
        });
      },
    });
    return () => st.kill();
  }, [numericValue]);

  if (numericValue === null) return <span ref={ref}>{target}</span>;
  return <span ref={ref}>{prefix}0{trailingSuffix}{suffix}</span>;
};

// ---- Parallax Image ----
const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const tween = gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className ?? ""}`}>
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover scale-110 will-change-transform" />
    </div>
  );
};

// ---- Marquee Ticker ----
const MarqueeTicker = ({ items }: { items: string[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: `-${totalWidth}px`, duration: 28, ease: "none", repeat: -1 });
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

// ---- Magnetic Button ----
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

// ---- Hero Live Clock ----


// ========================================================
// PRELOADER
// ========================================================
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLParagraphElement>(null);
  const progressObj = useRef({ val: 0 });

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.7)" }
      );
      tl.to(progressObj.current, {
        val: 100,
        duration: 1.4,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = Math.round(progressObj.current.val);
          if (barFillRef.current) barFillRef.current.style.width = `${v}%`;
          if (dotRef.current) dotRef.current.style.left = `${v}%`;
          if (trailRef.current) {
            trailRef.current.style.left = `${Math.max(0, v - 18)}%`;
            trailRef.current.style.width = `${Math.min(v, 18)}%`;
          }
          if (percentRef.current) percentRef.current.textContent = `${v}%`;
        },
      }, "-=0.2");
      tl.to(logoRef.current, { scale: 0.97, opacity: 0.7, duration: 0.25, yoyo: true, repeat: 3, ease: "sine.inOut" }, 0.5);
      tl.to(containerRef.current, {
        yPercent: -105,
        duration: 0.85,
        ease: "power3.inOut",
        delay: 0.15,
        onComplete: () => { setIsVisible(false); onComplete?.(); }
      });
    });
    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, backgroundColor: '#ffffff', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', willChange: 'transform' }}>
      <div style={{ marginBottom: '48px', opacity: 0 }} ref={logoRef as any}>
        <img ref={logoRef} src={imgSrc} alt="Sniper Logo" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
      </div>
      <div style={{ width: '200px', height: '1px', backgroundColor: '#e5e7eb', borderRadius: '2px', overflow: 'visible', position: 'relative' }}>
        <div ref={barFillRef} style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '0%', backgroundColor: '#000', borderRadius: '2px', transition: 'none' }} />
        <div ref={dotRef} style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#000', boxShadow: '0 0 8px 2px rgba(0,0,0,0.5), 0 0 20px 6px rgba(0,0,0,0.15)', transition: 'none' }} />
        <div ref={trailRef} style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translateY(-50%)', width: '0%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.25), rgba(0,0,0,0.7))', transition: 'none' }} />
      </div>
      <p ref={percentRef} style={{ color: '#111', fontSize: '11px', fontFamily: 'monospace', marginTop: '16px', letterSpacing: '0.12em' }}>0%</p>
    </div>
  );
};

// ========================================================
// BANNER SLIDER SECTION
// ========================================================
const BannerSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const banners = [
    { title: "INNOVATION AT CORE", description: "We don't just follow trends—we create them. Our solutions push boundaries and redefine what's possible.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80", link: "/services" },
    { title: "ENTERPRISE EXCELLENCE", description: "Trusted by 1800+ enterprises worldwide. We deliver solutions that scale with your ambition.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80", link: "/clients" },
    { title: "FUTURE-READY INFRASTRUCTURE", description: "Building the backbone of tomorrow's businesses with cutting-edge technology and expertise.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80", link: "/solutions" },
    { title: "SEAMLESS INTEGRATION", description: "From deployment to support, we ensure your systems work together flawlessly, every single time.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80", link: "/services" },
    { title: "COMMITTED TO YOUR SUCCESS", description: "Your goals become our mission. We're here 24/7 to make sure you never miss a beat.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80", link: "/contact" },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => setCurrentSlide((prev) => (prev + 1) % banners.length), 5000);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % banners.length); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length); setIsAutoPlaying(false); };
  const goToSlide = (index) => { setCurrentSlide(index); setIsAutoPlaying(false); };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="mb-10 sm:mb-12 md:mb-16">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            Why businesses<br />choose Sniper
          </motion.h2>
        </div>
        <motion.div className="relative" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {banners.map((banner, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                      <div className="max-w-3xl">
                        <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">{banner.title}</h3>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-normal leading-tight mb-4 sm:mb-6 md:mb-8">{banner.description}</p>
                        <Link to={banner.link} className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-white rounded-full text-white text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-all duration-300">Explore more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></motion.button>
          <motion.button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /></motion.button>
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
            {banners.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={`transition-all duration-300 rounded-full ${currentSlide === index ? "w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-white" : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white bg-opacity-50 hover:bg-opacity-75"}`} />
            ))}
          </div>
        </motion.div>
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 sm:mb-6">TRUSTED BY THE BEST</h3>
          </motion.div>
          <motion.div className="space-y-4 sm:space-y-6" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">From startups to global enterprises, organizations choose Sniper Systems because we deliver more than just IT services—we deliver peace of mind, innovation, and results that matter.</p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">With <strong>15+ years of proven excellence</strong>, we've built our reputation on one simple promise: Your success is our success.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ========================================================
// NEW TOP HERO SECTION
// ========================================================
const logoCompanies = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Adobe_Corporate_wordmark.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Adobe_Corporate_wordmark.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
];

const NewTopHeroSection = () => {
  const outerRef = useRef(null);
  const innerGridRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const outer = outerRef.current;
      const innerGrid = innerGridRef.current;
      if (!outer || !innerGrid) return;
      const outerTop = outer.getBoundingClientRect().top;
      const scrolled = -outerTop;
      const maxOuter = outer.offsetHeight - window.innerHeight;
      const maxInner = innerGrid.scrollHeight - innerGrid.clientHeight;
      if (scrolled < 0 || scrolled > maxOuter) return;
      innerGrid.scrollTop = (scrolled / maxOuter) * maxInner;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={outerRef} style={{ height: 'calc(100vh + 600px)' }}>
      <div style={{ position: 'sticky', top: 1, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <div style={{ width: '100%', maxWidth: '1380px', margin: '0 auto', padding: '0 28px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">Empowering Enterprises<br />with Cutting-Edge<br />IT Solutions</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">At <strong>Sniper Systems and Solutions Pvt Ltd</strong>, we specialize in delivering comprehensive IT solutions tailored to your business needs — from advanced infrastructure management to strategic consulting.</p>
              <MagneticLink to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-black border-2 border-white text-white hover:bg-white hover:text-black hover:border-black rounded-full font-medium text-base transition-all duration-300">
                Get started <ArrowRight className="w-4 h-4" />
              </MagneticLink>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ background: '#1f2937' }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700" style={{ background: '#1f2937' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 text-gray-400 text-xs px-4 py-1 rounded-md w-full max-w-xs text-center">www.sniperindia.com</div>
                  </div>
                </div>
                <div ref={innerGridRef} style={{ height: '740px', overflowY: 'hidden', overflowX: 'hidden', background: '#000', padding: '20px' }}>
                  <div className="grid grid-cols-4 gap-3">
                    {logoCompanies.map((company, i) => (
                      <div key={i} className="aspect-square bg-white rounded-xl flex items-center justify-center p-3 hover:bg-gray-100 hover:scale-105 transition-all duration-200 cursor-pointer group relative">
                        <img src={company.logo} alt={company.name} className="w-full h-full object-contain" style={{ maxHeight: '40px' }} />
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
                          <div className="bg-black text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">{company.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
  const lerp = (s, e, f) => s + (e - s) * f;

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
    const move = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    section.addEventListener("mousemove", move);
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    return () => { section.removeEventListener("mouseenter", enter); section.removeEventListener("mouseleave", leave); section.removeEventListener("mousemove", move); if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); };
  }, [animateCursor]);

  useEffect(() => { return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); }; }, []);

  useEffect(() => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    const onMove = (e: MouseEvent) => { const rect = btn.getBoundingClientRect(); const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3; const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3; gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: "power2.out" }); };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <>
      <div className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-150 ease-out ${cursorVisible ? "opacity-100" : "opacity-0"} ${isHoveringButton ? "w-32 h-32 bg-white text-black" : "w-24 h-24 bg-white text-black"}`} style={{ left: `${displayPosition.x}px`, top: `${displayPosition.y}px`, transform: `translate(-50%, -50%) ${cursorVisible ? (isHoveringButton ? "scale(1.3)" : "scale(1)") : "scale(0.5)"}`, transition: cursorVisible ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease' : 'all 0.3s ease', filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))' }}>
        {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
      </div>
      <div className={`fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out ${cursorVisible ? "opacity-30" : "opacity-0"} ${isHoveringButton ? "w-20 h-20 bg-white/30" : "w-16 h-16 bg-white/20"}`} style={{ left: `${displayPosition.x - velocity.current.x * 0.5}px`, top: `${displayPosition.y - velocity.current.y * 0.5}px`, transform: 'translate(-50%, -50%)', transition: 'left 0.1s linear, top 0.1s linear' }} />
      <section ref={sectionRef} className="relative bg-black text-white py-20 px-6 rounded-[4rem] mx-6 my-12 cursor-none overflow-hidden">
        <OrbitalRings />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-semibold mb-6 leading-tight text-white">Have<br />an idea?<br />We make it happen</h2>
          </div>
          <a ref={ctaBtnRef} href="/contact" className="inline-flex items-center px-12 py-4 border-2 border-white rounded-full text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 relative z-10 will-change-transform" onMouseEnter={() => setIsHoveringButton(true)} onMouseLeave={() => setIsHoveringButton(false)}>
            TELL US <span className="absolute inset-[-10px] rounded-full"></span>
          </a>
        </div>
      </section>
    </>
  );
};

// ========================================================
// CLIENT TYPES SECTION
// ========================================================
const ClientTypesSection = ({ clientTypes }) => {
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });
  return (
    <div className="mx-4 sm:mx-6 my-8 sm:my-10 md:my-12 bg-black text-white" style={{ borderRadius: '3rem' }}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20" style={{ position: 'sticky', top: 0, height: '100vh', alignSelf: 'flex-start' }}>
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">Clearly, We Stand<br />With Everyone</h2>
            <div className="w-full h-px bg-gray-700 my-6 sm:my-8"></div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider leading-tight mb-6 sm:mb-8">CLEARLY, WE STAND<br />WITH EVERYONE</h3>
            <Link to="/clients" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-700 rounded-full bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">Read more</Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 space-y-4 sm:space-y-6" ref={rightRef}>
          {clientTypes.map((client, index) => (
            <motion.div key={index} className="bg-white rounded-xl overflow-hidden" initial={{ opacity: 0, y: 50 }} animate={rightInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}>
              <img src={client.image} alt={client.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">{client.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========================================================
// BENEFITS LIST
// ========================================================
const BenefitsList = ({ benefits, benInView }: { benefits: any[]; benInView: boolean }) => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (!benInView) return;
    linesRef.current.forEach((line, i) => {
      if (!line) return;
      gsap.fromTo(line, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.3 + i * 0.12 });
    });
  }, [benInView]);
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {benefits.map((benefit, index) => (
        <motion.div key={index} className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center pb-8 sm:pb-10 md:pb-12 last:pb-0" initial={{ opacity: 0, y: 25 }} animate={benInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.09 }}>
          <div className="lg:col-span-2 flex justify-center lg:justify-start"><benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" /></div>
          <div className="lg:col-span-3 text-center lg:text-left"><p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">{benefit.label}</p></div>
          <div className="lg:col-span-7"><p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center lg:text-left">{benefit.description}</p></div>
          {index < benefits.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700 overflow-hidden">
              <div ref={el => { linesRef.current[index] = el; }} className="h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// ========================================================
// PARTNERS GRID
// ========================================================
const PartnersGrid = ({ partners, partnersInView }: { partners: any[]; partnersInView: boolean }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);
  useEffect(() => {
    if (!partnersInView || triggered.current) return;
    triggered.current = true;
    const items = gridRef.current?.querySelectorAll(".partner-item");
    if (!items) return;
    gsap.fromTo(items, { opacity: 0, y: () => gsap.utils.random(20, 50) }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: { amount: 0.8, from: "random" } });
  }, [partnersInView]);
  return (
    <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      {partners.map((partner, index) => (
        <div key={index} className="partner-item opacity-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
          <img src={partner.logo} alt={partner.name} className="h-6 sm:h-7 md:h-8 object-contain" />
        </div>
      ))}
    </div>
  );
};

// ========================================================
// SOLUTION CARD
// ========================================================
const SolutionCard = ({ solution, index }: { solution: any; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} className="grid grid-cols-1 gap-4 sm:gap-6 items-start pb-8 sm:pb-10 md:pb-12 border-b border-gray-300" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}>
      <motion.div className="w-full overflow-hidden rounded-2xl border border-gray-200" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
        <motion.img src={solution.img} alt={solution.title} className="w-full h-44 sm:h-48 object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} />
      </motion.div>
      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">{solution.title}</h3>
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed">{solution.description}</p>
      <motion.button className="inline-flex items-center w-fit px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 rounded-full text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        Read more
      </motion.button>
    </motion.div>
  );
};

// ========================================================
// MAIN INDEX PAGE
// ========================================================
const Index = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const gsapHeroHeadingRef = useRef<HTMLHeadingElement>(null);

  // GSAP word-by-word hero heading — fires after preloader
  useEffect(() => {
    if (!preloaderDone) return;
    const el = gsapHeroHeadingRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".hero-word");
    gsap.fromTo(words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.07, delay: 0.2 }
    );
  }, [preloaderDone]);

  const solutions = [
    { title: "AV Solutions", description: "Providing innovative audio-visual solutions tailored for business environments.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" },
    { title: "Cloud Solutions", description: "Delivering scalable and secure cloud services to enhance performance, flexibility, and business growth.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
    { title: "Device Deployment & MDM", description: "Managing the deployment of devices and implementing Mobile Device Management strategies.", img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80" },
    { title: "IT Asset Disposal Plans", description: "Ensuring secure and environmentally responsible disposal of IT assets.", img: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?w=600&q=80" },
    { title: "IT Consulting Services", description: "Providing expert advice to align IT strategies with business objectives.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
    { title: "Managed IT Services", description: "Offering reliable comprehensive IT support and management services.", img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80" },
    { title: "Payment Services", description: "Facilitating seamless and flexible IT financing and leasing options for businesses.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
    { title: "IT Infrastructure Solutions", description: "Designing and implementing robust IT infrastructure to support business operations.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { title: "Networking Solutions", description: "Providing networking solutions to ensure seamless connectivity and communication.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  ];

  const benefits = [
    { icon: Clock,       label: "EXPERTISE THAT KNOWS NO BOUNDS",   description: "With 15+ years of experience, our IT solutions are seamless, reliable, and tailored for businesses across any location or time zone." },
    { icon: Shield,      label: "CHALLENGES? WE'VE GOT IT COVERED", description: "\"Impossible\" isn't in our vocabulary. We deliver solutions exactly as designed—no shortcuts, no compromises, just results." },
    { icon: CheckCircle, label: "TAILORED SOLUTIONS, EVERY TIME",   description: "Every business is unique. Our IT strategies, managed services, and technology integrations are customized to fit your exact needs." },
    { icon: Lightbulb,   label: "PARTNERED WITH THE BEST",          description: "As authorized resellers of Apple, Autodesk, Adobe, Unity, and more, we combine global technology with local expertise for maximum impact." },
    { icon: Zap,         label: "SUPPORT THAT NEVER SLEEPS",        description: "Monitoring and support ensure your operations run smoothly, securely, and without interruption." },
  ];

  const clientTypes = [
    { title: "Large Organizations",             image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { title: "Mid-Enterprise & Scale-ups",      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { title: "GCC (Global Capability Centers)", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { title: "Developers",                      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
  ];

  const partners = [
    { name: "Apple",     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA",    logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo",    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg" },
    { name: "Autodesk",  logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg" },
    { name: "Cisco",     logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2024/06/14155422/image-1.png" },
    { name: "Unity",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
    { name: "Adobe",     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Unity",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png" },
    { name: "Adobe",     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Apple",     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "NVIDIA",    logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/20149/544a6120f6091d588d000048_NVLogo_2D_H/NVLogo_2D_H_0b8ebd28-4ba6-403f-864b-f5b4712a5ad6-prv.jpg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Lenovo",    logo: "https://cdn.brandfetch.io/idUM4QuKhG/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751421771798" },
    { name: "Autodesk",  logo: "https://sniperindia.com/wp-content/uploads/2025/05/Onsitego.png" },
    { name: "Cisco",     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Trimble_Logo.svg" },
    { name: "Unity",     logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Brand_Wordmark_for_SketchUp.png" },
    { name: "Adobe",     logo: "https://www.keyshot.com/wp-content/uploads/2024/07/Frame-1707478913-1.png" },
    { name: "Unity",     logo: "https://cdn.brandfetch.io/id31rkiryT/w/300/h/100/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1749280180362" },
    { name: "Adobe",     logo: "https://cdn.brandfetch.io/id59i_vTyl/w/360/h/140/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1752254441901" },
  ];

  const heroRef     = useRef(null);
  const aboutRef    = useRef(null);
  const solRef      = useRef(null);
  const benRef      = useRef(null);
  const featRef     = useRef(null);
  const statsRef    = useRef(null);
  const partnersRef = useRef(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: "-60px" });
  const aboutInView    = useInView(aboutRef,    { once: true, margin: "-60px" });
  const solInView      = useInView(solRef,      { once: true, margin: "-60px" });
  const benInView      = useInView(benRef,      { once: true, margin: "-60px" });
  const featInView     = useInView(featRef,     { once: true, margin: "-60px" });
  const statsInView    = useInView(statsRef,    { once: true, margin: "-60px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-60px" });

  const marqueeItems = ["IT Infrastructure", "Cloud Services", "Device Deployment", "Cybersecurity", "24/7 Support", "IT Consulting", "Managed Services", "AV Solutions"];

  return (
    <Layout>
      <Helmet>
        <title>Sniper | Enterprise Solutions & Innovation</title>
        <meta name="description" content="Trusted by 1800+ enterprises. Sniper provides future-ready infrastructure and seamless tech integration for modern businesses." />
        <meta name="keywords" content="Enterprise Infrastructure, Sniper Solutions, Tech Innovation, Business Scaling" />
        <link rel="canonical" href="https://sniper-tech.com" />
        <meta property="og:title" content="Sniper | Innovation at Core" />
        <meta property="og:description" content="Building the backbone of tomorrow's businesses." />
        <meta property="og:image" content="https://i.ibb.co/27S1TBy1/sniper-logo-black-4-scaled.png" />
      </Helmet>

      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

{/* ============================================================
          1. HERO SECTION — Full-bleed image + bottom-right clock panel
      ============================================================ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', width: '100%', height: '90vh', minHeight: '640px', overflow: 'hidden' }}
      >


      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src={videoSrc} type="video/mp4" />
  </video>
</div>


        videoSrc
        {/* ── FULL-BLEED BACKGROUND IMAGE ──
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt="Hero background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}

          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgb(255, 255, 255) 50%, rgba(0,0,0,0.12) 100%)',



        />
*/}
        {/* Overlay gradient — full dark wash from left */}
        <div style={{
          position: 'absolute', inset: 0,

          zIndex: 1,
        }} />

        {/* Extra gradient focused behind bottom-right card */}


        {/* ── TOP-LEFT: Live badge ── */}


        {/* ── BOTTOM-LEFT: Scroll indicator ── */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '36px',
          zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <div style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.86))' }} />
          <span style={{
            fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)',
            fontFamily: 'monospace', writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          }}>SCROLL</span>
        </div>

        {/* ── BOTTOM-RIGHT: Clock-style content overlay card ── */}
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', zIndex: 10, width: 'min(480px, calc(100vw - 64px))' }}>
          <div style={{
            background: 'rgb(0, 0, 0)',
            backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
            border: '1px solid rgba(255,255,255,0.11)',
            borderRadius: '20px', padding: '26px 30px',
            display: 'flex', flexDirection: 'column', gap: '18px',
          }}>

            {/* Row 1: Clock + timezone */}


            {/* Row 2: Heading (GSAP word-by-word) */}
            <h1
              ref={gsapHeroHeadingRef}
              aria-label="Empowering Enterprises with Cutting-Edge IT Solutions"
              style={{ margin: 0, padding: 0, lineHeight: 1.1, overflow: 'hidden' }}
            >
              {[
                { word: "Empowering",   br: false },
                { word: "Enterprises",  br: true  },
                { word: "with",         br: false },
                { word: "Cutting-Edge", br: false },
                { word: "IT",           br: false },
                { word: "Solutions",    br: false },
              ].map(({ word, br }, i) => (
                <span key={i}>
                  <span
                    className="hero-word"
                    style={{
                      display: 'inline-block',
                      opacity: 0,
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginRight: '0.22em',
                      letterSpacing: '-0.015em',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {word}
                  </span>
                  {br && <br />}
                </span>
              ))}
            </h1>

            {/* Divider */}
            <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.03))' }} />

            {/* Row 3: Description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView && preloaderDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <p style={{ margin: 0, fontSize: 'clamp(0.76rem, 1vw, 0.9rem)', color: 'rgba(255,255,255,0.58)', lineHeight: 1.68, fontFamily: 'sans-serif' }}>
                At <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>Sniper Systems and Solutions Pvt Ltd</strong>, we specialize in delivering comprehensive IT solutions tailored to your business needs. From advanced infrastructure management to strategic consulting, our team ensures your enterprise stays ahead in a rapidly evolving technological landscape.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a
                  href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 22px', background: '#ffffff', color: '#000000', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none', border: '2px solid transparent', fontFamily: 'sans-serif', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = '#fff'; el.style.borderColor = 'rgba(255,255,255,0.55)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#fff'; el.style.color = '#000'; el.style.borderColor = 'transparent'; }}
                >
                  Get started
                  <ArrowRight style={{ width: '13px', height: '13px' }} />
                </a>
                <a
                  href="/about"
                  style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)')}
                >
                  What we do →
                </a>
              </div>
            </motion.div>

            {/* Row 4: Mini stats */}


          </div>
        </div>

        {/* Pulse keyframe */}
        <style>{`
          @keyframes sniper-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(0.8); }
          }
        `}</style>
      </section>
      {/* ============================================================ */}
      {/* ============================================================ */}

      {/* 2. BANNER SLIDER */}
      <BannerSliderSection />

      {/* MARQUEE */}
      <MarqueeTicker items={marqueeItems} />

      {/* 3. NEW HERO SECTION */}
      <NewTopHeroSection />

      {/* 4. ABOUT SECTION */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center" ref={aboutRef}>
            <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96" initial={{ opacity: 0, x: -40 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              <ParallaxImage src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Technology" className="w-full h-full rounded-xl sm:rounded-2xl" />
            </motion.div>
            <motion.div className="space-y-6 sm:space-y-8" initial={{ opacity: 0, x: 40 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">Since 2009, Sniper Systems and Solutions Pvt. Ltd. has been at the forefront of delivering state-of-the-art IT solutions to businesses across India.</p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">Headquartered in Chennai, we specialize in providing comprehensive IT support services that empower organizations to achieve operational excellence and drive business growth.</p>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="inline-block">
                <a href="/about" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 rounded-full text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">What we do</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeTicker items={["AV Solutions", "Cloud", "MDM", "IT Asset Disposal", "Consulting", "Managed Services", "Networking", "Infrastructure"]} />

      {/* 5. SOLUTIONS */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" ref={solRef}>
          <div className="mb-10 sm:mb-12 md:mb-16">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{ opacity: 0, y: 50 }} animate={solInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Our solutions</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-16">
            {solutions.map((solution, index) => <SolutionCard key={index} solution={solution} index={index} />)}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <motion.section ref={benRef} className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] mx-4 sm:mx-6 my-8 sm:my-10 md:my-12" initial={{ opacity: 0, y: 60 }} animate={benInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight" initial={{ opacity: 0, y: 40 }} animate={benInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>Benefits of<br />working with us</motion.h2>
          </div>
          <BenefitsList benefits={benefits} benInView={benInView} />
        </div>
      </motion.section>

      {/* 7. FEATURED IMAGE */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" ref={featRef}>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight" initial={{ opacity: 0, y: 50 }} animate={featInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Creativity<br />meets technology</motion.h2>
          <motion.div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px]" initial={{ opacity: 0, y: 40, scale: 0.98 }} animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
            <ParallaxImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80" alt="Technology Showcase" className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* 8. STATS */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" ref={statsRef}>
          <div className="mb-10 sm:mb-12 md:mb-16">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{ opacity: 0, y: 50 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Simply Put, We Deliver<br />What Others Can't</motion.h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">SIMPLY PUT, WE DELIVER<br />WHAT OTHERS CAN'T</h3>
            </motion.div>
            <motion.div className="space-y-4 sm:space-y-6" initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">We build solutions that make a difference, and we take pride in doing it. <strong>Sniper Systems and Solutions Pvt. Ltd.</strong> is a dedicated team of experts ready to tackle the most complex IT challenges for businesses.</p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">Mainstream? Not for us. Because for Sniper, it's not just about delivering IT services—it's about <strong>solving real business problems, supporting people, and ensuring every project succeeds.</strong></p>
            </motion.div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full sm:w-auto">
              {[
                { number: "1800", suffix: "+", label: "Happy Customers" },
                { number: "5000", suffix: "+", label: "Completed Projects" },
                { number: "15",   suffix: "+", label: "Years of Experience" },
              ].map((stat, i) => (
                <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 40 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}>
                  <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-2 font-semibold"><AnimatedCounter target={stat.number} suffix={stat.suffix} /></div>
                  <p className="text-gray-600 text-base sm:text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLIENT TYPES */}
      <ClientTypesSection clientTypes={clientTypes} />

      {/* 10. PARTNERS */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex justify-center">
        <div className="max-w-4xl w-full text-left" ref={partnersRef}>
          <div className="mb-12 sm:mb-16 md:mb-20">
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight" initial={{ opacity: 0, y: 50 }} animate={partnersInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Partnering with<br />amazing teams<br />all over the world</motion.h2>
          </div>
          <PartnersGrid partners={partners} partnersInView={partnersInView} />
        </div>
      </section>

      {/* 11. CTA */}
      <CTASection />

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg" aria-label="Scroll to top" initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.6, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Index;
