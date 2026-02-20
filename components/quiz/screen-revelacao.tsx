"use client"

import Image from "next/image"
import { Brain } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { useEffect, useState } from "react"

interface ScreenRevelacaoProps {
  onNext: () => void
}

export function ScreenRevelacao({ onNext }: ScreenRevelacaoProps) {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Images with reveal */}
      <div className="flex gap-3 w-full mb-8">
        {/* Image A */}
        <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="https://i.imgur.com/RfNcqjL.jpeg"
            alt="IA A"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-[#FF4466]/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-500 ${showOverlay ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="text-white text-3xl font-bold font-heading tracking-wider">IA</span>
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF4466]/30" />
        </div>

        {/* Image B */}
        <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src="https://i.imgur.com/7dknHb8.jpeg"
            alt="IA B"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-[#FF4466]/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-500 delay-200 ${showOverlay ? "opacity-100" : "opacity-0"
              }`}
          >
            <span className="text-white text-3xl font-bold font-heading tracking-wider">IA</span>
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-[#FF4466]/30" />
        </div>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full gradient-border flex items-center justify-center mb-6 animate-pulse">
        <Brain className="w-7 h-7 text-[#00FF88]" />
      </div>

      {/* Title */}
      <h2 className="font-heading text-[32px] font-bold tracking-[-0.02em] mb-4 text-black">
        As duas são IA.
      </h2>

      {/* Subtitle */}
      <p className="text-[#FF0000] font-bold text-base leading-relaxed mb-8 max-w-[360px]">
        Nenhuma delas existe. Ambas foram criadas do zero com inteligência artificial.
      </p>

      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/n9Gh4Yu.jpeg"
          alt="Luis"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Highlight Block */}
      <div className="w-full bg-[#00FF88]/10 border-l-[3px] border-[#00FF88] rounded-lg p-4 mb-8 text-left">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Uma delas é a Camila.</span> Ela tem 3 dias de vida. Mesmo assim, já faturou seus primeiros {" "}
          <span className="text-[#00B360] font-semibold">$200</span> em parcerias. Imagina em 3 meses.
        </p>
      </div>

      {/* Luis Image */}


      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Como isso é possível?
      </PrimaryButton>
    </div>
  )
}
