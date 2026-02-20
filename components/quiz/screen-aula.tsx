"use client"

import { useEffect } from "react"
import { BookOpen, ExternalLink } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenAulaProps {
    onNext: () => void
}

export function ScreenAula({ onNext }: ScreenAulaProps) {
    useEffect(() => {
        // Load the vturb player script
        const script = document.createElement("script")
        script.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/698d2dd11e643e3dce3ae1b0/v4/player.js"
        script.async = true
        document.head.appendChild(script)

        return () => {
            const existingScript = document.querySelector(`script[src="${script.src}"]`)
            if (existingScript) {
                existingScript.remove()
            }
        }
    }, [])

    return (
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 mb-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]"></span>
                </span>
                <span className="text-xs font-bold text-[#FF0000] uppercase tracking-wider">
                    Aula Gratuita
                </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-[20px] md:text-[30px] font-bold leading-tight tracking-[-0.02em] mb-6 text-balance max-w-[600px] px-2 text-black">
                Como Criar uma <span className="text-[#FF0000]">Influencer de IA</span> que Gera Renda em Dólar
            </h1>

            {/* Video Player */}
            <div className="w-full max-w-[440px] mb-8">
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<vturb-smartplayer id="vid-698d2dd11e643e3dce3ae1b0" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`
                    }}
                />
            </div>

            {/* Material de Apoio */}
            <div className="w-full max-w-[400px] mb-8">
                <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-[#00AA55]" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-sm font-bold text-black">📚 Material de Apoio da Aula</h3>
                            <p className="text-xs text-gray-500">Acesse o material complementar para acompanhar a aula</p>
                        </div>
                    </div>
                    <a
                        href="https://www.notion.so/MATERIAL-DE-APOIO-AULA-GRATUITA-2fca2ca169b6804f986df7f21053cfed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00AA55] hover:bg-[#009944] text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#00AA55]/20"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Acessar Material
                    </a>
                </div>
            </div>

            {/* CTA para próxima tela */}
            <PrimaryButton onClick={onNext}>
                VER AULA COMPLETA
            </PrimaryButton>
        </div>
    )
}
