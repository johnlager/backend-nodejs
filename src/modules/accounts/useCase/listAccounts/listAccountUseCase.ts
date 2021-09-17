import { Account } from '@modules/accounts/infra/typeorm/entity/Account';
import { inject, injectable } from 'tsyringe';
import { IAccountRepository } from '../../repository/IAccountRepository';

@injectable()
class ListAccountUseCase {
  constructor(
    @inject("AccountRepository")
    private accountRepository: IAccountRepository
  ) {}

  async handle(): Promise<Account[]> {
    return await this.accountRepository.findAll()
  }
}

export { ListAccountUseCase };
