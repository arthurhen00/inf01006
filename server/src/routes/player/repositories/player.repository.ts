import { Injectable } from '@nestjs/common'
import { prisma } from '@src/lib/prisma'

@Injectable()
export class PlayerRepository {
  async findById(id: number) {
    return await prisma.player.findUniqueOrThrow({
      where: {
        sofifa_id: id,
      },
    })
  }

  async findAll() {
    return await prisma.player.findMany({})
  }
}
