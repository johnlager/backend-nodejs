import { Account } from '@modules/accounts/infra/typeorm/entity/Account';
import { inject, injectable } from 'tsyringe';
import { IAccountRepository } from '../../repository/IAccountRepository';

@injectable()
class GetAccountByIdUseCase {
  constructor(
    @inject("AccountRepository")
    private accountRepository: IAccountRepository
  ) {}

  async handle(id): Promise<Account> {
    return await this.accountRepository.findOne(id)
  }
}

export { GetAccountByIdUseCase };
