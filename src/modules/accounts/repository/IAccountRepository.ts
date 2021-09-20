import { ICreateAccountDTO } from "../dto/ICreateAccountDTO";
import { Account } from "../infra/typeorm/entity/Account";

interface IAccountRepository {
  create(data: ICreateAccountDTO): Promise<Account>;
  updateAmount(id: string,value: number): Promise<Account>;
  findOne(id: string): Promise<Account>;
  findAll(): Promise<Account[]>;
}

export { IAccountRepository };
