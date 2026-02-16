"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "./Navigation";
import Image from "next/image";
import niaIcon from "../../public/assets/icon.png";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const handleCalendly = () => {
    router.push("https://calendly.com/niaagency6/reunion?source=landing_nia");
  };
  return (
    <section className="relative min-h-screen bg-[#0a0e27] overflow-hidden">
      <Navigation />

      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3">
              <Image
                src={niaIcon}
                alt="NIA Icon"
                width={40}
                height={40}
                priority
              />
              <div className="h-6 w-px bg-white/20"></div>
              <span className="text-xs sm:text-sm text-gray-300">
                New Intelligence Agency
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Automatización, <br className="hidden sm:block" />
                Chatbots y <span className="text-cyan-400">
                  IA aplicada
                </span>{" "}
                para negocios reales
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl">
                En NIA transformamos procesos manuales en flujos automatizados y
                asistentes inteligentes que hacen que tu negocio funcione 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                onClick={handleCalendly}
              >
                Agendar demo gratuita
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:border-cyan-400/50">
                Ver casos
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
              <span>Ahorro de tiempo y costos desde el día 1</span>
            </div>
          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Demo preview
                  </span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl text-white">
                    Bot de atención + Automatización n8n
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    Reemplaza tareas repetitivas, responde a clientes y dispara
                    flujos de negocio automáticamente.
                  </p>
                </div>

                {/* Simulated interface */}
                <div className="mt-6 space-y-3">
                  <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-xs text-cyan-400">
                        Sistema activo
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl text-white mb-1">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">
                        Disponibilidad
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl text-white mb-1">
                        -65%
                      </div>
                      <div className="text-xs text-gray-400">
                        Tiempo atención
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl p-4 sm:p-6 shadow-2xl max-w-[200px] sm:max-w-none">
              <div className="text-white">
                <div className="text-xs sm:text-sm mb-1">
                  Inteligencia Artificial
                </div>
                <div className="text-lg sm:text-2xl font-bold">
                  para el futuro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
