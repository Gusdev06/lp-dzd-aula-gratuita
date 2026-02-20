export type QuizTag = "invisivel" | "afiliado" | "empreendedor" | "neutro"

export type ProfileType = "criador-invisivel" | "afiliado-estrategico" | "empreendedor-digital"

export interface QuizOption {
  id: string
  text: string
  tag: QuizTag
}

export interface QuizQuestion {
  id: number
  title: string
  options: QuizOption[]
}

export interface QuizAnswer {
  questionId: number
  optionId: string
  tag: QuizTag
}

export interface LeadData {
  name: string
  whatsapp: string
  email: string
}

export interface QuizResult {
  profile: ProfileType
  tags: Record<QuizTag, number>
  leadData: LeadData
}
