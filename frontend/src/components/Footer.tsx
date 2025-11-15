import { Logo } from "./Logo";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#F3F4F6] border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-[#64748B] max-w-md">
              Building a circular economy through smart recycling. Turn your recyclables into rewards while protecting our environment.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#22C55E] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#22C55E] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#22C55E] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#22C55E] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation("about")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavigation("impact")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Our Impact</button></li>
              <li><button onClick={() => handleNavigation("partners")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Partners</button></li>
              <li><button onClick={() => handleNavigation("about")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Careers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation("faqs")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">FAQs</button></li>
              <li><button onClick={() => handleNavigation("contact")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Contact Us</button></li>
              <li><button onClick={() => handleNavigation("terms")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => handleNavigation("privacy")} className="text-[#64748B] hover:text-[#22C55E] transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-[#64748B]">
          <p>&copy; 2025 ReUse. All rights reserved. Built for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
}