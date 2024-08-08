import { api } from '@/lib/api'
import { z } from 'zod'

interface Nation {
  nationality_id: number
  nationality_name: string
  nation_flag_url: string
}

interface League {
  league_id: number
  league_name: string
  league_level: number
}

interface Club {
  club_team_id: number
  club_name: string
  club_logo_url: string
  club_flag_url: string
  League: League
  Nation: Nation
}

interface PlayerClub {
  club_position: string
  club_jersey_number: number
  club_joined: string
  club_contract_valid_until: string
  Club: Club
}

interface PlayerStats {
  year: number
  overall: number | null
  pace: number | null
  shooting: number | null
  passing: number | null
  dribbling: number | null
  defending: number | null
  physic: number | null
  PlayerPositions: string[]
  PlayerTags: string[]
  PlayerTraits: string[]
  PlayerClub: PlayerClub[]
}

export interface Player {
  id: number
  player_url: string
  short_name: string
  long_name: string
  Nation: Nation
  PlayerStats: PlayerStats[]
}

export async function getCards(filters: CardsFiltersSchema) {
  const response = await api.post('/players/filtered', {
    name: filters.player_name,
    min_overall: filters.min_overall,
    max_overall: filters.max_overall,
    min_pace: filters.min_pac,
    max_pace: filters.max_pac,
    min_shooting: filters.min_sho,
    max_shooting: filters.max_sho,
    min_passing: filters.min_pas,
    max_passing: filters.max_pas,
    min_dribbling: filters.min_dri,
    max_dribbling: filters.max_dri,
    min_defending: filters.min_def,
    max_defending: filters.max_def,
    min_physic: filters.min_phy,
    max_physic: filters.max_phy,
    year: filters.year,
    nation: filters.nation,
    position: filters.position,
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
