import { Module } from '@nestjs/common'
import { NationController } from './nation.controller'
import { NationRepository } from './repositories'
import { GetNationUseCase } from './use-cases'

@Module({
  providers: [NationRepository, GetNationUseCase],
  controllers: [NationController],
})
export class NationModule {}
