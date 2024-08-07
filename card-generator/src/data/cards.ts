import { z } from 'zod'

interface GetCardsFilters {
  player_name: string | null
  minOverall: number | null
  maxOverall: number | null
  minPotential: number | null
  foot: string | null
  year: string | null
  nation: string | null
  position: string | null
}

export async function getCards(filters: GetCardsFilters) {
  console.log(filters)
}

export const cardsFiltersSchema = z.object({
  player_name: z.string().optional(),
  min_overall: z.coerce.number().optional(),
  max_overall: z.coerce.number().optional(),
  min_pac: z.coerce.number().optional(),
  max_pac: z.coerce.number().optional(),
  min_sho: z.coerce.number().optional(),
  max_sho: z.coerce.number().optional(),
  min_pas: z.coerce.number().optional(),
  max_pas: z.coerce.number().optional(),
  min_dri: z.coerce.number().optional(),
  max_dri: z.coerce.number().optional(),
  min_def: z.coerce.number().optional(),
  max_def: z.coerce.number().optional(),
  min_phy: z.coerce.number().optional(),
  max_phy: z.coerce.number().optional(),
  foot: z.string().optional(),
  year: z.string().optional(),
  nation: z.string().optional(),
  position: z.string().optional(),
})

export type CardsFiltersSchema = z.infer<typeof cardsFiltersSchema>
