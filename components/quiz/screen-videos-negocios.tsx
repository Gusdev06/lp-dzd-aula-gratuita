"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"
import Image from "next/image"

interface ScreenVideosNegociosProps {
  onNext: () => void
}

export function ScreenVideosNegocios({ onNext }: ScreenVideosNegociosProps) {
  useEffect(() => {
    const s = document.createElement("script")
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/699111929256726183ccfd1d/v4/player.js"
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
        Você Cria Vídeos Assim Para <span className="text-[green]">QUALQUER Negócio</span> e Vende Por <span className="text-[green]">R$500+</span> Cada
      </h2>

      {/* Image 1 */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/ku367IZ.jpeg"
          alt="Vídeos para negócios"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Image 2 */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/NdVzUml.jpeg"
          alt="Exemplos de vídeos"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-699111929256726183ccfd1d" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero muito aprender!!
      </PrimaryButton>
    </div>
  )
}
