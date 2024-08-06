import { Module } from '@nestjs/common'
import { PlayerController } from './player.controler'
import { GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase } from './use-cases'
import { PlayerRepository } from './repositories'

@Module({
  providers: [PlayerRepository, GetPlayerUseCase, GetPlayersUseCase, GetFilteredPlayersUseCase],
  controllers: [PlayerController],
})
export class PlayerModule {}
