import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const solutions = [
  { name: "AV Solutions", href: "/solutions/av-solutions" },
  { name: "Device Deployment & MDM", href: "/solutions/device-deployment-mdm" },
  { name: "Gifting Solution", href: "/solutions/gifting-solution" },
  { name: "IT Asset Disposal", href: "/solutions/it-asset-disposal" },
  { name: "HR Solutions", href: "/solutions/hr-solutions" },
  { name: "IT Consulting Services", href: "/solutions/it-consulting" },
  { name: "Managed IT Services", href: "/solutions/managed-it-services" },
  { name: "Payment Services", href: "/solutions/payment-services" },
  { name: "IT Infrastructure Solutions", href: "/solutions/it-infrastructure" },
  { name: "Networking Solutions", href: "/solutions/networking-solutions" },
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
  { name: "AEC", href: "/industries/aec" },
  { name: "Media & Entertainment", href: "/industries/media-and-entertainment" },
  { name: "AR / VR / MR / XR", href: "/industries/ar-vr-mr-xr" },
  { name: "Government Sector", href: "/industries/government" },
  { name: "IT / ITES / Infrastructure", href: "/industries/it-ites-infra" },
  { name: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
  { name: "Manufacturing & Automotive", href: "/industries/manufacturing-automotive" },
];

interface DropdownProps {
  label: string;
  items: { name: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  columns?: number;
}

const Dropdown = ({ label, items, isOpen, onToggle, columns = 1 }: DropdownProps) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-1 bg-card border border-border rounded-lg shadow-xl z-50 animate-slide-down min-w-[220px]">
          <div className={`p-2 ${columns > 1 ? `grid grid-cols-${columns} gap-1` : ""}`} style={columns > 1 ? { gridTemplateColumns: `repeat(${columns}, minmax(180px, 1fr))` } : {}}>
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
              >
                {item.name}
              </Link>
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

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <Link
  to="/"
  className="flex items-center gap-2"
  onClick={closeDropdowns}
>
  <img
    src="https://sniperindia.com/wp-content/uploads/2025/05/sniper-logo-black-4-scaled.png"
    alt="Sniper India Logo"
    className="w-60 h-10 object-contain"
  />


</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Dropdown
              label="Solutions"
              items={solutions}
              isOpen={openDropdown === "solutions"}
              onToggle={() => handleDropdownToggle("solutions")}
              columns={2}
            />
            <Dropdown
              label="Partners"
              items={partners}
              isOpen={openDropdown === "partners"}
              onToggle={() => handleDropdownToggle("partners")}
              columns={2}
            />
            <Dropdown
              label="Industries"
              items={industries}
              isOpen={openDropdown === "industries"}
              onToggle={() => handleDropdownToggle("industries")}
            />
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 text-foreground hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="px-4 py-2 text-foreground hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <span className="font-semibold text-foreground">Solutions</span>
                <div className="mt-2 pl-4 flex flex-col gap-1">
                  {solutions.map((item) => (
                    <Link key={item.href} to={item.href} className="py-1 text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Partners */}
              <div className="px-4 py-2">
                <span className="font-semibold text-foreground">Partners</span>
                <div className="mt-2 pl-4 flex flex-col gap-1">
                  {partners.map((item) => (
                    <Link key={item.href} to={item.href} className="py-1 text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Industries */}
              <div className="px-4 py-2">
                <span className="font-semibold text-foreground">Industries</span>
                <div className="mt-2 pl-4 flex flex-col gap-1">
                  {industries.map((item) => (
                    <Link key={item.href} to={item.href} className="py-1 text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/blog" className="px-4 py-2 text-foreground hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" className="mx-4 mt-2 btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {openDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns} />
      )}
    </nav>
  );
};
