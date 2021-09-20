import { Router } from 'express'
import { accountsRouter } from './accounts.routes'
import { transactionsRouter } from './transactions.routes'

const router = Router()

router.use('/accounts', accountsRouter)
router.use('/transactions', transactionsRouter)

export { router }
