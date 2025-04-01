import fastify from 'fastify'
import cors from '@fastify/cors'

export const server = fastify()

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE']
})

const PORT = process.env.PORT || 3333

server
  .listen({ port: Number(PORT) })
  .then(() => {
    console.log(`Server running on port ${PORT}`)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
