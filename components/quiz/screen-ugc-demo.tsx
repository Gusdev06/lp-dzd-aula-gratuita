"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"
import Image from "next/image"

interface ScreenUgcDemoProps {
  onNext: () => void
}

export function ScreenUgcDemo({ onNext }: ScreenUgcDemoProps) {
  useEffect(() => {
    const s = document.createElement("script")
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/6990bfa04be992fe7661b72e/v4/player.js"
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
      <h2 className="font-heading text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-8 text-black max-w-[500px] px-4">
        Você pode gerar vídeos e imagens <span className="text-[green]">UGC</span> [com produtos reais]👇
      </h2>

      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-6990bfa04be992fe7661b72e" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      {/* Image */}
      <div className="w-full relative mb-8 animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/7Mf0jHB.jpeg"
          alt="UGC exemplo"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Isso tá muito bom!!
      </PrimaryButton>
    </div>
  )
}
