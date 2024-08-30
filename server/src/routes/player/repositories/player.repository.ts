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
    return prisma.player.findUniqueOrThrow({
      where: { sofifa_id: id },
      include: playerInclude,
    })
  }

  async findByFilters(filter: GetFilteredPlayersRequest, page: number, items: number) {
    const whereClause = this.buildWhereClause(filter)

    const players = await prisma.player.findMany({
      where: whereClause,
      include: playerInclude,
      skip: (page - 1) * items,
      take: items,
    })

    return this.filterPlayerStats(players, filter)
  }

  async findAll() {
    return prisma.player.findMany({
      include: playerInclude,
    })
  }

  async getTotalPlayers(filter: GetFilteredPlayersRequest) {
    const whereClause = this.buildWhereClause(filter)
    return prisma.player.count({ where: whereClause })
  }

  private buildWhereClause(filter: GetFilteredPlayersRequest) {
    return {
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
          PlayerClub: filter.position ? { some: { club_position: filter.position } } : undefined,
        },
      },
    }
  }

  private filterPlayerStats(players, filter: GetFilteredPlayersRequest) {
    return players.map((player) => ({
      ...player,
      PlayerStats: player.PlayerStats.filter((stats) => {
        return (
          (!filter.year || stats.year === filter.year) &&
          (!filter.min_overall || stats.overall >= filter.min_overall) &&
          (!filter.max_overall || stats.overall <= filter.max_overall) &&
          (!filter.min_pace || stats.pace >= filter.min_pace) &&
          (!filter.max_pace || stats.pace <= filter.max_pace) &&
          (!filter.min_dribbling || stats.dribbling >= filter.min_dribbling) &&
          (!filter.max_dribbling || stats.dribbling <= filter.max_dribbling) &&
          (!filter.min_shooting || stats.shooting >= filter.min_shooting) &&
          (!filter.max_shooting || stats.shooting <= filter.max_shooting) &&
          (!filter.min_defending || stats.defending >= filter.min_defending) &&
          (!filter.max_defending || stats.defending <= filter.max_defending) &&
          (!filter.min_passing || stats.passing >= filter.min_passing) &&
          (!filter.max_passing || stats.passing <= filter.max_passing) &&
          (!filter.min_physic || stats.physic >= filter.min_physic) &&
          (!filter.max_physic || stats.physic <= filter.max_physic) &&
          (!filter.position || stats.PlayerClub.some((club) => club.club_position === filter.position))
        )
      }),
    }))
  }
}
