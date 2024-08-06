import { Controller, Get, Param } from '@nestjs/common'
import { GetPlayerUseCase, GetPlayersUseCase } from './use-cases'
import { GetPlayerRequest } from './requests'
import { GetPlayerResponse } from './responses'

@Controller()
export class PlayerController {
  constructor(
    private readonly getPlayerUseCase: GetPlayerUseCase,
    private readonly getPlayersUseCase: GetPlayersUseCase,
  ) {}

  @Get('player/:id')
  async getPlayer(@Param() { id }: GetPlayerRequest) {
    const player = await this.getPlayerUseCase.exec(id)
    return new GetPlayerResponse(player)
  }

  @Get('players')
  async getPlayers() {
    const players = await this.getPlayersUseCase.exec()
    return players
  }
}
