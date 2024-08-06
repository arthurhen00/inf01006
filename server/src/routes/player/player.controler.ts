import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase } from './use-cases'
import { GetFilteredPlayersRequest, GetPlayerRequest } from './requests'
import { GetFilteredPlayersResponse, GetPlayerResponse } from './responses'

@Controller()
export class PlayerController {
  constructor(
    private readonly getPlayerUseCase: GetPlayerUseCase,
    private readonly getPlayersUseCase: GetPlayersUseCase,
    private readonly getFilteredPlayersUseCase: GetFilteredPlayersUseCase,
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

  @Post('players/filtered')
  async getFilteredPlayers(@Body() getFilteredPlayersRequest: GetFilteredPlayersRequest) {
    const players = await this.getFilteredPlayersUseCase.exec(getFilteredPlayersRequest)
    return GetFilteredPlayersResponse.fromArray(players)
  }
}
