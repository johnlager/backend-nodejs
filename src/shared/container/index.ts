import { TransactionRespository } from "@modules/transactions/infra/typeorm/repository/TransactionRepository";
import { ITransactionRepository } from "@modules/transactions/repository/ITransactionRepository";
import { container } from "tsyringe";
import { AccountRespository } from "../../modules/accounts/infra/typeorm/repository/AccountRepository";
import { IAccountRepository } from "../../modules/accounts/repository/IAccountRepository";

container.registerSingleton<IAccountRepository>("AccountRepository", AccountRespository)
container.registerSingleton<ITransactionRepository>("TransactionRepository", TransactionRespository)
