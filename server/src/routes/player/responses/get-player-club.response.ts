import { GetClubResponse } from './get-club.response'

export class GetPlayerClubResponse {
  club_position: number
  club_jersey_number: string
  club_joined: string
  club_contract_valid_until: string
  Club: object

  constructor(PlayerClubObj) {
    this.club_position = PlayerClubObj.club_position
    this.club_jersey_number = PlayerClubObj.club_jersey_number
    // TODO
    this.club_joined = PlayerClubObj.club_joined
    this.club_contract_valid_until = PlayerClubObj.club_contract_valid_until
    this.Club = new GetClubResponse(PlayerClubObj.Club)
  }

  static fromArray(PlayerClubs: any[]): GetPlayerClubResponse[] {
    return PlayerClubs.map((response) => new GetPlayerClubResponse(response))
  }
}
