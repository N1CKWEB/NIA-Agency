import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] to-[#0f1435] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          {/* Icon */}
          <div className="inline-flex w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-xl sm:rounded-2xl items-center justify-center mb-6 sm:mb-8 shadow-xl">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
            Llevá tu negocio al siguiente nivel con IA
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Agendá una llamada estratégica gratuita y descubrí cómo podemos
            automatizar tus procesos y escalar tu operación.
          </p>

          {/* CTA Button */}
          <button className="group bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 sm:px-12 py-3.5 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:-translate-y-1 inline-flex items-center gap-2 sm:gap-3">
            <span className="break-words">Agendá tu llamada estratégica</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0"></div>
              <span>Respuesta en 24hs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
              <span>Consultores especializados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
