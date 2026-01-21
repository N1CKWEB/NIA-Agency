import { Building2, Headset, FileSearch } from "lucide-react";

const demos = [
  {
    icon: Building2,
    category: "AUTOMATIZACIÓN",
    title: "Sistema de automatización para inmobiliarias",
    description:
      "Gestión automática de leads, seguimiento de propiedades y coordinación de visitas integrado con CRM.",
    image:
      "https://images.unsplash.com/photo-1760802136542-0cefb143f1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDI0NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "cyan",
  },
  {
    icon: Headset,
    category: "AGENTE IA",
    title: "Agente de IA para Call Centers",
    description:
      "Sistema inteligente de captación y calificación de clientes potenciales con respuestas en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1715866558475-d2543c67a840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwQUklMjBoZWFkc2V0fGVufDF8fHx8MTc2OTAyNDc2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "violet",
  },
  {
    icon: FileSearch,
    category: "MVP / IA",
    title: "MVP procesamiento inteligente de documentos",
    description:
      "Extracción automática de datos desde PDFs y documentos con validación y clasificación por IA.",
    image:
      "https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHByb2Nlc3NpbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDI0NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "emerald",
  },
];

export function Demos() {
  return (
    <section
      id="demos"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0f1435] to-[#0a0e27] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-300">Demos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Ejemplos prácticos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Lo que vas a poder mostrar en reuniones desde el día 1.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-800">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-3 left-3 sm:top-4 sm:left-4 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1 ${
                    demo.color === "cyan"
                      ? "bg-cyan-400/20 border-cyan-400/40"
                      : demo.color === "violet"
                        ? "bg-violet-400/20 border-violet-400"
                        : "bg-emerald-400/20 border-emerald-400/40"
                  } border`}
                >
                  <span
                    className={`text-xs font-semibold ${
                      demo.color === "cyan"
                        ? "text-cyan-300"
                        : demo.color === "violet"
                          ? "text-violet-300"
                          : "text-emerald-300"
                    }`}
                  >
                    {demo.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {demo.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {demo.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
