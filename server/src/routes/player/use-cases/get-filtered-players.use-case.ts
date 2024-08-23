import { Injectable } from '@nestjs/common'
import { PlayerRepository } from '../repositories'
import { GetFilteredPlayersRequest } from '../requests'

@Injectable()
export class GetFilteredPlayersUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async exec(filter: GetFilteredPlayersRequest, page: number, items: number) {
    return await this.playerRepository.findByFilters(filter, page, items)
  }
}
