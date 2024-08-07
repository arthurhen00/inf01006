import { Injectable } from '@nestjs/common'
import { PlayerRepository } from '../repositories'

@Injectable()
export class GetPlayersUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async exec() {
    return await this.playerRepository.findAll()
  }
}
