"use client"

import { useState } from "react"
import { LeadData } from "@/types/quiz"
import { PrimaryButton } from "./primary-button"
import { User, Phone, Mail, Sparkles } from "lucide-react"

interface ScreenLeadCaptureProps {
  onSubmit: (leadData: LeadData) => void
}

export function ScreenLeadCapture({ onSubmit }: ScreenLeadCaptureProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    whatsapp: "",
    email: ""
  })

  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({})

  const formatWhatsApp = (value: string) => {
    // Remove tudo exceto números
    const numbers = value.replace(/\D/g, "")

    // Limita a 11 dígitos
    const limited = numbers.slice(0, 11)

    // Formata: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (limited.length <= 2) {
      return limited
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`
    } else if (limited.length <= 11) {
      const ddd = limited.slice(0, 2)
      const firstPart = limited.slice(2, 7)
      const secondPart = limited.slice(7)
      return `(${ddd}) ${firstPart}${secondPart ? `-${secondPart}` : ""}`
    }
    return limited
  }

  const handleChange = (field: keyof LeadData, value: string) => {
    if (field === "whatsapp") {
      setFormData(prev => ({ ...prev, [field]: formatWhatsApp(value) }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }

    // Limpa erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    const whatsappNumbers = formData.whatsapp.replace(/\D/g, "")
    if (!whatsappNumbers) {
      newErrors.whatsapp = "WhatsApp é obrigatório"
    } else if (whatsappNumbers.length < 10) {
      newErrors.whatsapp = "WhatsApp inválido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-[#0A0A0B]" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00FF88] rounded-full animate-pulse" />
      </div>

      {/* Title */}
      <h2 className="font-heading text-[28px] md:text-[32px] font-bold tracking-[-0.02em] mb-3 text-black leading-tight">
        Seu resultado está pronto!
      </h2>

      {/* Subtitle */}
      <p className="text-[#FF0000] text-base leading-relaxed mb-8 max-w-[360px]">
        Para onde enviamos seu perfil personalizado?
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-4">
        {/* Nome */}
        <div className="text-left">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`
                w-full pl-12 pr-4 py-4 rounded-xl
                bg-gray-50 border
                ${errors.name ? "border-red-500/50" : "border-gray-200"}
                text-black placeholder:text-gray-400
                focus:outline-none focus:border-[#00FF88]/50 focus:bg-white
                transition-all duration-300
              `}
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
          )}
        </div>

        {/* WhatsApp */}
        <div className="text-left">
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
              className={`
                w-full pl-12 pr-4 py-4 rounded-xl
                bg-gray-50 border
                ${errors.whatsapp ? "border-red-500/50" : "border-gray-200"}
                text-black placeholder:text-gray-400
                focus:outline-none focus:border-[#00FF88]/50 focus:bg-white
                transition-all duration-300
              `}
            />
          </div>
          {errors.whatsapp && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.whatsapp}</p>
          )}
        </div>

        {/* Email */}
        <div className="text-left">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`
                w-full pl-12 pr-4 py-4 rounded-xl
                bg-gray-50 border
                ${errors.email ? "border-red-500/50" : "border-gray-200"}
                text-black placeholder:text-gray-400
                focus:outline-none focus:border-[#00FF88]/50 focus:bg-white
                transition-all duration-300
              `}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-2">
          <PrimaryButton onClick={() => { }} large>
            VER MEU RESULTADO
          </PrimaryButton>
        </div>

        {/* Privacy */}
        <p className="text-gray-400 text-xs mt-2">
          Seus dados estão seguros. Não compartilhamos com terceiros.
        </p>
      </form>
    </div>
  )
}
