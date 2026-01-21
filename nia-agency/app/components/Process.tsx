import { Search, Zap, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos tu proceso y detectamos oportunidades.",
    color: "cyan",
  },
  {
    number: "2",
    icon: Zap,
    title: "Prototipo rápido",
    description: "Armamos un demo funcional en pocos días.",
    color: "violet",
  },
  {
    number: "3",
    icon: Settings,
    title: "Implementación",
    description: "Integramos con tus herramientas y medimos resultados.",
    color: "emerald",
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Escala",
    description: "Optimizamos y ampliamos a más áreas.",
    color: "orange",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative py-16 sm:py-20 md:py-24 bg-[#0a0e27] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-violet-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-300">Proceso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Cómo trabajamos
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div
                className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg ${
                  step.color === "cyan"
                    ? "bg-cyan-400 text-gray-900"
                    : step.color === "violet"
                      ? "bg-violet-400 text-white"
                      : step.color === "emerald"
                        ? "bg-emerald-400 text-gray-900"
                        : "bg-orange-400 text-gray-900"
                }`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 border rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  step.color === "cyan"
                    ? "bg-cyan-400/10 border-cyan-400/30"
                    : step.color === "violet"
                      ? "bg-violet-400/10 border-violet-400/30"
                      : step.color === "emerald"
                        ? "bg-emerald-400/10 border-emerald-400/30"
                        : "bg-orange-400/10 border-orange-400/30"
                }`}
              >
                <step.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    step.color === "cyan"
                      ? "text-cyan-400"
                      : step.color === "violet"
                        ? "text-violet-400"
                        : step.color === "emerald"
                          ? "text-emerald-400"
                          : "text-orange-400"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-1">
            Empezar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
