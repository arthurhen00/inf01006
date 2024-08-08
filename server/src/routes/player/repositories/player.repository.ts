import { Injectable } from '@nestjs/common'
import { prisma } from '@src/lib/prisma'
import { GetFilteredPlayersRequest } from '../requests'

const playerInclude = {
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
}

@Injectable()
export class PlayerRepository {
  async findById(id: number) {
    return await prisma.player.findUniqueOrThrow({
      where: {
        sofifa_id: id,
      },
      include: playerInclude,
    })
  }

  async findByFilters(filter: GetFilteredPlayersRequest) {
    return await prisma.player.findMany({
      where: {
        long_name: {
          contains: filter.name,
        },
        Nation: {
          nationality_name: filter.nation,
        },
        PlayerStats: {
          some: {
            year: parseInt(filter.year),
            PlayerPositions: {
              some: {
                Position: {
                  position_name: filter.position,
                },
              },
            },
          },
        },
      },
      include: playerInclude,
    })
  }

  async findAll() {
    return await prisma.player.findMany({
      include: playerInclude,
    })
  }
}
