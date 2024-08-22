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
              gte: filter.min_pac ?? undefined,
              lte: filter.min_pac ?? undefined,
            },
            dribbling: {
              gte: filter.min_dri ?? undefined,
              lte: filter.min_dri ?? undefined,
            },
            shooting: {
              gte: filter.min_sho ?? undefined,
              lte: filter.min_sho ?? undefined,
            },
            defending: {
              gte: filter.min_def ?? undefined,
              lte: filter.min_def ?? undefined,
            },
            passing: {
              gte: filter.min_pas ?? undefined,
              lte: filter.min_pas ?? undefined,
            },
            physic: {
              gte: filter.min_phy ?? undefined,
              lte: filter.min_phy ?? undefined,
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
      take: 5000, //
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
          (filter.min_pac === null || filter.min_pac === undefined || stats.pace >= filter.min_pac) &&
          (filter.max_pac === null || filter.max_pac === undefined || stats.pace <= filter.max_pac)
        const dribblingMatches =
          (filter.min_dri === null || filter.min_dri === undefined || stats.dribbling >= filter.min_dri) &&
          (filter.max_dri === null || filter.max_dri === undefined || stats.dribbling <= filter.max_dri)
        const shootingMatches =
          (filter.min_sho === null || filter.min_sho === undefined || stats.shooting >= filter.min_sho) &&
          (filter.max_sho === null || filter.max_sho === undefined || stats.shooting <= filter.max_sho)
        const defendingMatches =
          (filter.min_def === null || filter.min_def === undefined || stats.defending >= filter.min_def) &&
          (filter.max_def === null || filter.max_def === undefined || stats.defending <= filter.max_def)
        const passingMatches =
          (filter.min_pas === null || filter.min_pas === undefined || stats.passing >= filter.min_pas) &&
          (filter.max_pas === null || filter.max_pas === undefined || stats.passing <= filter.max_pas)
        const physicMatches =
          (filter.min_phy === null || filter.min_phy === undefined || stats.physic >= filter.min_phy) &&
          (filter.max_phy === null || filter.max_phy === undefined || stats.physic <= filter.max_phy)
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
}
