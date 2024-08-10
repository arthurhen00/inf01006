import { Controller, Get } from '@nestjs/common'
import { GetNationUseCase } from './use-cases/get-nation.use-case'
import { GetNationResponse } from './responses'

@Controller()
export class NationController {
  constructor(private readonly getNationUseCase: GetNationUseCase) {}

  @Get('nations')
  async getNations() {
    const nations = await this.getNationUseCase.exec()
    return GetNationResponse.getNames(nations)
  }
}
