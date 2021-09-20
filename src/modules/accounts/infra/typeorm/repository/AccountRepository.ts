import { getRepository, Repository } from 'typeorm';
import { ICreateAccountDTO } from '../../../dto/ICreateAccountDTO';
import { IAccountRepository } from '../../../repository/IAccountRepository';
import { Account } from '../entity/Account';

class AccountRespository implements IAccountRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = getRepository(Account);
  }
  
  async updateAmount(id: string, value: number): Promise<Account> {
    const account = await this.repository.findOne(id)

    const actualAmount = +account.amount 
    account.amount = value + actualAmount

    return this.repository.save(account)
  }

  async findOne(id: string): Promise<Account> {
    return await this.repository.findOne(id, {relations: ["transactions"]})
  }

  async findAll(): Promise<Account[]> {
    return await this.repository.find({relations: ["transactions"]})
  }
  
  async create(data: ICreateAccountDTO): Promise<Account> { 
    const acc = this.repository.create({ type: data.accountType })
    return this.repository.save(acc);
  }
  
}

export { AccountRespository };
