import { Module } from '@nestjs/common'
import { PlayerModule } from './player/player.module'
import { NationModule } from './nation/nations.module'

@Module({
  imports: [PlayerModule, NationModule],
})
export class RoutesModule {}
