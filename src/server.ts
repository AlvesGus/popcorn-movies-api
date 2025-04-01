import fastify from 'fastify'
import cors from '@fastify/cors'
import { GetFavoriteMoviesUser } from './routes/get-favorite-movies-user'
import { CreateNewFavoriteMovie } from './routes/create-new-favorite-movie'
import { DeleteFavoriteMovies } from './routes/delete-favorite-movies'

export const server = fastify()

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE']
})

server.register(GetFavoriteMoviesUser)
server.register(CreateNewFavoriteMovie)
server.register(DeleteFavoriteMovies)

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
