import { Injectable } from '@nestjs/common'
import { prisma } from '../../../lib/prisma'

@Injectable()
export class NationRepository {
  async findAll() {
    return await prisma.nation.findMany({})
  }
}
