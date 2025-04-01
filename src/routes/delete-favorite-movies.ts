import { FastifyReply, FastifyRequest } from 'fastify'
import { server } from '../server'
import { DataProps } from '../utils/types'
import { prisma } from '../lib/prisma'

export async function DeleteFavoriteMovies() {
  server.delete(
    '/movies/favorite/delete/:userId/:movieId',
    async (req: FastifyRequest, reply: FastifyReply) => {
      const { userId, movieId } = req.params as DataProps

      try {
        const movieToDelete = await prisma.movies.findFirst({
          where: {
            userId,
            movieId
          }
        })
        if (!movieToDelete) {
          return reply.status(404).send({ error: 'Movie not found' })
        }
        await prisma.movies.delete({
          where: {
            id: movieToDelete.id
          }
        })
        return reply.status(200).send('Movie deleted from favorites')
      } catch (error) {
        console.error('Error deleting favorite movie:', error)
        return reply.status(500).send({ error: 'Internal server error' })
      }
    })
}