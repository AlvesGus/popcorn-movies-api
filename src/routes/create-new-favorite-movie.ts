import { FastifyRequest, FastifyReply } from 'fastify'
import { server } from '../server'
import { DataProps } from '../utils/types'
import { prisma } from '../lib/prisma'

export async function CreateNewFavoriteMovie() {
  server.post(
    '/movies/favorite/create',
    async (req: FastifyRequest, reply: FastifyReply) => {
      const { userId, movieId } = req.body as DataProps

      if (userId === undefined || movieId === undefined) {
        return reply.status(400).send({ error: 'Missing required fields' })
      }

      try {
        const newFavoriteMovie = await prisma.movies.create({
          data: {
            userId,
            movieId
          }
        })
        return reply.status(201).send('Added to favorites')
      } catch (error) {
        console.error('Error creating favorite movie:', error)
      }
    }
  )
}
