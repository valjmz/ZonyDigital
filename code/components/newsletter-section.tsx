"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-8 lg:p-12 bg-card/40 backdrop-blur-md grain-texture">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  <AnimatedText text="Stay ahead of " delay={0.2} />
                  <span className="italic font-light">
                    <AnimatedText text="quiet luxury." delay={0.5} />
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Be the first to discover new collections, design insights, and exclusive access to limited pieces.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValid(true)
                      }}
                      placeholder="Enter your email address"
                      className={`w-full pl-12 pr-4 py-4 bg-background/60 backdrop-blur-sm border rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200 ${
                        !isValid ? "border-destructive/50 focus:ring-destructive/30" : "border-border"
                      }`}
                    />
                  </div>

                  {!isValid && (
                    <motion.p
                      className="text-sm text-destructive text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Please enter a valid email address
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe to Newsletter
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Welcome to KATACHI</h3>
                  <p className="text-muted-foreground">
                    Thank you for subscribing. You'll receive our next newsletter with exclusive insights and new
                    arrivals.
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-muted-foreground/70 text-center mt-6">
                We respect your privacy. Unsubscribe at any time. Read our{" "}
                <a href="#" className="underline hover:text-muted-foreground transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
