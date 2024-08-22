import { GetPlayerClubResponse } from './get-player-club.response'

export class GetPlayerStatsResponse {
  year: number
  overall: number
  pace: number
  shooting: number
  passing: number
  dribbling: number
  defending: number
  physic: number
  PlayerPositions: string[]
  PlayerTags: string[]
  PlayerTraits: string[]
  PlayerClub: object
  player_face_url: string

  constructor(PlayerStatsObj) {
    this.year = PlayerStatsObj.year
    this.overall = PlayerStatsObj.overall
    this.pace = PlayerStatsObj.pace
    this.shooting = PlayerStatsObj.shooting
    this.passing = PlayerStatsObj.passing
    this.dribbling = PlayerStatsObj.dribbling
    this.defending = PlayerStatsObj.defending
    this.physic = PlayerStatsObj.physic
    this.PlayerPositions = this.extractPositionNames(PlayerStatsObj.PlayerPositions)
    this.PlayerTags = this.extractPlayerTags(PlayerStatsObj.PlayerTags)
    this.PlayerTraits = this.extractPlayerTraits(PlayerStatsObj.PlayerTraits)
    this.PlayerClub = GetPlayerClubResponse.fromArray(PlayerStatsObj.PlayerClub)
    this.player_face_url = PlayerStatsObj.player_face_url
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
