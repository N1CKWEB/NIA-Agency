import { Clock, CheckCircle, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorro inmediato de horas de trabajo",
  },
  {
    icon: CheckCircle,
    title: "Menos errores y mayor consistencia",
  },
  {
    icon: Zap,
    title: "Escalá sin contratar más gente",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-16 sm:py-20 md:py-24 bg-[#0f1435] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-violet-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-300">
                Beneficios
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                No vendemos tecnología, vendemos resultados
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                Optimización real de procesos, mejor atención al cliente y
                decisiones con datos. La IA trabaja para tu negocio 24/7.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 hover:border-violet-400/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-400/10 border border-violet-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                  </div>
                  <span className="text-sm sm:text-base text-white">
                    {benefit.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Case Study */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-2.5 sm:px-3 py-1 mb-4 sm:mb-6">
                <span className="text-xs text-cyan-400">Caso ejemplo</span>
              </div>

              <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                Bot + n8n para soporte
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Automatización de respuestas y clasificación de tickets. 65%
                menos tiempo de atención en el primer mes.
              </p>

              <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 text-sm sm:text-base">
                Ver demo
              </button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                    -65%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Tiempo de respuesta
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Disponibilidad
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 sm:w-72 sm:h-72 bg-violet-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
