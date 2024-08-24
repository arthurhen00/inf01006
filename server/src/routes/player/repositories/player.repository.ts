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

  async findByFilters(filter: GetFilteredPlayersRequest, page: number, items: number) {
    const players = await prisma.player.findMany({
      where: {
        long_name: filter.name ? { contains: filter.name } : undefined,
        Nation: filter.nation ? { nationality_name: filter.nation } : undefined,
        PlayerStats: {
          some: {
            year: filter.year ? filter.year : undefined,
            overall: {
              gte: filter.min_overall ?? undefined,
              lte: filter.max_overall ?? undefined,
            },
            pace: {
              gte: filter.min_pace ?? undefined,
              lte: filter.max_pace ?? undefined,
            },
            dribbling: {
              gte: filter.min_dribbling ?? undefined,
              lte: filter.max_dribbling ?? undefined,
            },
            shooting: {
              gte: filter.min_shooting ?? undefined,
              lte: filter.max_shooting ?? undefined,
            },
            defending: {
              gte: filter.min_defending ?? undefined,
              lte: filter.max_defending ?? undefined,
            },
            passing: {
              gte: filter.min_passing ?? undefined,
              lte: filter.max_passing ?? undefined,
            },
            physic: {
              gte: filter.min_physic ?? undefined,
              lte: filter.max_physic ?? undefined,
            },
            PlayerClub: filter.position
              ? {
                  some: {
                    club_position: filter.position,
                  },
                }
              : undefined,
          },
        },
      },
      include: playerInclude,
      skip: (page - 1) * items,
      take: items, //
    })

    // TODO
    // mudar no futuro
    const filteredPlayers = players.map((player) => ({
      ...player,
      PlayerStats: player.PlayerStats.filter((stats) => {
        const yearMatches = filter.year ? stats.year === filter.year : true
        const overallMatches =
          (filter.min_overall === null || filter.min_overall === undefined || stats.overall >= filter.min_overall) &&
          (filter.max_overall === null || filter.max_overall === undefined || stats.overall <= filter.max_overall)
        const paceMatches =
          (filter.min_pace === null || filter.min_pace === undefined || stats.pace >= filter.min_pace) &&
          (filter.max_pace === null || filter.max_pace === undefined || stats.pace <= filter.max_pace)
        const dribblingMatches =
          (filter.min_dribbling === null ||
            filter.min_dribbling === undefined ||
            stats.dribbling >= filter.min_dribbling) &&
          (filter.max_dribbling === null ||
            filter.max_dribbling === undefined ||
            stats.dribbling <= filter.max_dribbling)
        const shootingMatches =
          (filter.min_shooting === null ||
            filter.min_shooting === undefined ||
            stats.shooting >= filter.min_shooting) &&
          (filter.max_shooting === null || filter.max_shooting === undefined || stats.shooting <= filter.max_shooting)
        const defendingMatches =
          (filter.min_defending === null ||
            filter.min_defending === undefined ||
            stats.defending >= filter.min_defending) &&
          (filter.max_defending === null ||
            filter.max_defending === undefined ||
            stats.defending <= filter.max_defending)
        const passingMatches =
          (filter.min_passing === null || filter.min_passing === undefined || stats.passing >= filter.min_passing) &&
          (filter.max_passing === null || filter.max_passing === undefined || stats.passing <= filter.max_passing)
        const physicMatches =
          (filter.min_physic === null || filter.min_physic === undefined || stats.physic >= filter.min_physic) &&
          (filter.max_physic === null || filter.max_physic === undefined || stats.physic <= filter.max_physic)
        const clubPositionMatches = filter.position
          ? stats.PlayerClub.some((club) => club.club_position === filter.position)
          : true

        return (
          yearMatches &&
          overallMatches &&
          paceMatches &&
          dribblingMatches &&
          shootingMatches &&
          defendingMatches &&
          passingMatches &&
          physicMatches &&
          clubPositionMatches
        )
      }),
    }))

    return filteredPlayers
  }

  async findAll() {
    return await prisma.player.findMany({
      include: playerInclude,
    })
  }

  async getTotalPlayers() {
    return await prisma.player.count()
  }
}
