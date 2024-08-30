import { Injectable } from '@nestjs/common'
import { PlayerRepository } from '../repositories'
import { GetFilteredPlayersRequest } from '../requests'

@Injectable()
export class GetPlayersNumbersUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async exec(filter: GetFilteredPlayersRequest) {
    return await this.playerRepository.getTotalPlayers(filter)
  }
}
