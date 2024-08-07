import { GetPlayerClubResponse } from './get-player-club.response'

export class GetPlayerStatsResponse {
  year: number
  PlayerPositions: string[]
  PlayerTags: string[]
  PlayerTraits: string[]
  PlayerClub: object

  constructor(PlayerStatsObj) {
    this.year = PlayerStatsObj.year
    this.PlayerPositions = this.extractPositionNames(PlayerStatsObj.PlayerPositions)
    this.PlayerTags = this.extractPlayerTags(PlayerStatsObj.PlayerTags)
    this.PlayerTraits = this.extractPlayerTraits(PlayerStatsObj.PlayerTraits)
    this.PlayerClub = GetPlayerClubResponse.fromArray(PlayerStatsObj.PlayerClub)
  }

  private extractPositionNames(playerPositions: any[]): string[] {
    return playerPositions.map((position) => position.Position.position_name)
  }

  private extractPlayerTags(playerTags: any[]): string[] {
    return playerTags.map((tag) => tag.Tag.tag_name)
  }

  private extractPlayerTraits(playerTraits: any[]): string[] {
    return playerTraits.map((trait) => trait.Trait.trait_name)
  }

  static fromArray(PlayerStats: any[]): GetPlayerStatsResponse[] {
    return PlayerStats.map((response) => new GetPlayerStatsResponse(response))
  }
}
