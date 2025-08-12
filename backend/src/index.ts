import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pino from 'pino'
import pinoHttp from 'pino-http'
import { randomUUID } from 'crypto'

const app = express()

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
})

app.use(
  pinoHttp({
    logger,
    genReqId: (req) => (req.headers['x-request-id'] as string) || randomUUID(),
    redact: ['req.headers.authorization'],
  }),
)

app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: false,
  }),
)

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// P0 placeholder for Entry Rules endpoint
app.get('/api/entry/:country', (req, res) => {
  const { country } = req.params
  res.json({ countryCode: country.toUpperCase(), visa: [], health: [], pets: [], contacts: [] })
})

const port = Number(process.env.PORT || 8080)
app.listen(port, () => logger.info({ port }, 'Backend listening'))



