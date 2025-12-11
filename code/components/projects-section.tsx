"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)

    const projects = [
        {
            id: 1,
            title: "PESMA",
            category: "Desarrollo Industrial",
            description: "Polígono Empresarial de San Miguel",
            year: "2023",
            image: "/pesma.jpg"
        },
        {
            id: 2,
            title: "Vista Hermosa",
            category: "Inmobiliario",
            description: "Construcción de obra residencial Vista Hermosa, Los Frailes",
            year: "2023",
            image: "/vista-hermosa.jpg"
        },
        {
            id: 3,
            title: "Foro de Proveeduría",
            category: "Eventos Corporativos",
            description: "Foro de Proveeduría",
            year: "2023",
            image: "/foro-proveeduria.jpg"
        }
    ]

    return (
        <section id="proyectos" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Orbs with animations */}
                <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-[rgb(235,237,235)]/40 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />

                {/* Animated center orb */}
                <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-radial from-[rgb(223,158,101)]/8 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(151,154,152) 1px, transparent 1px), linear-gradient(90deg, rgb(151,154,152) 1px, transparent 1px)`,
                        backgroundSize: '70px 70px'
                    }} />
                </div>

                {/* Animated Geometric Shapes */}
                <div className="absolute top-1/3 right-16 w-28 h-28 border border-[rgb(223,158,101)]/15 rotate-45 rounded-lg animate-spin" style={{ animationDuration: '25s' }} />
                <div className="absolute bottom-1/4 left-16 w-20 h-20 border-2 border-[rgb(151,154,152)]/10 -rotate-12" style={{ animation: 'float 7s ease-in-out infinite' }} />

                {/* Additional floating elements */}
                <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full border-2 border-[rgb(223,158,101)]/10" style={{ animation: 'float 9s ease-in-out infinite reverse' }} />
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-[rgb(151,154,152)]/15 rotate-12 rounded" style={{ animation: 'float 6.5s ease-in-out infinite' }} />

                {/* Floating Dots with different animations */}
                <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[rgb(223,158,101)]/25 animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-[rgb(151,154,152)]/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full bg-[rgb(223,158,101)]/30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />

                {/* Moving gradient lines */}
                <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{ animation: 'slideDown 5s ease-in-out infinite' }} />
                <div className="absolute bottom-1/4 left-0 w-px h-40 bg-gradient-to-t from-transparent via-[rgb(223,158,101)]/20 to-transparent" style={{ animation: 'slideUp 4.5s ease-in-out infinite' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title relative inline-block">
                        Proyectos que inspiran confianza
                        {/* Decorative lines */}
                        <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-2">
                            <div className="w-16 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] rounded-full" />
                            <div className="w-8 h-1 bg-[rgb(223,158,101)]/50 rounded-full" />
                        </div>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] mx-auto my-8 rounded-full" />
                    <p className="section-description">
                        A lo largo de tres décadas, hemos participado en el desarrollo y promoción de parques
                        industriales, infraestructuras estratégicas y eventos corporativos que fortalecen la
                        inversión y el crecimiento económico en México.
                    </p>
                    <p className="section-description mt-4">
                        Nuestro enfoque combina creatividad, planeación y compromiso con la excelencia.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-gradient-to-br from-[rgb(235,237,235)] to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-[rgb(151,154,152)]/10"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            {/* Top gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] via-[rgb(223,158,101)] to-transparent" />

                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(223,158,101)] to-[rgb(200,140,85)] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 relative">
                                <div className="text-sm text-[rgb(223,158,101)] font-semibold mb-2">
                                    {project.category} • {project.year}
                                </div>
                                <h3 className="text-xl font-bold text-[rgb(25,23,33)] mb-3 group-hover:text-[rgb(32,69,80)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[rgb(106,100,94)] text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[rgb(223,158,101)] opacity-5 rounded-tr-full group-hover:opacity-10 transition-opacity" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 -skew-x-12" />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="group relative bg-[rgb(223,158,101)] hover:bg-[rgb(200,140,85)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                        {/* Button shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Ver proyectos destacados</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
