"use client"

import { useState, useEffect } from "react"
import { Lock } from "lucide-react"

export function PasswordProtection({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    // Contraseña de acceso - puedes cambiarla aquí
    const ACCESS_PASSWORD = "ZonyDigital2024"

    useEffect(() => {
        // Verificar si ya está autenticado en esta sesión
        const auth = sessionStorage.getItem("zony_auth")
        if (auth === "authenticated") {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === ACCESS_PASSWORD) {
            sessionStorage.setItem("zony_auth", "authenticated")
            setIsAuthenticated(true)
            setError("")
        } else {
            setError("Contraseña incorrecta")
            setPassword("")
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[rgb(25,23,33)] to-[rgb(32,69,80)] flex items-center justify-center">
                <div className="text-white text-xl">Cargando...</div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[rgb(25,23,33)] to-[rgb(32,69,80)] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[rgb(223,158,101)]/10 to-transparent blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-3xl" />
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-md w-full border border-white/20 shadow-2xl relative z-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img
                            src="/zony-logo.png"
                            alt="Zony Digital"
                            className="h-20 w-auto brightness-0 invert"
                        />
                    </div>

                    {/* Lock Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-[rgb(223,158,101)]/20 rounded-full">
                            <Lock className="w-8 h-8 text-[rgb(223,158,101)]" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                        Acceso Restringido
                    </h2>
                    <p className="text-gray-300 text-center mb-8">
                        Ingresa la contraseña para acceder al sitio
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-white font-semibold mb-2">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(223,158,101)] transition-all"
                                placeholder="Ingresa la contraseña"
                                autoFocus
                            />
                            {error && (
                                <p className="mt-2 text-red-400 text-sm">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[rgb(223,158,101)] to-[rgb(200,140,85)] hover:from-[rgb(200,140,85)] hover:to-[rgb(223,158,101)] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Acceder
                        </button>
                    </form>

                    <p className="text-gray-400 text-sm text-center mt-6">
                        Si no tienes la contraseña, contacta al administrador
                    </p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}
