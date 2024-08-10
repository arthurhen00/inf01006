import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase } from './use-cases'
import { GetFilteredPlayersRequest, GetPaginationRequest, GetPlayerRequest } from './requests'
import { GetPaginatedResponse, GetPlayerResponse } from './responses'
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
  async getFilteredPlayers(@Body() body: GetFilteredPlayersRequest, @Query() { page }: GetPaginationRequest) {
    const getFilteredPlayersRequest = plainToClass(GetFilteredPlayersRequest, body)

    validate(getFilteredPlayersRequest).then((errors) => {
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors)
      } else {
        console.log('validation succeed')
      }
    })

    const players = await this.getFilteredPlayersUseCase.exec(body)

    return GetPaginatedResponse.fromArray(players, parseInt(page))
  }
}
