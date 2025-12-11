"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <section id="contacto" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4.5s' }} />
                <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-[rgb(235,237,235)]/40 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1s' }} />

                {/* Additional floating orb */}
                <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gradient-radial from-[rgb(223,158,101)]/6 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(151,154,152) 1px, transparent 1px), linear-gradient(90deg, rgb(151,154,152) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                {/* Animated geometric shapes */}
                <div className="absolute top-1/3 right-10 w-24 h-24 border border-[rgb(223,158,101)]/15 rotate-45 rounded-lg animate-spin" style={{ animationDuration: '22s' }} />
                <div className="absolute bottom-1/4 left-10 w-20 h-20 border-2 border-[rgb(151,154,152)]/10 -rotate-12 rounded" style={{
                    animation: 'float 6s ease-in-out infinite'
                }} />

                {/* Additional floating circles */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border border-[rgb(223,158,101)]/10" style={{
                    animation: 'float 8s ease-in-out infinite reverse'
                }} />
                <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-[rgb(151,154,152)]/10" style={{
                    animation: 'float 7.5s ease-in-out infinite'
                }} />

                {/* Animated dots */}
                <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[rgb(223,158,101)]/25 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.2s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[rgb(151,154,152)]/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
                <div className="absolute top-2/3 left-1/2 w-2.5 h-2.5 rounded-full bg-[rgb(223,158,101)]/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.2s' }} />

                {/* Moving gradient lines */}
                <div className="absolute top-1/3 left-0 w-px h-36 bg-gradient-to-b from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{
                    animation: 'slideDown 4.5s ease-in-out infinite'
                }} />
                <div className="absolute bottom-1/3 right-0 w-px h-44 bg-gradient-to-t from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{
                    animation: 'slideUp 5s ease-in-out infinite', animationDelay: '0.5s'
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Construyamos juntos el siguiente gran proyecto
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto my-8 rounded-full" />
                    <p className="section-description">
                        Cuéntanos sobre tus metas y te ayudaremos a desarrollarlas con una estrategia personalizada.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-[rgb(25,23,33)] mb-6">
                            Información de Contacto
                        </h3>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-6 bg-[rgb(235,237,235)] rounded-xl hover:bg-[rgb(223,158,101)]/10 border border-[rgb(151,154,152)]/10 transition-colors">
                                <div className="p-3 bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-[rgb(25,23,33)] mb-1">Correo Electrónico</div>
                                    <a href="mailto:contacto@zonydigital.com" className="text-[rgb(106,100,94)] hover:text-[rgb(223,158,101)] transition-colors">
                                        contacto@zonydigital.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-[rgb(235,237,235)] rounded-xl hover:bg-[rgb(223,158,101)]/10 border border-[rgb(151,154,152)]/10 transition-colors">
                                <div className="p-3 bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] rounded-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-[rgb(25,23,33)] mb-1">Teléfono</div>
                                    <a href="tel:+52" className="text-[rgb(106,100,94)] hover:text-[rgb(223,158,101)] transition-colors">
                                        +52 (XXX) XXX-XXXX
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-[rgb(235,237,235)] rounded-xl hover:bg-[rgb(223,158,101)]/10 border border-[rgb(151,154,152)]/10 transition-colors">
                                <div className="p-3 bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-[rgb(25,23,33)] mb-1">Ubicación</div>
                                    <p className="text-[rgb(106,100,94)]">
                                        Calle La Tormentosa #3<br />
                                        San Miguel de Allende, Guanajuato
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-[rgb(235,237,235)] rounded-xl hover:bg-[rgb(223,158,101)]/10 border border-[rgb(151,154,152)]/10 transition-colors">
                                <div className="p-3 bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] rounded-lg">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-[rgb(25,23,33)] mb-1">Horario</div>
                                    <p className="text-[rgb(106,100,94)]">
                                        Lunes - Viernes<br />
                                        8:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-[rgb(25,23,33)] to-[rgb(32,69,80)] rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Envíanos un mensaje
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(223,158,101)] transition-all"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(223,158,101)] transition-all"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(223,158,101)] transition-all resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    required
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 flex items-center justify-center gap-2 bg-[rgb(223,158,101)] hover:bg-[rgb(200,140,85)] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar mensaje
                                </button>

                                <button
                                    type="button"
                                    onClick={() => alert('Reunión sujeta a confirmación del equipo')}
                                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-300"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Agendar reunión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
