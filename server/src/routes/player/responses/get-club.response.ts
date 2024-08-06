import { GetLeagueResponse } from './get-league.response'
import { GetNationResponse } from './get-nation.response'

export class GetClubResponse {
  club_team_id: number
  club_name: string
  club_logo_url: string
  club_flag_url: string
  League: object
  Nation: object

  constructor(ClubObj) {
    this.club_team_id = ClubObj.club_team_id
    this.club_name = ClubObj.club_name
    this.club_logo_url = ClubObj.club_logo_url
    this.club_flag_url = ClubObj.club_flag_url
    this.League = new GetLeagueResponse(ClubObj.League)
    this.Nation = new GetNationResponse(ClubObj.Nation)
  }
}
