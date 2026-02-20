"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"
import Image from "next/image"


interface ScreenProvaResultadoProps {
  onNext: () => void
}

export function ScreenProvaResultado({ onNext }: ScreenProvaResultadoProps) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f7b726300fb8f8ee0296a/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // Optional: clean up script if necessary
      // document.head.removeChild(s);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 mb-6">
        <span className="text-[11px] font-semibold text-[green] uppercase tracking-[0.1em]">
          DINHEIRO REAL
        </span>
      </div>

      {/* Title */}
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-2 text-black">
        <span className="text-[green]">U$653</span> por um único vídeo.
      </h2>

      {/* Subtitle */}
      <p className="text-[#FF0000] font-bold text-base mb-6">
        E eu não precisei aparecer.
      </p>

      {/* Image */}
      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700 delay-300">
        <Image
          src="https://i.imgur.com/faYfBOI.jpeg"
          alt="Prova de resultado"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>



      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        {/* @ts-ignore */}
        <vturb-smartplayer
          id="vid-697f7b726300fb8f8ee0296a"
          style={{ display: "block", margin: "0 auto", width: "100%" }}
        />
      </div>

      {/* Description */}
      <p className="text-[green] font-bold text-base leading-relaxed mb-6 max-w-[360px]">
        Uma marca gringa pagou isso por um vídeo de 10 segundos da Olivia.
        <br /><br />
        Eu criei ela. Eu fiz o vídeo. Mas quem apareceu foi ela.
      </p>

      {/* Divider */}
      <div className="w-[40%] h-px gradient-bg opacity-30 mb-6" />

      {/* Highlight text */}
      <p className="text-black font-semibold text-lg mb-8">
        Sem câmera no meu rosto. Sem vergonha. Só resultado.
      </p>
      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Quero ver mais...
      </PrimaryButton>
    </div>
  )
}
