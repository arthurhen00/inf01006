import { Injectable } from '@nestjs/common'
import { PlayerRepository } from '../repositories'

@Injectable()
export class GetPlayerUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async exec(id: string) {
    return await this.playerRepository.findById(parseInt(id))
  }
}
