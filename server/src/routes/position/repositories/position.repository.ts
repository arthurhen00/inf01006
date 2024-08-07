import { Injectable } from '@nestjs/common'
import { prisma } from '@src/lib/prisma'

@Injectable()
export class PositionRepository {
  async findAll() {
    return await prisma.position.findMany({})
  }
}
