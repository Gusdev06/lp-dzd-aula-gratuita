"use client"

import { useEffect } from "react"
import { ChevronDown, Users, BadgeCheck } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenEntradaProps {
  onNext: () => void
}

export function ScreenEntrada({ onNext }: ScreenEntradaProps) {
  useEffect(() => {
    // Load the vturb player script
    const script = document.createElement("script")
    script.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f8cbb1385ff513705f870/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logo */}
      <div className="mb-8">
        <span className="text-gray-500 font-medium text-sm">@gustagoat.ia</span>
      </div>

      {/* Badge */}
      {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border mb-8 animate-pulse">
        <BadgeCheck className="w-4 h-4 text-[#00FF88]" />
        <span className="text-xs font-medium text-black uppercase tracking-wider">
          Método Validado
        </span>
      </div> */}

      {/* Main Title */}
      <h1 className="font-heading text-[23px] md:text-[36px] font-bold leading-tight tracking-[-0.02em] mb-6 text-balance max-w-[600px] px-4 text-black">
        Quem dominar IA agora, vai dominar o mercado amanhã. <br className="hidden md:block" />
        <span className="text-[#FF0000]">Você vai ficar de fora?</span>
      </h1>



      {/* VSL Video */}
      <div className="w-full max-w-[400px] mb-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-697f8cbb1385ff513705f870" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      <div className="w-full max-w-[400px] mb-6">
        <p className="text-sm font-medium text-black leading-relaxed mb-4">
          Aprenda a criar modelos de I.A realistas, mantendo 100% o mesmo rosto, para escalar conteúdos, fortalecer sua marca e vender todos os dias sem precisar aparecer ou produzir vídeos!
        </p>
        <p className="text-sm font-bold text-black animate-pulse">
          Clique no botão para continuar 👇
        </p>
      </div>

      {/* CTA Text */}


      {/* Primary Button */}
      <PrimaryButton onClick={onNext}>
        Quero saber como
      </PrimaryButton>

      {/* Social Proof */}
      <div className="flex items-center gap-2 mt-6 text-gray-400 text-xs">
        <Users className="w-4 h-4" />
        <span>+ de 847 pessoas já criaram a delas</span>
      </div>
    </div>
  )
}
