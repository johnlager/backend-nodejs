import { IAccountRepository } from '@modules/accounts/repository/IAccountRepository';
import { Transaction, TransactionType } from '@modules/transactions/infra/typeorm/entity/Transaction';
import { ITransactionRepository } from '@modules/transactions/repository/ITransactionRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateDepositUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository,
    @inject("AccountRepository")
    private accountRepository: IAccountRepository
  ) {}

  async handle(id: string, value: number): Promise<Transaction> {
    const account = await this.accountRepository.findOne(id)
    const transaction = await this.transactionRepository.create(TransactionType.DEPOSIT, value, account)
    
    const t = await this.accountRepository.updateAmount(account.id, +value)
    
    return transaction
  }
}

export { CreateDepositUseCase };


