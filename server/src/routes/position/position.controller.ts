import { Controller, Get } from '@nestjs/common'
import { GetPositionUseCase } from './use-cases'
import { GetPositionResponse } from './responses'

@Controller()
export class PositionController {
  constructor(private readonly getPositionUseCase: GetPositionUseCase) {}

  @Get('positions')
  async getPositions() {
    const positions = await this.getPositionUseCase.exec()
    return GetPositionResponse.getNames(positions)
  }
}
