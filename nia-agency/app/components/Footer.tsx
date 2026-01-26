"use client";

import { Linkedin, Instagram, Mail } from "lucide-react";
import niaIcon from "../../public/assets/icon.png";
import Image from "next/image";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0a0e27] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src={niaIcon}
                alt="NIA Logo"
                className="h-10 sm:h-12 w-auto mb-2"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              New Intelligence Agency
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 NIA – New Intelligence Agency
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Servicios
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Chatbots inteligentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Automatización de procesos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  MVP / SaaS con IA
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Empresa
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("demos")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Demos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Proceso
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Contacto
            </h3>
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              <a
                href="https://www.linkedin.com/in/nia-agency-050a1a3a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-cyan-400/50"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-cyan-400/50"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-cyan-400/50"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
            <a
              href="mailto:contacto@nia.ai"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-all"
            >
              niaagency6@gmail.com{" "}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            Hecho con IA por NIA
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
