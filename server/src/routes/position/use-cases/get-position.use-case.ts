import { Injectable } from '@nestjs/common'
import { PositionRepository } from '../repositories/position.repository'

@Injectable()
export class GetPositionUseCase {
  constructor(private readonly positionRepository: PositionRepository) {}

  async exec() {
    return await this.positionRepository.findAll()
  }
}
