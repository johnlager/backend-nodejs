import { container } from "tsyringe";
import { AccountRespository } from "../../modules/accounts/infra/typeorm/repository/AccountRepository";
import { IAccountRepository } from "../../modules/accounts/repository/IAccountRepository";

container.registerSingleton<IAccountRepository>("AccountRepository", AccountRespository)
