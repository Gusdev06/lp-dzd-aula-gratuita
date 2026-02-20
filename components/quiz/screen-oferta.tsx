"use client"

import { Check, Shield, Lock, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import Image from "next/image"
import { useEffect, useState } from "react"

export function ScreenOferta() {
  const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hub.la/6MfU0miJdwxDQBHQY3Sm")

  useEffect(() => {
    // Captura os parâmetros UTM da URL atual
    const params = new URLSearchParams(window.location.search)

    // Constrói a URL do checkout com os UTMs capturados
    const checkoutParams = new URLSearchParams()
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]

    utmKeys.forEach((key) => {
      const value = params.get(key)
      if (value) {
        checkoutParams.set(key, value)
      }
    })

    if (checkoutParams.toString()) {
      setCheckoutUrl(`https://pay.hub.la/6MfU0miJdwxDQBHQY3Sm?${checkoutParams.toString()}`)
    }
  }, [])

  const comparison = [
    { item: "Contratar modelo profissional", price: "R$500" },
    { item: "Editor de vídeo freelancer", price: "R$300" },
    { item: "Produção de conteúdo", price: "R$400" },
    { item: "Ferramentas e softwares", price: "R$200" }
  ]

  const deliverables = [
    "Treinamento completo: Crie sua Influenciadora de IA do zero",
    "Estratégias validadas para crescer seu perfil no Instagram",
    "Domine o UGC: Crie vídeos que vendem no TikTok Shop e Shopee",
    "Receba em Dólar: Feche parcerias de UGC com marcas gringas",
    "Monetização: Todas as formas de lucrar com seu perfil",
    "Arsenal de Prompts Exclusivo para gerar fotos ultra-realistas"
  ]

  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 54 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer)
            return prev
          }
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { ...prev, seconds: prev.seconds - 1 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, "0")

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8 w-full max-w-full">
      {/* Green Top Banner with Timer */}
      {/* <div className="w-screen bg-[#00C62B] py-3 fixed top-0 left-0 z-50 shadow-md">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-lg md:text-xl">
          <span>{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
          <Zap className="w-5 h-5 fill-white" />
          <span>DESCONTO LIBERADO</span>
        </div>
      </div> */}

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Red Pulsing Banner */}
      <div className="w-full max-w-[400px] bg-[#D00000] rounded-xl p-4 mb-8 mx-4 animate-pulse shadow-lg border border-red-500 ">
        <div className="flex flex-col items-start text-left gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-full">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Atenção!</span>
          </div>
          <p className="text-white text-sm font-medium leading-relaxed">
            Oferta com desconto exclusivo, válido somente para hoje!
          </p>
        </div>
      </div>

      {/* User Profile Image (Mock as per reference) */}


      {/* Background effects */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.04)_0%,transparent_60%)] pointer-events-none -z-10" /> */}

      {/* Section 1 - Anchoring */}
      <h2 className="font-heading text-[24px] font-bold tracking-[-0.02em] mb-6 text-black relative">
        Quanto custaria fazer isso sozinho?
      </h2>

      {/* Comparison cards */}
      <div className="w-full space-y-2 mb-6 relative">
        {comparison.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg"
          >
            <span className="text-[black] text-sm">{item.item}</span>
            <span className="text-gray-400 text-sm line-through">{item.price}</span>
          </div>
        ))}
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-4 w-full mb-6 relative">
        <div className="flex-1 h-px gradient-bg opacity-30" />
        <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium">
          OU
        </span>
        <div className="flex-1 h-px gradient-bg opacity-30" />
      </div>

      {/* Section 2 - Product */}
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00FF88]/20 to-[#00D4FF]/20 border border-[#00FF88]/30 mb-4">
        <span className="text-[13px] font-bold text-[green] uppercase tracking-[0.12em]">
          🚀 Oferta Exclusiva de Lançamento
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-black mb-6 relative">
        O que você vai receber?
      </h3>

      {/* Image */}
      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700">
        <Image
          src="https://i.imgur.com/gKuwTmT.jpeg"
          alt="Conteúdo do treinamento"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Deliverables */}
      <div className="w-full space-y-3 mb-8 relative">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-left"
          >
            <div className="w-5 h-5 rounded-full bg-[green] flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-[white]" strokeWidth={3} />
            </div>
            <span className="text-gray-700 text-[15px]">{item}</span>
          </div>
        ))}
      </div>

      {/* Section 3 - Price Box */}
      <div className="w-full glass-strong rounded-[20px] p-8 mb-8 relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-r from-[#00FF88] via-[#00D4FF] to-[#00FF88] bg-[length:200%_100%] animate-gradient-shift opacity-50" />
        <div className="absolute inset-[1px] rounded-[19px] bg-white" />

        <div className="relative">
          {/* Original price */}
          <span className="text-gray-400 text-lg line-through">R$97</span>

          {/* Launch label */}
          {/* <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 my-4">
            <span className="text-[11px] font-semibold text-[#00FF88] uppercase tracking-[0.15em]">
              Condição Exclusiva no Grupo
            </span>
          </div> */}

          {/* Final price */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex items-end gap-2 leading-none">
              <span className="text-black text-xl mb-4 font-medium">6x de</span>
              <span className="font-mono text-[56px] md:text-[64px] font-bold text-[green]">R$5,19</span>
            </div>
            <span className="text-gray-500 text-sm font-medium">ou R$27,90 à vista</span>
          </div>

          {/* Payment info */}
          <p className="text-gray-500 text-sm">
            Oferta exclusiva de lançamento por tempo limitado.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <PrimaryButton
        href={checkoutUrl}
        large
        animated
        className="!bg-[green] !text-white mb-6"
      >
        <span>DESBLOQUEAR MEU ACESSO AGORA!!</span>
      </PrimaryButton>

      {/* Section 4 - Testimonials */}
      <div className="w-full mb-8 relative">
        <h3 className="font-heading text-2xl font-bold text-black mb-6 text-center">
          Veja o que os alunos estão dizendo
        </h3>

        <div className="space-y-4">
          {/* Testimonial 1 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700">
            <Image
              src="https://i.imgur.com/zRKXm61.jpeg"
              alt="Depoimento 1"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial 2 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700 delay-100">
            <Image
              src="https://i.imgur.com/Qew7LLK.jpeg"
              alt="Depoimento 2"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial 3 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700 delay-200">
            <Image
              src="https://i.imgur.com/tM1Lbxl.jpeg"
              alt="Depoimento 3"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 5 - Guarantee */}
      <div className="w-full glass rounded-xl p-4 mb-8 relative">
        <div className="flex items-start gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-[#00FF88]/10 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#00FF88]" />
          </div>
          <div>
            <h4 className="text-black font-semibold mb-1">Garantia de Satisfação</h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              Compra 100% segura com garantia de satisfação. Se não gostar, devolvemos seu dinheiro em até 7 dias.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 - FAQ */}
      <div className="w-full mb-8 relative">
        <h3 className="font-heading text-2xl font-bold text-white mb-6 text-center">
          Dúvidas Frequentes
        </h3>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-black font-semibold mb-2 text-[15px]">
              O que exatamente é esse treinamento?
            </h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              É um treinamento completo do zero que ensina, passo a passo, como criar Influencers de IA realistas, gerar conteúdos e vídeos prontos e usar isso para viralizar e monetizar. É método prático, não teoria.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-black font-semibold mb-2 text-[15px]">
              Preciso gastar com IA para criar minha Influencer?
            </h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              Não. Você não precisa gastar nada para criar sua Influencer de IA. Mostramos como usar IAs gratuitas para gerar sua Influencer do zero e, além disso, apresentamos ferramentas profissionais para quem quiser escalar depois. Você começa sem investimento e evolui quando fizer sentido.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-black font-semibold mb-2 text-[15px]">
              Em quanto tempo eu crio minha Influencer de IA?
            </h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              Em menos de 10 minutos, você já sai com sua Influencer de IA criada e pronta para uso. Nada de semanas estudando. É resultado imediato.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-black font-semibold mb-2 text-[15px]">
              Preciso saber algo sobre IA, edição ou marketing?
            </h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              Não. O treinamento foi criado para quem está começando do absoluto zero. Sem programação, sem edição avançada e sem linguagem técnica. Você só segue, aplica e executa.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-black font-semibold mb-2 text-[15px]">
              Dá mesmo para viralizar ou ganhar dinheiro com isso?
            </h4>
            <p className="text-[green] font-bold text-sm leading-relaxed">
              Sim. Influencers de IA já estão viralizando agora e sendo usadas para vendas, monetização, parcerias e tráfego. Mostramos como entrar antes da saturação e transformar atenção em dinheiro.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <Lock className="w-3.5 h-3.5" />
        <span>Pagamento processado com segurança via Cakto</span>
      </div>
    </div>
  )
}
