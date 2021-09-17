import { Account } from '@modules/accounts/infra/typeorm/entity/Account';
import { IAccountRepository } from '@modules/accounts/repository/IAccountRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject("AccountRepository")
    private accountRepository: IAccountRepository
  ) {}

  async handle({ accountType }): Promise<Account> {
    return await this.accountRepository.create({ accountType })
  }
}

export { CreateAccountUseCase };
