import fastify from 'fastify'
import { playersRoutes } from './routes/players'

const app = fastify()

app.register(playersRoutes)

app.get('/test', () => {
  return 'ok'
})

app
  .listen({
    port: 6900,
  })
  .then(() => {
    console.log('server running on localhost 6900')
  })
