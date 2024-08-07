import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.playerTags.deleteMany({})
  await prisma.playerTraits.deleteMany({})
  await prisma.playerClub.deleteMany({})
  await prisma.playerPositions.deleteMany({})
  await prisma.playerNation.deleteMany({})

  await prisma.playerStats.deleteMany({})
  await prisma.player.deleteMany({})

  await prisma.club.deleteMany({})
  await prisma.league.deleteMany({})
  await prisma.position.deleteMany({})
  await prisma.trait.deleteMany({})
  await prisma.tag.deleteMany({})

  await prisma.nationTeam.deleteMany({})
  await prisma.nation.deleteMany({})

  await prisma.nation.createMany({
    data: [
      {
        nationality_id: 0,
        nationality_name: 'Brazil',
        nation_flag_url: 'br_nation_flag_url',
      },
      {
        nationality_id: 1,
        nationality_name: 'Argentina',
        nation_flag_url: 'arg_nation_flag_url',
      },
    ],
  })

  await prisma.player.createMany({
    data: [
      {
        sofifa_id: 0,
        player_url: 'inf.ufrgs.br/~ahsilva',
        long_name: 'Arthur Hendges da Silva',
        short_name: 'Arthur H. Silva',
        nationality_id: 0,
      },
      {
        sofifa_id: 1,
        player_url: 'inf.ufrgs.br/~gapereira',
        long_name: 'Gabriel Pereira',
        short_name: 'Gabriel P.',
        nationality_id: 0,
      },
      {
        sofifa_id: 2,
        player_url: 'inf.ufrgs.br/~teste',
        long_name: 'Teste',
        short_name: 'T.',
        nationality_id: 1,
      },
    ],
  })

  await prisma.position.createMany({
    data: [
      { position_id: 0, position_name: 'RW' },
      { position_id: 1, position_name: 'LW' },
      { position_id: 2, position_name: 'ST' },
    ],
  })

  await prisma.league.createMany({
    data: [
      { league_id: 0, league_name: 'Série A (Brasil)', league_level: 10 },
      { league_id: 1, league_name: 'Liga Argentina', league_level: 2 },
    ],
  })

  await prisma.trait.createMany({
    data: [
      { trait_id: 0, trait_name: 'Speed' },
      { trait_id: 1, trait_name: 'Strength' },
      { trait_id: 2, trait_name: 'Agility' },
      { trait_id: 3, trait_name: 'Accuracy' },
      { trait_id: 4, trait_name: 'Endurance' },
    ],
  })

  await prisma.tag.createMany({
    data: [
      { tag_id: 0, tag_name: 'Defender' },
      { tag_id: 1, tag_name: 'Midfielder' },
      { tag_id: 2, tag_name: 'Forward' },
      { tag_id: 3, tag_name: 'Goalkeeper' },
      { tag_id: 4, tag_name: 'Captain' },
    ],
  })

  await prisma.nationTeam.createMany({
    data: [
      {
        nation_team_id: 0,
        nation_logo_url: 'br_nation_logo_url',
        nationality_id: 0,
      },
      {
        nation_team_id: 1,
        nation_logo_url: 'arg_nation_logo_url',
        nationality_id: 1,
      },
    ],
  })

  await prisma.playerNation.createMany({
    data: [
      {
        nation_position: 9,
        nation_jersey_number: 0,
        sofifa_id: 0,
        nation_team_id: 0,
      },
      {
        nation_position: 10,
        nation_jersey_number: 1,
        sofifa_id: 1,
        nation_team_id: 0,
      },
    ],
  })

  await prisma.playerStats.createMany({
    data: [
      { year: 2015, sofifa_id: 0 },
      { year: 2015, sofifa_id: 1 },
      { year: 2016, sofifa_id: 1 },
      { year: 2015, sofifa_id: 2 },
    ],
  })

  await prisma.playerPositions.createMany({
    data: [
      { year: 2015, sofifa_id: 0, position_id: 0 },
      { year: 2015, sofifa_id: 0, position_id: 1 },
      { year: 2015, sofifa_id: 1, position_id: 1 },
      { year: 2016, sofifa_id: 1, position_id: 0 },
      { year: 2016, sofifa_id: 1, position_id: 1 },
    ],
  })

  await prisma.club.createMany({
    data: [
      {
        club_team_id: 0,
        nationality_id: 0,
        club_name: 'Gremio',
        league_id: 0,
        club_logo_url: 'logo_gremio_url',
        club_flag_url: 'flag_gremio_url',
      },
      {
        club_team_id: 1,
        nationality_id: 0,
        club_name: 'internacional',
        league_id: 0,
        club_logo_url: 'logo_inter_url',
        club_flag_url: 'flag_inter_url',
      },
    ],
  })

  await prisma.playerClub.createMany({
    data: [
      {
        year: 2015,
        sofifa_id: 0,
        club_team_id: 0,
        club_position: 'RW',
        club_jersey_number: 9,
      },
      {
        year: 2015,
        sofifa_id: 1,
        club_team_id: 0,
        club_position: 'CF',
        club_jersey_number: 10,
      },
      {
        year: 2016,
        sofifa_id: 1,
        club_team_id: 1,
        club_position: 'RW',
        club_jersey_number: 9,
      },
    ],
  })

  await prisma.playerTraits.createMany({
    data: [
      { year: 2015, sofifa_id: 0, trait_id: 0 },
      { year: 2015, sofifa_id: 0, trait_id: 1 },
      { year: 2015, sofifa_id: 0, trait_id: 2 },
      { year: 2015, sofifa_id: 1, trait_id: 3 },
      { year: 2015, sofifa_id: 1, trait_id: 4 },
    ],
  })

  await prisma.playerTags.createMany({
    data: [
      { year: 2015, sofifa_id: 0, tag_id: 0 },
      { year: 2015, sofifa_id: 0, tag_id: 1 },
      { year: 2015, sofifa_id: 0, tag_id: 2 },
      { year: 2015, sofifa_id: 1, tag_id: 3 },
      { year: 2015, sofifa_id: 1, tag_id: 4 },
    ],
  })
}

seed().then(() => {
  console.log('Created!')
  prisma.$disconnect()
})
