import { Injectable } from '@nestjs/common'
import { prisma } from '@src/lib/prisma'
import { GetFilteredPlayersRequest } from '../requests'

@Injectable()
export class PlayerRepository {
  async findById(id: number) {
    return await prisma.player.findUniqueOrThrow({
      where: {
        sofifa_id: id,
      },
    })
  }

  async findByFilters(filter: GetFilteredPlayersRequest) {
    return await prisma.player.findMany({
      where: {
        long_name: {
          contains: filter.name,
        },
      },
      include: {
        Nation: true,
        PlayerStats: {
          include: {
            PlayerClub: {
              include: {
                Club: {
                  include: {
                    League: true,
                    Nation: true,
                  },
                },
              },
            },
            PlayerPositions: {
              include: {
                Position: true,
              },
            },
            PlayerTags: {
              /*select: {
                sofifa_id: false,
                year: false,
                tag_id: false,
                Tag: true,
              },*/
              include: {
                Tag: true,
              },
            },
            PlayerTraits: {
              include: {
                Trait: true,
              },
            },
          },
        },
        PlayerNation: {
          include: {
            NationTeam: {
              include: {
                Nation: true,
              },
            },
          },
        },
      },
    })
  }

  async findAll() {
    return await prisma.player.findMany({})
  }
}
