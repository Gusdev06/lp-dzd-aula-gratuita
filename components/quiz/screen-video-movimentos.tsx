"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"

interface ScreenVideoMovimentosProps {
  onNext: () => void
}

export function ScreenVideoMovimentos({ onNext }: ScreenVideoMovimentosProps) {
  useEffect(() => {
    const s = document.createElement("script")
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/69912ba59256726183cd2889/v4/player.js"
    s.async = true
    document.head.appendChild(s)

    return () => {
      const existingScript = document.querySelector(`script[src="${s.src}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-8 text-black max-w-[500px] px-4 leading-tight">
        Você pode <span className="text-[green]">roubar os movimentos</span> de qualquer vídeo que já existe, e replicar com a sua influencer 👇😱
      </h2>

      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-69912ba59256726183cd2889" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Vou usar com responsabilidade!!!
      </PrimaryButton>
    </div>
  )
}
