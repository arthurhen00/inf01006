export class GetPlayerResponse {
  id: number
  player_url: string
  short_name: string
  long_name: string
  nationality_id: number

  constructor(response) {
    this.id = response.sofifa_id
    this.player_url = response.player_url
    this.short_name = response.short_name
    this.long_name = response.long_name
    this.nationality_id = response.nationality_id
  }
}
