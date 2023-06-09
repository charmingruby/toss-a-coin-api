import fastify, { FastifyRequest } from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (req: FastifyRequest) => {
  console.log(`[${req.method}] [${req.url}]`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
