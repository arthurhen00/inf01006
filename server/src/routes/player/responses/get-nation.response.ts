export class GetNationResponse {
  nationality_id: number
  nationality_name: string
  nation_flag_url: string

  constructor(NationObj) {
    this.nationality_id = NationObj.nationality_id
    this.nationality_name = NationObj.nationality_name
    this.nation_flag_url = NationObj.nation_flag_url
  }
}
