export class GetNationResponse {
  nationality_id: number
  nationality_name: string
  nation_flag_url: string

  constructor(NationObj) {
    this.nationality_id = NationObj.nationality_id
    this.nationality_name = NationObj.nationality_name
    this.nation_flag_url = NationObj.nation_flag_url
  }

  static fromArray(Nation: any[]): GetNationResponse[] {
    return Nation.map((response) => new GetNationResponse(response))
  }

  static getNames(Nation: any[]): string[] {
    return Nation.map((response) => response.nationality_name)
  }
}
