import { prisma } from '../lib/prisma'
import { server } from '../server'
import { DataProps } from '../utils/types'

export async function GetFavoriteMoviesUser() {
  server.get('/movies/favorite/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params as DataProps
      const favoriteMovies = await prisma.movies.findMany({
        where: {
          userId
        }
      })
      res.status(200).send(favoriteMovies)
    } catch (error) {
      console.error('Error fetching favorite movies:', error)
      res.status(500).send({ error: 'Internal server error' })
    }
  })
}
