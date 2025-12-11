"use client"

import { Linkedin } from "lucide-react"

export function TeamSection() {
    const team = [
        {
            name: "Zonia Torres Saeb",
            role: "Desarrollo de Negocios",
            bio: "Experta en desarrollo de negocios, marketing estratégico y producción de eventos masivos para la promoción de inversiones.",
            initials: "ZT"
        },
        {
            name: "Perla Torres",
            role: "Psicología Organizacional",
            bio: "Especialista en Psicología Organizacional, People Analytics, automatización de RR.HH. y capacitación certificada.",
            initials: "PT"
        },
        {
            name: "Gabby Chalela",
            role: "CEO Chalela Events",
            bio: "CEO de Chalela Events, experta en diseño y logística de eventos empresariales exclusivos con alcance nacional.",
            initials: "GC"
        },
        {
            name: "Rafael Palma",
            role: "Director Creativo",
            bio: "Director Creativo enfocado en branding, producción audiovisual y montaje integral de ferias y exposiciones.",
            initials: "RP"
        },
        {
            name: "Ariel Juárez",
            role: "Consultor Big Data",
            bio: "Consultor experto en Big Data, estadística aplicada y planeación estratégica tecnológica para toma de decisiones.",
            initials: "AJ"
        },
        {
            name: "José Esdras Pahí Trahyn",
            role: "Sistemas de Calidad",
            bio: "Especialista en Sistemas de Calidad, certificaciones turísticas y normatividad STPS para la seguridad laboral.",
            initials: "JE"
        }
    ]

    const colors = [
        "from-[rgb(25,23,33)] to-[rgb(32,69,80)]",
        "from-[rgb(32,69,80)] to-[rgb(75,63,62)]",
        "from-[rgb(75,63,62)] to-[rgb(25,23,33)]",
        "from-[rgb(25,23,33)] to-[rgb(75,63,62)]",
        "from-[rgb(32,69,80)] to-[rgb(25,23,33)]",
        "from-[rgb(75,63,62)] to-[rgb(32,69,80)]"
    ]

    return (
        <section id="equipo" className="section-padding bg-[rgb(235,237,235)] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-[rgb(223,158,101)]/15 to-transparent blur-3xl" />
                <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[rgb(32,69,80)]/10 to-transparent blur-2xl" />
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(106,100,94) 1px, transparent 1px), linear-gradient(90deg, rgb(106,100,94) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }} />
                </div>
                <div className="absolute top-1/4 left-20 w-24 h-24 border border-[rgb(223,158,101)]/10 rotate-12 rounded-xl" />
                <div className="absolute bottom-1/3 right-20 w-32 h-32 border-2 border-[rgb(151,154,152)]/15 -rotate-6" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Liderazgo y compromiso que generan resultados
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto my-8 rounded-full" />
                    <p className="section-description">
                        Nuestro equipo está conformado por profesionales con amplia trayectoria en negocios,
                        arquitectura, relaciones públicas y comunicación. Cada proyecto se construye con una visión colaborativa y humana
                        que garantiza calidad, innovación y cercanía con nuestros clientes.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-[rgb(151,154,152)]/10"
                        >
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent" />

                            {/* Avatar */}
                            <div className="relative h-80 flex items-center justify-center overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]}`} />
                                <div className="relative z-10 text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] flex items-center justify-center border-4 border-white shadow-xl">
                                        <span className="text-4xl font-bold text-white">
                                            {member.initials}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-[rgb(223,158,101)] font-semibold">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="p-6 bg-white relative">
                                <p className="text-[rgb(106,100,94)] text-center leading-relaxed mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center">
                                    <button className="p-2 hover:bg-[rgb(223,158,101)]/10 rounded-full transition-colors">
                                        <Linkedin className="w-5 h-5 text-[rgb(223,158,101)]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
