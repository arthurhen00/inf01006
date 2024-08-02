import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.player.create({
    data: {
      sofifa_id: 0,
      player_url: 'www.google.com',
      long_name: 'Navegador Chrome',
      short_name: 'Navegador C.',
    },
  })
}

seed().then(() => {
  console.log('Created!')
  prisma.$disconnect()
})
