import { Module } from '@nestjs/common'
import { PlayerController } from './player.controler'
import { GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase, GetPlayersNumbersUseCase } from './use-cases'
import { PlayerRepository } from './repositories'

@Module({
  providers: [
    PlayerRepository,
    GetPlayerUseCase,
    GetPlayersUseCase,
    GetFilteredPlayersUseCase,
    GetPlayersNumbersUseCase,
  ],
  controllers: [PlayerController],
})
export class PlayerModule {}
