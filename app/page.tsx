"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
import { ScreenAula } from "@/components/quiz/screen-aula"
import { ScreenEntrada } from "@/components/quiz/screen-entrada"
import { ScreenObjetivo } from "@/components/quiz/screen-objetivo"
import { ScreenDesafio } from "@/components/quiz/screen-desafio"
import { ScreenRevelacao } from "@/components/quiz/screen-revelacao"
import { ScreenProvaResultado } from "@/components/quiz/screen-prova-resultado"
import { ScreenUgcDemo } from "@/components/quiz/screen-ugc-demo"
import { ScreenVideosNegocios } from "@/components/quiz/screen-videos-negocios"
import { ScreenVideoMovimentos } from "@/components/quiz/screen-video-movimentos"
import { ScreenMetricas } from "@/components/quiz/screen-metricas"
import { ScreenPossibilidades } from "@/components/quiz/screen-possibilidades"
import { ScreenDecisao } from "@/components/quiz/screen-decisao"
import { ScreenOferta } from "@/components/quiz/screen-oferta"
import { ProgressBar } from "@/components/quiz/progress-bar"
import { BackButton } from "@/components/quiz/back-button"

export default function QuizFunil() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalScreens = 12

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => Math.min(prev + 1, totalScreens))
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  const goBack = () => {
    if (isTransitioning || currentScreen === 1) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => Math.max(prev - 1, 1))
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const renderScreen = () => {
    const screenProps = { onNext: goToNext }

    switch (currentScreen) {
      case 1:
        return <ScreenAula {...screenProps} />
      case 2:
        return <ScreenEntrada {...screenProps} />
      case 3:
        return <ScreenObjetivo {...screenProps} />
      case 4:
        return <ScreenDesafio {...screenProps} />
      case 5:
        return <ScreenRevelacao {...screenProps} />
      case 6:
        return <ScreenProvaResultado {...screenProps} />
      case 7:
        return <ScreenUgcDemo {...screenProps} />
      case 8:
        return <ScreenVideosNegocios {...screenProps} />
      case 9:
        return <ScreenVideoMovimentos {...screenProps} />
      case 10:
        return <ScreenPossibilidades {...screenProps} />
      case 11:
        return <ScreenDecisao {...screenProps} />
      case 12:
        return <ScreenOferta />
      default:
        return <ScreenAula {...screenProps} />
    }
  }

  return (
    <>
      {/* Utmify Pixel */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.pixelId = "699152db571e6bfb85dda290";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `
        }}
      />

      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orb effects */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF88] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* Progress bar */}
        <ProgressBar current={currentScreen} total={totalScreens} />

        {/* Back button */}
        {currentScreen > 1 && <BackButton onClick={goBack} />}

        {/* Main content */}
        <div
          ref={containerRef}
          className="relative z-10 w-full max-w-[480px] mx-auto px-5 md:px-6 pt-16 pb-12"
        >
          <div
            className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
              }`}
          >
            {renderScreen()}
          </div>
        </div>
      </main>
    </>
  )
}
