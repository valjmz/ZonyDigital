"use client"

import { Quote } from "lucide-react"

export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Zony Digital transformó nuestra visión en realidad. Su profesionalismo y compromiso superaron nuestras expectativas en el desarrollo de nuestro parque industrial.",
            author: "Ing. Fernando López",
            company: "Grupo Industrial del Bajío",
            role: "Director General"
        },
        {
            quote: "La experiencia y creatividad del equipo fue fundamental para el éxito de nuestro evento corporativo. Una producción impecable de principio a fin.",
            author: "Lic. Patricia Morales",
            company: "Corporativo Empresarial MX",
            role: "Directora de Comunicación"
        },
        {
            quote: "Excelente aliado estratégico para nuestro proyecto inmobiliario. Su conocimiento del mercado y red de contactos fue invaluable.",
            author: "Arq. Miguel Castillo",
            company: "Desarrollos Inmobiliarios GTO",
            role: "CEO"
        },
        {
            quote: "Gracias a Zony Digital logramos conectar con proveedores clave que impulsaron nuestro crecimiento. Un equipo comprometido y profesional.",
            author: "C.P. Gabriela Hernández",
            company: "Industrias Automotrices del Centro",
            role: "Directora de Compras"
        }
    ]

    return (
        <section id="testimonios" className="section-padding bg-gradient-to-br from-[rgb(25,23,33)] via-[rgb(32,69,80)] to-[rgb(75,63,62)] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>
                <div className="absolute top-1/3 right-10 w-24 h-24 border border-[rgb(223,158,101)]/20 rotate-45 rounded-lg" />
                <div className="absolute bottom-1/4 left-10 w-20 h-20 border-2 border-white/10 -rotate-12" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Lo que nuestros clientes opinan
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto mb-8 rounded-full" />
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        La confianza se construye con resultados. Aquí algunos testimonios de empresas
                        que han crecido junto a Zony Digital.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[rgb(223,158,101)]/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Top gradient line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] via-[rgb(223,158,101)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Quote Icon */}
                            <div className="mb-6">
                                <Quote className="w-12 h-12 text-[rgb(223,158,101)] opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Quote Text */}
                            <p className="text-white text-lg leading-relaxed mb-6 italic relative z-10">
                                "{testimonial.quote}"
                            </p>

                            {/* Author Info */}
                            <div className="border-t border-white/10 pt-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>

                                    {/* Details */}
                                    <div>
                                        <div className="font-semibold text-white">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-[rgb(223,158,101)] text-sm">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -skew-x-12" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
