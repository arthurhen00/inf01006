import { Module } from '@nestjs/common'
import { PositionController } from './position.controller'
import { GetPositionUseCase } from './use-cases'
import { PositionRepository } from './repositories/position.repository'

@Module({
  providers: [PositionRepository, GetPositionUseCase],
  controllers: [PositionController],
})
export class PositionModule {}
