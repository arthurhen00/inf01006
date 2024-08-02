import fastify from 'fastify'

const app = fastify()

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
