import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function playersRoutes(app: FastifyInstance) {
  app.get('/players', async (request, reply) => {
    const players = await prisma.player.findMany({})

    return players
  })

  app.get('/player/:sofifa_id', async (request, reply) => {
    const paramsSchema = z.object({
      sofifa_id: z.coerce.number(),
    })

    const { sofifa_id } = paramsSchema.parse(request.params)

    const players = await prisma.player.findUniqueOrThrow({
      where: { sofifa_id },
    })

    return players
  })
}
