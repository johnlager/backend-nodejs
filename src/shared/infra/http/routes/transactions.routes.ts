import { CreateDepositController } from "@modules/transactions/useCase/createDeposit/createDepositController"
import { CreateWithdrawController } from "@modules/transactions/useCase/createWithdraw/createWithdrawController"
import { ListTransactionsController } from "@modules/transactions/useCase/listTransactions/listTransactionsController"
import { Router } from "express"

const transactionsRouter = Router()

const createDepositController = new CreateDepositController()
const listTransactionsController = new ListTransactionsController()
const createWithdrawController = new CreateWithdrawController()

transactionsRouter.get('/', listTransactionsController.execute)
transactionsRouter.post('/deposit', createDepositController.execute)
transactionsRouter.post('/withdraw', createWithdrawController.execute)

export { transactionsRouter }

