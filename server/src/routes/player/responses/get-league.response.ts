export class GetLeagueResponse {
  league_id: number
  league_name: string
  league_level: number

  constructor(LeagueObj) {
    this.league_id = LeagueObj.league_id
    this.league_name = LeagueObj.league_name
    this.league_level = LeagueObj.league_level
  }
}
