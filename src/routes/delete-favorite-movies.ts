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
        await prisma.movies.delete({
          where: {
            userId_movieId: {
              userId,
              movieId
            }
          }
        })
      } catch (error) {
        console.log('Error deleting favorite movie:', error)
        return reply.status(500).send({ error: 'Internal server error' })
      }
    }
  )
}
