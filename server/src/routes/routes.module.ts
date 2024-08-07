import { Module } from '@nestjs/common'
import { PlayerModule } from './player/player.module'
import { NationModule } from './nation/nation.module'
import { PositionModule } from './position/position.module'

@Module({
  imports: [PlayerModule, NationModule, PositionModule],
})
export class RoutesModule {}
