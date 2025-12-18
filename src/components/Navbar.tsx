import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const solutions = [
  { name: "AV Solutions", href: "/solutions/av-solutions", desc: "Professional audio-visual systems" },
  { name: "Device Deployment & MDM", href: "/solutions/device-deployment-mdm", desc: "Seamless device management" },
  { name: "Gifting Solution", href: "/solutions/gifting-solution", desc: "Corporate gifting made easy" },
  { name: "IT Asset Disposal", href: "/solutions/it-asset-disposal", desc: "Secure asset lifecycle management" },
  { name: "HR Solutions", href: "/solutions/hr-solutions", desc: "Streamline HR operations" },
  { name: "IT Consulting Services", href: "/solutions/it-consulting", desc: "Expert technology guidance" },
  { name: "Managed IT Services", href: "/solutions/managed-it-services", desc: "Complete IT support" },
  { name: "Payment Services", href: "/solutions/payment-services", desc: "Secure payment processing" },
  { name: "IT Infrastructure Solutions", href: "/solutions/it-infrastructure", desc: "Build robust infrastructure" },
  { name: "Networking Solutions", href: "/solutions/networking-solutions", desc: "Enterprise networking" },
];

const partners = [
  { name: "Apple", href: "/partners/apple" },
  { name: "Nvidia", href: "/partners/nvidia" },
  { name: "Microsoft", href: "/partners/microsoft" },
  { name: "Lenovo", href: "/partners/lenovo" },
  { name: "Autodesk", href: "/partners/autodesk" },
  { name: "Adobe", href: "/partners/adobe" },
  { name: "Samsung", href: "/partners/samsung" },
  { name: "HP", href: "/partners/hp" },
  { name: "Unity", href: "/partners/unity" },
  { name: "JAMF", href: "/partners/jamf" },
  { name: "Unreal Engine", href: "/partners/unreal-engine" },
  { name: "Logitech", href: "/partners/logitech" },
  { name: "Cisco", href: "/partners/cisco" },
  { name: "Asus", href: "/partners/asus" },
  { name: "Yubico", href: "/partners/yubico" },
  { name: "Dell", href: "/partners/dell" },
  { name: "Acer", href: "/partners/acer" },
];

const industries = [
  { name: "AEC", href: "/industries/aec", desc: "Architecture, Engineering & Construction" },
  { name: "Media & Entertainment", href: "/industries/media-and-entertainment", desc: "Creative production solutions" },
  { name: "AR / VR / MR / XR", href: "/industries/ar-vr-mr-xr", desc: "Immersive technology solutions" },
  { name: "Government Sector", href: "/industries/government", desc: "Public sector IT solutions" },
  { name: "IT / ITES / Infrastructure", href: "/industries/it-ites-infra", desc: "Technology infrastructure" },
  { name: "Healthcare & Pharma", href: "/industries/healthcare-pharma", desc: "Medical technology solutions" },
  { name: "Manufacturing & Automotive", href: "/industries/manufacturing-automotive", desc: "Industrial IT solutions" },
];

interface DropdownProps {
  label: string;
  items: { name: string; href: string; desc?: string }[];
  isOpen: boolean;
  onToggle: () => void;
  columns?: number;
}

const Dropdown = ({ label, items, isOpen, onToggle, columns = 3 }: DropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white hover:text-gray-200 transition-colors duration-200 group"
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm font-semibold text-white hover:text-gray-200 transition-colors duration-200 relative group"
    >
      {children}
    </a>
  );
};

