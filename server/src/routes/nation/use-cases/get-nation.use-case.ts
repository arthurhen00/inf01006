import { Injectable } from '@nestjs/common'
import { NationRepository } from '../repositories'

@Injectable()
export class GetNationUseCase {
  constructor(private readonly nationRepository: NationRepository) {}

  async exec() {
    return await this.nationRepository.findAll()
  }
}
