"use client"

import { Award, Users, Target } from "lucide-react"

export function AboutSection() {
    return (
        <section id="nosotros" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Orbs with animations */}
                <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[rgb(235,237,235)]/30 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />

                {/* Animated floating orb */}
                <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-radial from-[rgb(223,158,101)]/5 to-transparent animate-pulse" style={{ animationDuration: '5s' }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(223,158,101) 1px, transparent 1px), linear-gradient(90deg, rgb(223,158,101) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                {/* Animated Geometric Shapes */}
                <div className="absolute top-1/4 right-20 w-24 h-24 border border-[rgb(223,158,101)]/15 rotate-45 rounded animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-1/3 left-24 w-32 h-32 border-2 border-[rgb(151,154,152)]/10 rotate-12 rounded-lg" style={{ animation: 'float 6s ease-in-out infinite' }} />

                {/* Additional rotating circles */}
                <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full border-2 border-[rgb(223,158,101)]/10" style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
                <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full border border-[rgb(151,154,152)]/15" style={{ animation: 'float 7s ease-in-out infinite' }} />

                {/* Floating Dots with animations */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[rgb(223,158,101)]/20 animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-[rgb(223,158,101)]/25 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-[rgb(151,154,152)]/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />

                {/* Gradient lines */}
                <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{ animation: 'slideDown 4s ease-in-out infinite' }} />
                <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{ animation: 'slideUp 5s ease-in-out infinite' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[rgb(223,158,101)] to-[rgb(223,158,101)]" />
                        <h2 className="section-title mb-0">
                            Confianza, experiencia y creatividad en cada proyecto
                        </h2>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent via-[rgb(223,158,101)] to-[rgb(223,158,101)]" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto mb-8 rounded-full" />
                    <p className="section-description">
                        Somos un grupo de especialistas en desarrollo de negocios, proyectos inmobiliarios,
                        producción de eventos corporativos, sociales y masivos en espacios públicos, y temas legales de conformación de empresas. Nuestra misión es brindar soluciones de vanguardia adaptadas a las
                        necesidades de cada proyecto, ofreciendo innovación y personalización alineadas con los
                        objetivos y expectativas de cada cliente. Nuestra visión es ser un referente en innovación
                        y desarrollo para los sectores industrial e inmobiliario de México. Creemos en el poder de
                        las alianzas estratégicas y la comunicación efectiva para lograr resultados sostenibles y
                        de alto impacto.
                    </p>
                </div>
            </div>
        </section>
    )
}
