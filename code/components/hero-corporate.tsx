"use client"

import { ArrowRight } from "lucide-react"
import { Trophy, Users, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroCorporate() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('proyectos')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('nosotros')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.jpg"
                    alt="Professional Office Background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(25,23,33)]/95 via-[rgb(32,69,80)]/90 to-[rgb(75,63,62)]/85" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {/* Large Circle - Top Right */}
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl" />

                {/* Medium Circle - Bottom Left */}
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[rgb(32,69,80)]/20 to-transparent blur-2xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgb(223,158,101) 1px, transparent 1px), linear-gradient(90deg, rgb(223,158,101) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }} />
                </div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[rgb(223,158,101)]/20 rotate-45 rounded-lg" />
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-[rgb(151,154,152)]/15 rotate-12" />

                {/* Floating Dots */}
                <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-[rgb(223,158,101)]/30" />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-[rgb(223,158,101)]/40" />
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-[rgb(151,154,152)]/25" />

                {/* Gradient Orbs with Animation */}
                <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-radial from-[rgb(223,158,101)]/5 to-transparent animate-pulse"
                    style={{ animationDuration: '4s' }} />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Badge with Decorative Line */}
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgb(223,158,101)]" />
                        <div className="px-4 py-2 bg-[rgb(223,158,101)]/20 border border-[rgb(223,158,101)]/30 rounded-md backdrop-blur-sm relative overflow-hidden">
                            {/* Badge shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"
                                style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
                            <span className="text-[rgb(223,158,101)] text-sm font-medium relative z-10">
                                Consultoría Empresarial de Excelencia
                            </span>
                        </div>
                    </div>

                    {/* Main Headline with Accent Background */}
                    <div className="relative mb-6">
                        {/* Decorative accent behind headline */}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-[rgb(223,158,101)] to-transparent rounded-full opacity-60" />

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight relative">
                            Transformamos{" "}
                            <span className="relative inline-block">
                                <span className="text-[rgb(223,158,101)]">Ideas</span>
                                {/* Underline decoration */}
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent rounded-full" />
                            </span>
                            <br />
                            en Negocios Exitosos
                        </h1>
                    </div>

                    {/* Description with decorative element */}
                    <div className="relative">
                        <p className="text-base md:text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed pl-6 border-l-2 border-[rgb(223,158,101)]/40">
                            Con más de 30 años de experiencia, impulsamos el crecimiento de tu empresa a través de
                            estrategias innovadoras en marketing, eventos y desarrollo de negocios.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <button
                            onClick={scrollToProjects}
                            className="group relative inline-flex items-center gap-2 bg-[rgb(223,158,101)] hover:bg-[rgb(200,140,85)] text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                        >
                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10">INICIA TU PROYECTO</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </button>
                        <button
                            onClick={scrollToAbout}
                            className="group relative inline-flex items-center gap-2 bg-transparent hover:bg-[rgb(223,158,101)]/10 text-white font-semibold px-8 py-4 rounded-md border-2 border-[rgb(223,158,101)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">CONOCER MÁS</span>
                        </button>
                    </div>

                    {/* Stats Cards with Enhanced Design */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
                        {/* Card 1 */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                            {/* Card accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-[rgb(223,158,101)]/20 rounded-lg group-hover:bg-[rgb(223,158,101)]/30 transition-colors">
                                    <Trophy className="w-6 h-6 text-[rgb(223,158,101)]" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">30+</div>
                                    <div className="text-sm text-gray-400">Años de Experiencia</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-[rgb(223,158,101)]/20 rounded-lg group-hover:bg-[rgb(223,158,101)]/30 transition-colors">
                                    <Users className="w-6 h-6 text-[rgb(223,158,101)]" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                                    <div className="text-sm text-gray-400">Clientes Satisfechos</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(223,158,101)] to-transparent" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-[rgb(223,158,101)]/20 rounded-lg group-hover:bg-[rgb(223,158,101)]/30 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-[rgb(223,158,101)]" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                                    <div className="text-sm text-gray-400">Proyectos Exitosos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div className="w-6 h-10 border-2 border-[rgb(223,158,101)] rounded-full flex items-start justify-center p-2 bg-[rgb(223,158,101)]/10 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-[rgb(223,158,101)] rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    )
}
