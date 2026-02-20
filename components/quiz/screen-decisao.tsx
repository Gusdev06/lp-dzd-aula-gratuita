"use client"

import { PrimaryButton } from "./primary-button"

interface ScreenDecisaoProps {
  onNext: () => void
}

export function ScreenDecisao({ onNext }: ScreenDecisaoProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title */}
      <h2 className="font-heading text-[22px] md:text-[28px] font-bold tracking-[-0.02em] mb-8 text-black relative max-w-[600px] leading-tight">
        Se eu te disser que <span className="text-[#00C62B]">eu vou te entregar todo o passo a passo pronto</span> desses vídeos que você viu, te ensinar a criar sua influencer de I.A do zero, te interessa?
      </h2>

      {/* Subtitle */}
      <p className="text-black text-[15px] md:text-base leading-relaxed mb-10 relative max-w-[500px]">
        Não precisa saber nada de Inteligência Artificial, e você pode começar com ferramentas <span className="text-[#00C62B] font-bold">gratuitas</span>!
      </p>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-4 max-w-[500px]">
        {/* Yes Button */}
        <button
          onClick={onNext}
          className="w-full p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-black font-medium text-lg hover:bg-gray-50 hover:scale-[1.01] transition-all duration-300 text-left pl-8"
        >
          Óbvio, quero isso tudo!
        </button>

        {/* No Button */}
        <button
          onClick={onNext}
          className="w-full p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-black font-medium text-lg hover:bg-gray-50 hover:scale-[1.01] transition-all duration-300 text-left pl-8"
        >
          Acho que não...
        </button>
      </div>
    </div>
  )
}
