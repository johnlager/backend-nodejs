import { IAccountRepository } from '@modules/accounts/repository/IAccountRepository';
import { Transaction, TransactionType } from '@modules/transactions/infra/typeorm/entity/Transaction';
import { ITransactionRepository } from '@modules/transactions/repository/ITransactionRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateWithdrawUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository,
    @inject("AccountRepository")
    private accountRepository: IAccountRepository
  ) {}

  async handle(id: string, value: number): Promise<Transaction> {
    const account = await this.accountRepository.findOne(id)

    if( value > 600 ) {
      throw new AppError("The withdraw limit is B$ 600")
    }
    if ( value > account.amount) {
      throw new AppError("Not enought credit")
    }

    const transaction = await this.transactionRepository.create(TransactionType.WITHDRAW, value, account)
    
    const t = await this.accountRepository.updateAmount(account.id, -value)
    
    return transaction
  }
}

export { CreateWithdrawUseCase };


