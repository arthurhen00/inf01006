import { GetNationResponse } from '@src/routes/nation/responses'
import { GetPlayerStatsResponse } from './get-players-stats.response'

export class GetPlayerResponse {
  id: number
  player_url: string
  short_name: string
  long_name: string
  nationality_id: number
  Nation: object
  PlayerStats: object

  constructor(response) {
    this.id = response.sofifa_id
    this.player_url = response.player_url
    this.short_name = response.short_name
    this.long_name = response.long_name
    this.nationality_id = response.nationality_id
    this.Nation = new GetNationResponse(response.Nation)
    this.PlayerStats = GetPlayerStatsResponse.fromArray(response.PlayerStats)
  }

  static fromArray(Player: any[]): GetPlayerResponse[] {
    return Player.map((response) => new GetPlayerResponse(response))
  }
}
