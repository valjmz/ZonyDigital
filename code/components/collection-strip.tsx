"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const defaultCollections = [
  {
    id: "Zony Torres Saeb",
    name: "Zony Torres Saeb",
    image: "/zony-torres-professional.png",
    count: "Desarrollo de negocios.",
  },
  {
    id: "Perla Torres",
    name: "Perla Torres",
    image: "/perla-torres-professional.jpg",
    count: "Psicología Organizacional.",
  },
  {
    id: "Gaby Chalela",
    name: "Gaby Chalela",
    image: "/gaby-chalela-professional.jpg",
    count: "Especialista en eventos empresariales.",
  },
  {
    id: "next level",
    name: "Rafael Palma",
    image: "/distressed-artistic-chair.png",
    count: "Dirección Creativa, Diseño y Marketing.",
  },
  {
    id: "BRAIN",
    name: "Ariel Juárez",
    image: "/green-modular-loveseat.png",
    count: "Matemáticas y Estadística Aplicada para Análisis Espacial.",
  },
  {
    id: "Consultoria Integral en calidad y Servicios",
    name: "JOSÉ ESDRAS PAHÍ TRAHYN",
    image: "/braided-rope-loveseat.png",
    count: "Sistemas Integrales de Calidad, Certificaciones del Sector Turismo.",
  },
  {
    id: "maximalist-art",
    name: "ERNESTO VALVERDE",
    image: "/colorful-patchwork-sofa.png",
    count: "especialista",
  },
  {
    id: "scandinavian-comfort",
    name: "MARCO MORA VILLEGAS",
    image: "/minimalist-boucle-loveseat.png",
    count: "especialista",
  },
  {
    id: "fellowes.studio",
    name: "ALEXIS HUGH",
    image: "/abstract-artistic-sofa.png",
    count: "urbanismo y arquitectura",
  },
]

export function CollectionStrip() {
  const [collections, setCollections] = useState(defaultCollections)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("collections")
    if (saved) {
      try {
        setCollections(JSON.parse(saved))
      } catch (e) {
        console.log("[v0] Failed to load saved collections")
      }
    }
  }, [])

  const handleImageChange = (id: string, newImage: string) => {
    const updated = collections.map((col) => (col.id === id ? { ...col, image: newImage } : col))
    setCollections(updated)
    localStorage.setItem("collections", JSON.stringify(updated))
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320
  const totalWidth = collections.length * (itemWidth + 32) - 32
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48)

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-neutral-900 text-6xl font-normal">Equipo</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-3 py-1 text-sm bg-neutral-200 hover:bg-neutral-300 rounded-md transition-colors"
              >
                {isEditing ? "Hecho" : "Editar"}
              </button>
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Contamos con un equipo de expertos y despachos asociados para cubrir todas las necesidades de nuestros
              clientes.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

                  {isEditing && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50">
                      <label className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium cursor-pointer hover:bg-neutral-200 transition-colors">
                        Cambiar Foto
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onload = (event) => {
                                const result = event.target?.result as string
                                handleImageChange(collection.id, result)
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold tracking-wider mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">← Drag to explore collections →</p>
      </div>
    </section>
  )
}
