"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Servicios: [
      { name: "Brokerage Inmobiliario", href: "#servicios" },
      { name: "Desarrollo de Proyectos", href: "#servicios" },
      { name: "Eventos Corporativos", href: "#servicios" },
      { name: "Desarrollo de Negocios", href: "#servicios" },
    ],
    Empresa: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Equipo", href: "#equipo" },
      { name: "Testimonios", href: "#testimonios" },
    ],
    Contacto: [
      { name: "Agendar Reunión", href: "#contacto" },
      { name: "Enviar Mensaje", href: "#contacto" },
      { name: "Ubicación", href: "#contacto" },
    ],
  }

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-[rgb(25,23,33)] via-[rgb(32,69,80)] to-[rgb(75,63,62)] text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/zony-logo.png"
                alt="Zony Digital"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Más de 30 años desarrollando proyectos que impulsan la innovación industrial y empresarial en México.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-[rgb(223,158,101)]" />
                  <a href="mailto:contacto@zonydigital.com" className="hover:text-[rgb(223,158,101)] transition-colors">
                    contacto@zonydigital.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-[rgb(223,158,101)]" />
                  <span>+52 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-[rgb(223,158,101)] mt-1" />
                  <span>Calle La Tormentosa #3<br />San Miguel de Allende, Guanajuato</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[rgb(223,158,101)] hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-[rgb(223,158,101)] transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Zony Digital. Más de 30 años de experiencia. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[rgb(223,158,101)] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[rgb(223,158,101)] transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
