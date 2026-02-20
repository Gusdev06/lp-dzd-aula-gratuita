"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenObjetivoProps {
    onNext: () => void
}

export function ScreenObjetivo({ onNext }: ScreenObjetivoProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    const handleSelect = (index: number) => {
        setSelectedOption(index)
    }

    const handleNext = () => {
        if (selectedOption !== null) {
            onNext()
        }
    }

    const options = [
        "Divulgar meu negócio usando uma Influencer de IA",
        "Criar conteúdos com produtos da minha loja",
        "Fazer UGC e vender vídeos para empresas",
        "Monetizar como afiliado (TikTok Shop e Shopee)",
        "Outro"
    ]

    return (
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Title */}
            <h2 className="font-heading text-[24px] md:text-[28px] font-bold tracking-[-0.02em] mb-8 text-black leading-tight max-w-[420px]">
                Qual é a principal utilidade que você quer para sua Influencer IA?
            </h2>

            {/* Options */}
            <div className="w-full flex flex-col gap-3 mb-8">
                {options.map((option, index) => {
                    const isSelected = selectedOption === index

                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`
                relative w-full p-5 rounded-xl text-left
                transition-all duration-300 group
                ${isSelected
                                    ? "bg-[green] border-[green] shadow-[0_4px_30px_rgba(0,255,136,0.4)] scale-[1.02]"
                                    : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:scale-[1.01]"}
              `}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className={`
                  text-[15px] leading-relaxed font-medium transition-colors
                  ${isSelected ? "text-white" : "text-gray-700"}
                `}>
                                    {option}
                                </span>

                                {/* Radio/Check Circle */}
                                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full border-2
                  flex items-center justify-center transition-all duration-300
                  ${isSelected
                                        ? "border-white bg-white/20"
                                        : "border-gray-300 group-hover:border-gray-400"}
                `}>
                                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

            <PrimaryButton
                onClick={handleNext}
                disabled={selectedOption === null}
                className={selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}
            >
                Continuar
            </PrimaryButton>
        </div>
    )
}