const MobileDropdown = ({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: { name: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex items-center justify-between w-full py-4 px-4 text-left font-semibold text-gray-200 hover:bg-gray-800 transition-colors duration-200"
        onClick={onToggle}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-gray-300" : "text-gray-500"
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-gray-800 border-t border-gray-700">
          <div className="py-2 px-6 space-y-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-gray-400"
                onClick={() => {
                  const event = new CustomEvent("closemobilemenu");
                  window.dispatchEvent(event);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleCloseMobileMenu = () => {
      setMobileMenuOpen(false);
      closeDropdowns();
    };
    window.addEventListener("closemobilemenu", handleCloseMobileMenu as EventListener);
    return () => {
      window.removeEventListener("closemobilemenu", handleCloseMobileMenu as EventListener);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Helper function to split items into columns
  const getColumnGroups = (items: typeof solutions | typeof partners | typeof industries, columns: number) => {
    const itemsPerColumn = Math.ceil(items.length / columns);
    const groups = [];
    for (let i = 0; i < columns; i++) {
      groups.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return groups;
  };

  return (
    <>
      <div className="hidden md:block bg-gradient-to-r from-white via-stone-50 to-white text-stone-800 py-2.5 text-sm border-b border-stone-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="tel:+918939301100"
              className="flex items-center gap-2 hover:text-stone-600 transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 text-stone-500 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">+91 8939301100</span>
            </a>
            <a
              href="mailto:enquiry@sniperindia.com"
              className="flex items-center gap-2 hover:text-stone-600 transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 text-stone-500 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">enquiry@sniperindia.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-stone-700">
              <svg
                className="w-4 h-4 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold tracking-wide">ISO 9001:2015 Certified</span>
            </span>
            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
            <span className="flex items-center gap-2 text-stone-700">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-semibold tracking-wide">Trusted IT Partner</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black shadow-2xl border-b border-gray-900" : "bg-black border-b border-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              onClick={closeDropdowns}
            >
              <img
                src="https://i.ibb.co/9BNf5rZ/sniper-logo-neww.png"
                alt="Sniper India Logo"
                className="h-8 md:h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About Us</NavItem>
              <Dropdown
                label="Solutions"
                items={solutions}
                isOpen={openDropdown === "solutions"}
                onToggle={() => handleDropdownToggle("solutions")}
                columns={3}
              />
              <Dropdown
                label="Partners"
                items={partners}
                isOpen={openDropdown === "partners"}
                onToggle={() => handleDropdownToggle("partners")}
                columns={4}
              />
              <Dropdown
                label="Industries"
                items={industries}
                isOpen={openDropdown === "industries"}
                onToggle={() => handleDropdownToggle("industries")}
                columns={3}
              />
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/contact">Contact Us</NavItem>
            </div>

            {/* Mobile Contact Button */}
            <div className="hidden md:flex lg:hidden items-center">
              <a
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ====== ENHANCED DROPDOWN MENUS - DESKTOP ====== */}
        {/* Modern dropdown with smooth animations, proper spacing, and premium feel */}

        {/* Solutions Dropdown - 3 columns with descriptions */}
        {openDropdown === "solutions" && (
          <div className="absolute left-0 right-0 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Grid layout with generous spacing */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {solutions.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex flex-col gap-1.5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 ease-out"
                      onClick={closeDropdowns}
                    >
                      {/* Item title with hover effect */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                          {item.name}
                        </span>
                        {/* Subtle arrow indicator on hover */}
                        <svg
                          className="w-4 h-4 text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      {/* Description text */}
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partners Dropdown - 4 columns, compact layout */}
        {openDropdown === "partners" && (
          <div className="absolute left-0 right-0 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-10">
                {/* 4-column grid for partners */}
                <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                  {partners.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-2 p-3.5 rounded-lg hover:bg-gray-50 transition-all duration-200 ease-out"
                      onClick={closeDropdowns}
                    >
                      {/* Partner name with hover state */}
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {item.name}
                      </span>
                      {/* Subtle arrow on hover */}
                      <svg
                        className="w-3.5 h-3.5 text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industries Dropdown - 3 columns with descriptions */}
        {openDropdown === "industries" && (
          <div className="absolute left-0 right-0 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Grid with generous spacing */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {industries.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex flex-col gap-1.5 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 ease-out"
                      onClick={closeDropdowns}
                    >
                      {/* Industry title with hover effect */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                          {item.name}
                        </span>
                        {/* Arrow indicator */}
                        <svg
                          className="w-4 h-4 text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      {/* Description */}
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ====== END ENHANCED DROPDOWN MENUS ====== */}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 top-16"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-800 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="bg-black">
                <a
                  href="/"
                  className="block py-4 px-6 text-md font-semibold text-white hover:bg-gray-900 hover:text-white border-b border-gray-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block py-4 px-6 text-md font-semibold text-white hover:bg-gray-900 hover:text-white border-b border-gray-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <MobileDropdown
                  label="Solutions"
                  items={solutions}
                  isOpen={openDropdown === "mobile-solutions"}
                  onToggle={() => handleDropdownToggle("mobile-solutions")}
                />
                <MobileDropdown
                  label="Partners"
                  items={partners}
                  isOpen={openDropdown === "mobile-partners"}
                  onToggle={() => handleDropdownToggle("mobile-partners")}
                />
                <MobileDropdown
                  label="Industries"
                  items={industries}
                  isOpen={openDropdown === "mobile-industries"}
                  onToggle={() => handleDropdownToggle("mobile-industries")}
                />
                <a
                  href="/blog"
                  className="block py-4 px-6 text-md font-semibold text-white hover:bg-gray-900 hover:text-white border-b border-gray-900 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>

                {/* Mobile Contact Button */}
                <div className="p-4 border-t border-gray-800 bg-gray-800">
                  <a
                    href="/contact"
                    className="block w-full py-3 px-4 text-center text-lg font-bold text-white bg-black hover:bg-gray-900 rounded-lg transition-all duration-200 shadow-md active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Sales
                  </a>

                  {/* Mobile Contact Info */}
                  <div className="mt-4 space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span>📞</span>
                      <span>+91 8939301100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✉️</span>
                      <span>enquiry@sniperindia.com</span>
                    </div>
                    <div className="pt-2 text-xs text-gray-500">
                      ISO 9001:2015 Certified • Trusted IT Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Dropdown Overlay - Enhanced with smoother backdrop */}
      {openDropdown && !openDropdown.startsWith("mobile-") && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 animate-in fade-in duration-200"
          onClick={closeDropdowns}
        />
      )}
    </>
  );
};

export default Navbar;
