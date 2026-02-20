"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"

interface ScreenUgcProdutosProps {
  onNext: () => void
}

export function ScreenUgcProdutos({ onNext }: ScreenUgcProdutosProps) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/6990bfa04be992fe7661b72e/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // Optional: clean up script if necessary
      // document.head.removeChild(s);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-8 text-black max-w-[360px] leading-tight">
        Você pode gerar vídeos e imagens UGC{" "}
        <span className="gradient-text">[com produtos reais]</span>👇
      </h2>

      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        {/* @ts-ignore */}
        <vturb-smartplayer
          id="vid-6990bfa04be992fe7661b72e"
          style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Continuar
      </PrimaryButton>
    </div>
  )
}
