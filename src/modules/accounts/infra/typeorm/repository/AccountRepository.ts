import { getRepository, Repository } from 'typeorm';
import { ICreateAccountDTO } from '../../../dto/ICreateAccountDTO';
import { IAccountRepository } from '../../../repository/IAccountRepository';
import { Account } from '../entity/Account';

class AccountRespository implements IAccountRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = getRepository(Account);
  }
  
  async create(data: ICreateAccountDTO): Promise<Account> { 
    const acc = this.repository.create({ type: data.accountType })
    return this.repository.save(acc);
  }
  
}

export { AccountRespository };