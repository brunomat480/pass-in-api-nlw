import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

app.post('/events', (request, reply) => {

  return 'Hello'
})


app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})