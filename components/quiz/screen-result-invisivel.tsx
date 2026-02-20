"use client"

import { CheckCircle2, Eye, Video, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenResultInvisivelProps {
  onNext: () => void
  leadName: string
}

export function ScreenResultInvisivel({ onNext, leadName }: ScreenResultInvisivelProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border mb-6">
        <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
        <span className="text-xs font-medium text-black uppercase tracking-wider">
          Seu Perfil
        </span>
      </div>

      {/* Title */}
      <h2 className="font-heading text-[28px] md:text-[34px] font-bold tracking-[-0.02em] mb-3 text-black leading-tight">
        {leadName}, você é um{" "}
        <span className="gradient-text">Criador Invisível</span>
      </h2>

      {/* Subtitle */}
      <p className="text-[#FF0000] text-base leading-relaxed mb-8 max-w-[400px]">
        Você quer gerar resultados sem aparecer, sem gravar vídeos e sem todo o trabalho tradicional de criação de conteúdo.
      </p>

      {/* Result Card */}
      <div className="w-full glass rounded-[20px] p-6 mb-8">
        <h3 className="text-black font-semibold text-lg mb-5 text-left">
          O que isso significa para você:
        </h3>

        <div className="flex flex-col gap-4">
          {/* Feature 1 */}
          <div className="flex gap-3 items-start text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#00FF88]" />
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-1">
                100% Anônimo
              </h4>
              <p className="text-[#FF0000] text-sm leading-relaxed">
                Você nunca precisa aparecer. A influencer de IA faz tudo por você.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3 items-start text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center">
              <Video className="w-5 h-5 text-[#00FF88]" />
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-1">
                Zero Gravações
              </h4>
              <p className="text-[#FF0000] text-sm leading-relaxed">
                Sem câmera, sem luz, sem edição. Tudo automatizado pela IA.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3 items-start text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#00FF88]" />
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-1">
                Método Acelerado
              </h4>
              <p className="text-[#FF0000] text-sm leading-relaxed">
                Comece hoje mesmo, mesmo sem experiência ou equipamentos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-[400px]">
        <p className="text-gray-500 text-sm mb-4">
          Pronto para criar sua influencer invisível?
        </p>
        <PrimaryButton onClick={onNext} large animated>
          Continuar para o método
        </PrimaryButton>
      </div>
    </div>
  )
}
