"use client"

import { Building2, Hammer, Calendar, Network } from "lucide-react"

export function ServicesSection() {
    const services = [
        {
            icon: Building2,
            title: "Brokerage y Promoción Inmobiliaria",
            description: "Selección de sitio, búsqueda de propiedades, promoción y venta.",
            color: "from-[rgb(25,23,33)] to-[rgb(32,69,80)]"
        },
        {
            icon: Hammer,
            title: "Desarrollo y Construcción de Proyectos",
            description: "Planeación, ejecución y gestión integral de desarrollos industriales e inmobiliarios.",
            color: "from-[rgb(32,69,80)] to-[rgb(75,63,62)]"
        },
        {
            icon: Calendar,
            title: "Producción de Eventos Corporativos y Sociales",
            description: "Conceptualización, logística y producción de experiencias memorables.",
            color: "from-[rgb(75,63,62)] to-[rgb(25,23,33)]"
        },
        {
            icon: Network,
            title: "Desarrollo de Proveedores y Negocios",
            description: "Impulso y vinculación de empresas en sectores industriales y comerciales.",
            color: "from-[rgb(32,69,80)] to-[rgb(25,23,33)]"
        }
    ]

    return (
        <section id="servicios" className="section-padding bg-[rgb(235,237,235)] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-[rgb(223,158,101)]/15 to-transparent blur-3xl" />
                <div className="absolute bottom-10 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-[rgb(32,69,80)]/10 to-transparent blur-2xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(106,100,94) 1px, transparent 1px), linear-gradient(90deg, rgb(106,100,94) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }} />
                </div>

                {/* Geometric Shapes */}
                <div className="absolute top-20 left-1/4 w-32 h-32 border border-[rgb(223,158,101)]/10 rotate-12 rounded-xl" />
                <div className="absolute bottom-40 right-1/4 w-24 h-24 border-2 border-[rgb(151,154,152)]/15 -rotate-6" />

                {/* Floating Circles */}
                <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full border-2 border-[rgb(223,158,101)]/10" />
                <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full border border-[rgb(151,154,152)]/10" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title relative inline-block">
                        Soluciones integrales para tu crecimiento empresarial
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[rgb(223,158,101)] to-transparent rounded-full" />
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto my-8 rounded-full" />
                    <p className="section-description">
                        En Zony Digital conectamos talento, estrategia y tecnología para ofrecer
                        servicios que transforman ideas en resultados tangibles.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-[rgb(151,154,152)]/10"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-95 transition-opacity duration-300`} />

                                {/* Top gradient accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent" />

                                {/* Content */}
                                <div className="relative p-8 z-10">
                                    <div className="mb-6">
                                        <div className="inline-block p-4 bg-gradient-to-br from-[rgb(223,158,101)]/10 to-[rgb(223,158,101)]/5 group-hover:bg-[rgb(223,158,101)] rounded-xl transition-all duration-300">
                                            <Icon className="w-10 h-10 text-[rgb(223,158,101)] group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[rgb(25,23,33)] group-hover:text-white mb-4 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-[rgb(106,100,94)] group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(223,158,101)] opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity" />

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -skew-x-12" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
