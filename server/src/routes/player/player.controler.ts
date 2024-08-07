import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase } from './use-cases'
import { GetFilteredPlayersRequest, GetPlayerRequest } from './requests'
import { GetPlayerResponse } from './responses'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'

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
    return GetPlayerResponse.fromArray(players)
  }

  @Post('players/filtered')
  async getFilteredPlayers(@Body() body: GetFilteredPlayersRequest) {
    const getFilteredPlayersRequest = plainToClass(GetFilteredPlayersRequest, body)
    const errors = await validate(getFilteredPlayersRequest)

    const players = await this.getFilteredPlayersUseCase.exec(body)
    return GetPlayerResponse.fromArray(players)
  }
}
