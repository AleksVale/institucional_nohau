import { ExpertForm } from '@/Expert/validation'
import http from '@/lib/http'

export interface ExpertResponse {
  id: number
  instagram: string
  youtube?: string
  platforms: string
  hasProduct: string
  invoiced: number
  productLink?: string
  budget: number
  compromised: string
  searching: string
  diferential: string
  extraInfo: string
  whatsapp: string
  createdAt: Date
  updatedAt: Date
}

const create = async (data: ExpertForm) => {
  return http.post<{ success: boolean }>('/public/expert-request', data)
}

const ExpertRequestService = {
  create,
}

export default ExpertRequestService
