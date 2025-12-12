"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Equipo", href: "#equipo" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b",
        isScrolled
          ? "bg-white/95 border-[rgb(151,154,152)] shadow-sm"
          : "bg-[rgb(25,23,33)]/30 border-white/10",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#")
              }}
              className="flex items-center"
              aria-label="Zony Digital Home"
            >
              <img
                src="/zony-logo.png"
                alt="Zony Digital"
                className={cn(
                  "h-12 lg:h-14 w-auto transition-all duration-300",
                  isScrolled ? "brightness-0" : "brightness-100"
                )}
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[rgb(223,158,101)]",
                      isScrolled ? "text-[rgb(25,23,33)]" : "text-white",
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(223,158,101)] hover:bg-[rgb(200,140,85)] text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-[rgb(25,23,33)]" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-[rgb(25,23,33)]" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-white/10"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className={cn(
                      "block text-base font-medium transition-colors hover:text-[rgb(223,158,101)]",
                      isScrolled ? "text-[rgb(25,23,33)]" : "text-white",
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
