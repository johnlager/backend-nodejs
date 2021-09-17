import { ICreateAccountDTO } from "../dto/ICreateAccountDTO";
import { Account } from "../infra/typeorm/entity/Account";

interface IAccountRepository {
  create(data: ICreateAccountDTO): Promise<Account>;
}

export { IAccountRepository };
