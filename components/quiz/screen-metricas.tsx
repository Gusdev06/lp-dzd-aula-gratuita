"use client"

import React from "react"
// import { Users, Handshake, Globe, DollarSign } from "lucide-react"
// import { PrimaryButton } from "./primary-button"
// import { useEffect, useState, useRef } from "react"
// import Image from "next/image"

interface ScreenMetricasProps {
  onNext: () => void
}

/*
interface MetricCardProps {
  number: string
  label: string
  icon: React.ReactNode
  delay: number
}

function MetricCard({ number, label, icon, delay }: MetricCardProps) {
  const [displayNumber, setDisplayNumber] = useState("0")
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const target = number.replace("+", "")
      const numValue = parseInt(target)
      const duration = 1500
      const steps = 60
      const increment = numValue / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= numValue) {
          setDisplayNumber(number)
          clearInterval(counter)
        } else {
          setDisplayNumber(number.includes("+") ? `+${Math.floor(current)}` : String(Math.floor(current)))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, number, delay])

  return (
    <div
      ref={cardRef}
      className="glass rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.08]"
    >
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="font-mono text-4xl font-bold gradient-text mb-2">
        {displayNumber}
      </span>
      <span className="text-[13px] text-[#8A8A8E]">{label}</span>
    </div>
  )
}
*/

export function ScreenMetricas({ onNext }: ScreenMetricasProps) {
  /*
  const metrics = [
    {
      number: "+5k",
      label: "Seguidores (IG/TikTok)",
      icon: <Users className="w-5 h-5 text-[#00FF88]" />,
      delay: 0
    },
    {
      number: "+5",
      label: "Parcerias fechadas",
      icon: <Handshake className="w-5 h-5 text-[#00D4FF]" />,
      delay: 150
    },
    {
      number: "+2",
      label: "Países alcançados",
      icon: <Globe className="w-5 h-5 text-[#00FF88]" />,
      delay: 300
    },
    {
      number: "+2k",
      label: "Dólares faturados",
      icon: <DollarSign className="w-5 h-5 text-[#00D4FF]" />,
      delay: 450
    }
  ]

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-4 text-white">
        90 dias de Olivia em{" "}
        <span className="relative">
          <span className="gradient-text">números</span>
          <span className="absolute bottom-0 left-0 right-0 h-[2px] gradient-bg" />
        </span>
        .
      </h2>

      <div className="w-full aspect-[4/5] relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="/images/oculos.png"
          alt="Olivia"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-3 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <p className="text-white/70 italic text-base leading-relaxed mb-8 max-w-[340px]">
        Enquanto eu dormia, viajava ou só curtia a vida — ela trabalhava.
      </p>

      <PrimaryButton onClick={onNext}>
        Quero esses resultados
      </PrimaryButton>
    </div>
  )
  */

  // Immediately call onNext or just return null to skip visually?
  // Since the user said "won't use it for now", returning null effectively hides it.
  // If this screen is part of a flow controlled by a parent index, it might still "show" (blank).
  // I will add a temporary button to skip in case it's needed for dev flow, or just return null.
  // Given "comment this page", returning null is the direct translation.
  return null;
}
