import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = fastify()

app.get('/hello', (req: FastifyRequest, rep: FastifyReply) => {
  return 'hello world'
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('📦 Server is listening on http://localhost:3333')
  })
