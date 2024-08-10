export class GetPositionResponse {
  position_id: number
  position_name: string

  constructor(PositionObj) {
    this.position_id = PositionObj.position_id
    this.position_name = PositionObj.position_name
  }

  static fromArray(Position: any[]): GetPositionResponse[] {
    return Position.map((response) => new GetPositionResponse(response))
  }

  static getNames(Position: any[]): string[] {
    return Position.map((response) => response.position_name)
  }
}
