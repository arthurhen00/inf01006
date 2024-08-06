import { Module } from '@nestjs/common'
import { PlayerController } from './player.controler'
import { GetPlayerUseCase, GetPlayersUseCase } from './use-cases'
import { PlayerRepository } from './repositories'

@Module({
  providers: [PlayerRepository, GetPlayerUseCase, GetPlayersUseCase],
  controllers: [PlayerController],
})
export class PlayerModule {}
