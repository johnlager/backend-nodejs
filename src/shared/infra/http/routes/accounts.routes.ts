import { Router } from "express"
import { CreateAccountController } from "../../../../modules/accounts/useCase/createAccount/createAccountController"
import { GetAccountByIdController } from "../../../../modules/accounts/useCase/getAccountById/getAccountByIdController"
import { ListAccountController } from "../../../../modules/accounts/useCase/listAccounts/listAccountController"

const accountsRouter = Router()

const createAccountController = new CreateAccountController()
const listAccountController = new ListAccountController()
const getAccountByIdController = new GetAccountByIdController()

accountsRouter.post('/create', createAccountController.execute)

accountsRouter.get('/list', listAccountController.execute)

accountsRouter.get('/:id', getAccountByIdController.execute)

export { accountsRouter }
