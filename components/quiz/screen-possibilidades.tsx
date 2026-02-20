"use client"

import { Coins, Infinity, Globe, Clock } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import Image from "next/image"

interface ScreenPossibilidadesProps {
  onNext: () => void
}

export function ScreenPossibilidades({ onNext }: ScreenPossibilidadesProps) {
  const benefits = [
    {
      icon: <Coins className="w-5 h-5 text-[#00FF88]" />,
      text: "Parcerias pagas com marcas — sem precisar de seguidores"
    },
    {
      icon: <Infinity className="w-5 h-5 text-[#00D4FF]" />,
      text: "Conteúdo ilimitado — todos os dias, sem esforço"
    },
    {
      icon: <Globe className="w-5 h-5 text-[#00FF88]" />,
      text: "Alcance global — venda pra qualquer lugar do mundo"
    },
    {
      icon: <Clock className="w-5 h-5 text-[#00D4FF]" />,
      text: "Liberdade total — trabalhe onde e quando quiser"
    }
  ]

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[26px] md:text-[28px] font-bold tracking-[-0.02em] mb-4 text-black text-balance">
        O que você conquista com sua própria influenciadora de IA:
      </h2>

      {/* Image */}
      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/EXYgsEI.jpeg"
          alt="Liberdade e possibilidades"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Benefits List */}
      <div className="w-full space-y-0 mb-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0 animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-full gradient-border flex items-center justify-center shrink-0">
              {benefit.icon}
            </div>

            {/* Text */}
            <p className="text-gray-700 text-[15px] leading-relaxed text-left">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight Block */}
      <div className="w-full bg-gradient-to-r from-[#00FF88]/5 to-[#00D4FF]/5 rounded-xl p-5 mb-8">
        <p className="text-gray-700 font-medium leading-relaxed">
          Ela não cansa. Não reclama. Não pede aumento. Não tira férias.
        </p>
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero criar a minha
      </PrimaryButton>
    </div>
  )
}
