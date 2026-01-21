import { MessageSquare, Workflow, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Chatbots inteligentes",
    description:
      "Asistentes en web/WhatsApp que responden 24/7 y convierten más leads.",
    color: "cyan",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Flujos con n8n/Make que eliminan tareas manuales y conectan tus herramientas.",
    color: "violet",
  },
  {
    icon: Rocket,
    title: "MVP / SaaS con IA",
    description:
      "Prototipos y productos con IA aplicada para validar y escalar tu negocio.",
    color: "emerald",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] to-[#0f1435] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-300">Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Lo que hacemos en NIA
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Soluciones claras, tiempos cortos, impacto medible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${
                  service.color === "cyan"
                    ? "bg-cyan-400/10 border-cyan-400/30"
                    : service.color === "violet"
                      ? "bg-violet-400/10 border-violet-400/30"
                      : "bg-emerald-400/10 border-emerald-400/30"
                } border rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${
                    service.color === "cyan"
                      ? "text-cyan-400"
                      : service.color === "violet"
                        ? "text-violet-400"
                        : "text-emerald-400"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <button className="flex items-center gap-2 text-sm sm:text-base text-cyan-400 hover:gap-3 transition-all duration-300">
                <span>Saber más</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
