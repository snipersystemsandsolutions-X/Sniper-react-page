import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Clock, ChevronLeft, ChevronRight, Lightbulb, Shield, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// -------------------- NEW TOP HERO SECTION WITH INTERFACE SHOWCASE --------------------
const NewTopHeroSection = () => {
  const sectionRef = useRef(null);
  const rightContentRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const isRightContentScrollable = useCallback(() => {
    if (!rightContentRef.current) return false;
    const content = rightContentRef.current;
    return content.scrollHeight > content.clientHeight;
  }, []);

  const isAtBottom = useCallback(() => {
    if (!rightContentRef.current) return false;
    const content = rightContentRef.current;
    const scrollTop = content.scrollTop;
    const scrollHeight = content.scrollHeight;
    const clientHeight = content.clientHeight;
    return scrollTop + clientHeight >= scrollHeight - 5;
  }, []);

  const isAtTop = useCallback(() => {
    if (!rightContentRef.current) return true;
    const content = rightContentRef.current;
    return content.scrollTop <= 5;
  }, []);

  const wheelHandler = useCallback((e) => {
    if (!sectionRef.current || !rightContentRef.current) return;

    const section = sectionRef.current;
    const sectionRect = section.getBoundingClientRect();

    const sectionInView = sectionRect.top <= window.innerHeight / 2 &&
                         sectionRect.bottom >= window.innerHeight / 2;

    if (!sectionInView) return;

    const now = Date.now();
    if (now - lastScrollTimeRef.current < 16) return;
    lastScrollTimeRef.current = now;

    const rightContent = rightContentRef.current;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;

    const atBottom = isAtBottom();
    const atTop = isAtTop();
    const isScrollable = isRightContentScrollable();

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    if (isScrollable) {
      if (atBottom && isScrollingDown) {
        isUserScrollingRef.current = false;
        return;
      }

      if (atTop && isScrollingUp) {
        isUserScrollingRef.current = false;
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      isUserScrollingRef.current = true;

      const remainingScroll = rightContent.scrollHeight - rightContent.clientHeight - rightContent.scrollTop;

      if (isScrollingDown) {
        if (remainingScroll > 0) {
          const scrollAmount = Math.min(e.deltaY, remainingScroll);
          rightContent.scrollTop += scrollAmount;

          if (rightContent.scrollTop + rightContent.clientHeight >= rightContent.scrollHeight - 5) {
            scrollTimeoutRef.current = setTimeout(() => {
              isUserScrollingRef.current = false;
            }, 100);
          }
        }
      } else if (isScrollingUp) {
        if (rightContent.scrollTop > 0) {
          const scrollAmount = Math.min(-e.deltaY, rightContent.scrollTop);
          rightContent.scrollTop -= scrollAmount;
        }
      }
    } else {
      isUserScrollingRef.current = false;
    }
  }, [isAtBottom, isAtTop, isRightContentScrollable]);

  const touchStartHandler = useCallback((e) => {
    if (!sectionRef.current || !rightContentRef.current) return;

    const section = sectionRef.current;
    const sectionRect = section.getBoundingClientRect();
    const sectionInView = sectionRect.top <= window.innerHeight / 2 &&
                         sectionRect.bottom >= window.innerHeight / 2;

    if (sectionInView && e.touches.length === 1) {
      const touchY = e.touches[0].clientY;
      const rightContent = rightContentRef.current;
      rightContent.dataset.touchStartY = touchY;
      rightContent.dataset.touchStartScrollTop = rightContent.scrollTop;
      isUserScrollingRef.current = true;
    }
  }, []);

  const touchMoveHandler = useCallback((e) => {
    if (!sectionRef.current || !rightContentRef.current || e.touches.length !== 1) return;

    const section = sectionRef.current;
    const sectionRect = section.getBoundingClientRect();
    const sectionInView = sectionRect.top <= window.innerHeight / 2 &&
                         sectionRect.bottom >= window.innerHeight / 2;

    if (!sectionInView) return;

    const rightContent = rightContentRef.current;
    const touchY = e.touches[0].clientY;
    const touchStartY = parseFloat(rightContent.dataset.touchStartY || '0');
    const touchStartScrollTop = parseFloat(rightContent.dataset.touchStartScrollTop || '0');

    const deltaY = touchStartY - touchY;

    const atBottom = isAtBottom();
    const atTop = isAtTop();
    const isScrollable = isRightContentScrollable();

    if (isScrollable) {
      if (atBottom && deltaY > 0) {
        isUserScrollingRef.current = false;
        return;
      }

      if (atTop && deltaY < 0) {
        isUserScrollingRef.current = false;
        return;
      }

      e.preventDefault();

      let newScrollTop = touchStartScrollTop + deltaY;
      const maxScroll = rightContent.scrollHeight - rightContent.clientHeight;

      if (newScrollTop < 0) newScrollTop = 0;
      if (newScrollTop > maxScroll) newScrollTop = maxScroll;

      rightContent.scrollTop = newScrollTop;

      rightContent.dataset.touchStartY = touchY;
      rightContent.dataset.touchStartScrollTop = rightContent.scrollTop;

      if ((deltaY > 0 && newScrollTop >= maxScroll - 5) ||
          (deltaY < 0 && newScrollTop <= 5)) {
        isUserScrollingRef.current = false;
      }
    }
  }, [isAtBottom, isAtTop, isRightContentScrollable]);

  const touchEndHandler = useCallback(() => {
    isUserScrollingRef.current = false;
    if (rightContentRef.current) {
      delete rightContentRef.current.dataset.touchStartY;
      delete rightContentRef.current.dataset.touchStartScrollTop;
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e) => wheelHandler(e);
    const handleTouchStart = (e) => touchStartHandler(e);
    const handleTouchMove = (e) => touchMoveHandler(e);
    const handleTouchEnd = () => touchEndHandler();

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', touchEndHandler);
      window.removeEventListener('touchcancel', touchEndHandler);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [wheelHandler, touchStartHandler, touchMoveHandler, touchEndHandler]);
// Add a scroll listener to the right content to detect when user manually scrolls it
  useEffect(() => {
    const rightContent = rightContentRef.current;
    if (!rightContent) return;

    const handleContentScroll = () => {
      isUserScrollingRef.current = true;
    };

    rightContent.addEventListener('scroll', handleContentScroll);
    return () => {
      rightContent.removeEventListener('scroll', handleContentScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight font-sans">
                Empowering Enterprises<br />
                with Cutting-Edge IT Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                At <strong>Sniper Systems and Solutions Pvt Ltd</strong>, we specialize in delivering comprehensive IT solutions
                tailored to your business needs. From advanced infrastructure management to strategic consulting,
                our team ensures your enterprise stays ahead in a rapidly evolving technological landscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-red-700 hover:bg-black rounded-full text-white hover:text-white font-medium text-base sm:text-lg transition-all duration-300 shadow-lg shadow-white-500/30"
              >
                Get started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

            </div>
          </div>

          {/* Right Side - Logo Grid with Scroll */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Browser-like frame */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Browser Header */}
                <div className="bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 px-3 sm:px-4 py-0.5 sm:py-1 rounded-md text-gray-400 text-xs sm:text-sm max-w-md w-full text-center truncate">
                      www.sniperindia.com
                    </div>
                  </div>
                </div>

                {/* Scrollable Logo Grid Content */}
                <div
                  ref={rightContentRef}
                  className="bg-black h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-10"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ffffff #f7fafc'
                  }}
                  onWheel={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {/* 3x Grid - Responsive */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {[
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
                        bgColor: "bg-white"
                      },
                      {
                        name: "NVIDIA",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Autodesk",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Autodesk_Logo_2021.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Cisco",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Unity",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1280px-Unity_Technologies_logo.svg.png",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Adobe",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Adobe_Corporate_wordmark.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Dell",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "HP",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "AWS",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Apple",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Lenovo",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_%282015%29.svg",
                        bgColor: "bg-white"
                      },
                      {
                        name: "Microsoft",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        bgColor: "bg-white"
                      }
                    ].map((company, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg sm:rounded-xl flex items-center justify-center p-1 hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer aspect-square group"
                      >
                        <div className="relative w-full h-full flex items-center justify-center p-1.5 sm:p-2">
                          <div className={`${company.bgColor} rounded-lg w-full h-full flex items-center justify-center p-2 sm:p-3 transition-all duration-300 group-hover:scale-95`}>
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="max-h-6 sm:max-h-8 md:max-h-10 lg:max-h-12 w-auto object-contain"
                            />
                          </div>

                          {/* Company name tooltip on hover - Hidden on mobile */}
                          <div className="hidden sm:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <div className="bg-black text-white text-xs font-medium px-3 py-1 rounded whitespace-nowrap">
                              {company.name}
                            </div>
                            <div className="w-2 h-2 bg-black transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                          </div>
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


    </section>
  );
};

// -------------------- BANNER SLIDER SECTION --------------------
const BannerSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const banners = [
    {
      title: "INNOVATION AT CORE",
      description: "We don't just follow trends—we create them. Our solutions push boundaries and redefine what's possible.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
      link: "/services"
    },
    {
      title: "ENTERPRISE EXCELLENCE",
      description: "Trusted by 1800+ enterprises worldwide. We deliver solutions that scale with your ambition.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      link: "/clients"
    },
    {
      title: "FUTURE-READY INFRASTRUCTURE",
      description: "Building the backbone of tomorrow's businesses with cutting-edge technology and expertise.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
      link: "/solutions"
    },
    {
      title: "SEAMLESS INTEGRATION",
      description: "From deployment to support, we ensure your systems work together flawlessly, every single time.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
      link: "/services"
    },
    {
      title: "COMMITTED TO YOUR SUCCESS",
      description: "Your goals become our mission. We're here 24/7 to make sure you never miss a beat.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
      link: "/contact"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Why businesses<br />choose Sniper
          </h2>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                      <div className="max-w-3xl">
                        <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
                          {banner.title}
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-normal leading-tight mb-4 sm:mb-6 md:mb-8">
                          {banner.description}
                        </p>
                        <Link
                          to={banner.link}
                          className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-white rounded-full text-white text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                        >
                          Explore more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg z-10 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 shadow-lg z-10 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-white"
                    : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 sm:mb-6">
              TRUSTED BY THE BEST
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              From startups to global enterprises, organizations choose Sniper Systems because we deliver more than just IT services—we deliver peace of mind, innovation, and results that matter.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              With <strong>15+ years of proven excellence</strong>, we've built our reputation on one simple promise: Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// -------------------- CTA SECTION WITH SMOOTH CUSTOM CURSOR --------------------
const CTASection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const animateCursor = useCallback(() => {
    if (!cursorVisible || isMobile) return;

    const smoothFactor = isHoveringButton ? 0.2 : 0.1;
    const newX = lerp(displayPosition.x, cursorPosition.x, smoothFactor);
    const newY = lerp(displayPosition.y, cursorPosition.y, smoothFactor);

    velocity.current.x = newX - displayPosition.x;
    velocity.current.y = newY - displayPosition.y;

    setDisplayPosition({ x: newX, y: newY });
    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, [cursorVisible, cursorPosition, displayPosition, isHoveringButton, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleMouseEnter = () => {
      setCursorVisible(true);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
      setIsHoveringButton(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateCursor, isMobile]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Custom Cursor - Only show on desktop */}
      {!isMobile && (
        <>
          <div
            className={`fixed pointer-events-none z-50 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm transition-all duration-150 ease-out ${
              cursorVisible ? "opacity-100" : "opacity-0"
            } ${
              isHoveringButton
                ? "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white text-black"
                : "w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-white text-black"
            }`}
            style={{
              left: `${displayPosition.x}px`,
              top: `${displayPosition.y}px`,
              transform: `translate(-50%, -50%) ${
                cursorVisible
                  ? (isHoveringButton ? "scale(1.3)" : "scale(1)")
                  : "scale(0.5)"
              }`,
              transition: cursorVisible
                ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease'
                : 'all 0.3s ease',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))',
            }}
          >
            {isHoveringButton ? "CLICK ME!" : "LET'S GO!"}
          </div>

          <div
            className={`fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out ${
              cursorVisible ? "opacity-30" : "opacity-0"
            } ${isHoveringButton ? "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/30" : "w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16 bg-white/20"}`}
            style={{
              left: `${displayPosition.x - velocity.current.x * 0.5}px`,
              top: `${displayPosition.y - velocity.current.y * 0.5}px`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 0.1s linear, top 0.1s linear',
            }}
          />
        </>
      )}

      <section
        ref={sectionRef}
        className={`bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] mx-4 sm:mx-6 my-8 sm:my-10 md:my-12 ${!isMobile ? 'cursor-none' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 sm:mb-6 leading-tight">
              Have an idea?<br />We make it happen
            </h2>
          </div>
          <Link
            ref={buttonRef}
            to="/contact"
            className="inline-flex items-center px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 border-2 border-white rounded-full text-white font-medium text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 relative z-10"
            onMouseEnter={() => !isMobile && setIsHoveringButton(true)}
            onMouseLeave={() => !isMobile && setIsHoveringButton(false)}
          >
            TELL US
            <span className="absolute inset-[-10px] rounded-full"></span>
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
      {/* NEW TOP HERO SECTION */}
      <NewTopHeroSection />

      {/* Original Hero Section */}
<section className="relative bg-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden -mt-28 sm:-mt-36 md:-mt-52">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight font-sans">
              Empowering Enterprises<br />
              with Cutting-Edge IT Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed px-4">
              At <strong>Sniper Systems and Solutions Pvt Ltd</strong>, we specialize in delivering comprehensive IT solutions
              tailored to your business needs. From advanced infrastructure management to strategic consulting,
              our team ensures your enterprise stays ahead in a rapidly evolving technological landscape.
            </p>
          </div>

          <div className="max-w-6xl mx-auto pt-8 sm:pt-10 md:pt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                alt="Modern Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <div className="bg-black bg-opacity-50 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                  <span className="text-xs sm:text-sm font-medium">SNIPER SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Slider Section */}
      <BannerSliderSection />

      {/* About Section with Video */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Since 2009, Sniper Systems and Solutions Pvt. Ltd. has been at the forefront of delivering
                  state-of-the-art IT solutions to businesses across India.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Headquartered in Chennai, we specialize in providing comprehensive IT support services that
                  empower organizations to achieve operational excellence and drive business growth.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 rounded-full text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                What we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 sm:gap-6 items-start pb-8 sm:pb-10 md:pb-12 border-b border-gray-300"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {solution.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  {solution.description}
                </p>

                <button
                  className="inline-flex items-center w-fit px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 rounded-full text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] mx-4 sm:mx-6 my-8 sm:my-10 md:my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              Benefits of<br />working with us
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center pb-8 sm:pb-10 md:pb-12 border-b border-gray-700 last:border-0">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="lg:col-span-3 text-center lg:text-left">
                  <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {benefit.label}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center lg:text-left">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight">
            Creativity<br />meets technology
          </h2>
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt="Technology Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Simply Put, We Deliver<br />What Others Can't
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                SIMPLY PUT, WE DELIVER<br />WHAT OTHERS CAN'T
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                We build solutions that make a difference, and we take pride in doing it. <strong>Sniper Systems and Solutions Pvt. Ltd.</strong> is a dedicated team of experts ready to tackle the most complex IT challenges for businesses.
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Mainstream? Not for us. Because for Sniper, it's not just about delivering IT services—it's about <strong>solving real business problems, supporting people, and ensuring every project succeeds.</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full sm:w-auto">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-2 font-semibold">1800+</div>
                <p className="text-gray-600 text-base sm:text-lg">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-2 font-semibold">5000+</div>
                <p className="text-gray-600 text-base sm:text-lg">Completed Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-2 font-semibold">15+</div>
                <p className="text-gray-600 text-base sm:text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="min-h-screen bg-black text-white flex flex-col lg:flex-row rounded-3xl sm:rounded-[3rem] md:rounded-[4rem] mx-4 sm:mx-6 my-8 sm:my-10 md:my-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              Clearly, We Stand<br />With Everyone
            </h2>
            <div className="w-full h-px bg-gray-700 my-6 sm:my-8"></div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider leading-tight mb-6 sm:mb-8">
              CLEARLY, WE STAND<br />WITH EVERYONE
            </h3>
            <Link to="/clients" className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-700 rounded-full bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Read more
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 space-y-4 sm:space-y-6 overflow-y-auto">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <img src={client.image} alt={client.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {client.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex justify-center">
        <div className="max-w-4xl w-full text-left">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Partnering with<br />amazing teams<br />all over the world
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-6 sm:h-7 md:h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Custom Cursor */}
      <CTASection />

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90" />
        </button>
      )}
    </Layout>
  );
};

export default Index;
