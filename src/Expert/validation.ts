import { z } from 'zod'

const requiredError = 'O campo é obrigatório'

export const ExpertSchema = z.object({
  instagram: z.string({ required_error: requiredError }).min(2, requiredError),
  youtube: z.string({ required_error: requiredError }).optional(),
  platforms: z.string({ required_error: requiredError }).min(2, requiredError),
  hasProduct: z.string({ required_error: requiredError }).min(2, requiredError),
  invoiced: z.number({ required_error: requiredError }),
  productLink: z
    .string({ required_error: requiredError })
    .url({ message: 'URL inválida' })
    .optional(),
  budget: z.number({ required_error: requiredError }),
  compromised: z
    .string({ required_error: requiredError })
    .min(2, requiredError),
  searching: z.string({ required_error: requiredError }).min(2, requiredError),
  diferential: z
    .string({ required_error: requiredError })
    .min(2, requiredError),
  extraInfo: z.string({ required_error: requiredError }).min(2, requiredError),
  whatsapp: z.string({ required_error: requiredError }).min(2, requiredError),
})

export type ExpertForm = z.infer<typeof ExpertSchema>
