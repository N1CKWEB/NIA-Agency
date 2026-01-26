"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import niaIcon from "../../public/assets/icon.png";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const handleCalendly = () => {
    router.push(
      "https://calendly.com/nicolasdiazgarrido649/reunion?source=landing_nia",
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e27]/95 backdrop-blur-lg border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={niaIcon}
              alt="NIA Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("demos")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Demos
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Proceso
            </button>
          </div>

          {/* Desktop CTA Button */}
          <button
            className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 text-sm lg:text-base"
            onClick={handleCalendly}
          >
            Agendar demo
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("demos")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Demos
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Proceso
            </button>
            <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Agendar demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
