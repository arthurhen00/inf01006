import { api } from '@/lib/api'
import { z } from 'zod'

export async function getCards(filters: CardsFiltersSchema) {
  const response = await api.post('/players/filtered', {
    name: filters.player_name,
    min_overall: filters.min_overall,
    max_overall: filters.max_overall,
  })

  return response.data
}

const emptyStringOrUndefineToNull = (value: string | undefined) => {
  return value === 'any' || value === '' || value === undefined ? null : value
}

export const cardsFiltersSchema = z.object({
  player_name: z.string().optional().nullable(),
  min_overall: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_overall: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_pac: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_pac: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_sho: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_sho: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_pas: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_pas: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_dri: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_dri: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_def: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_def: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  min_phy: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  max_phy: z.preprocess(
    (val) => emptyStringOrUndefineToNull(val as string),
    z.coerce.number().min(0).max(100).optional().nullable(),
  ),
  foot: z.preprocess((val) => emptyStringOrUndefineToNull(val as string), z.string().optional().nullable()),
  year: z.preprocess((val) => emptyStringOrUndefineToNull(val as string), z.coerce.number().optional().nullable()),
  nation: z.preprocess((val) => emptyStringOrUndefineToNull(val as string), z.string().optional().nullable()),
  position: z.preprocess((val) => emptyStringOrUndefineToNull(val as string), z.string().optional().nullable()),
})

export type CardsFiltersSchema = z.infer<typeof cardsFiltersSchema>
