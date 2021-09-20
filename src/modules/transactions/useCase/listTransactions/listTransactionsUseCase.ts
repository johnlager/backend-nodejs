import { Transaction } from '@modules/transactions/infra/typeorm/entity/Transaction';
import { inject, injectable } from 'tsyringe';
import { ITransactionRepository } from '../../repository/ITransactionRepository';

@injectable()
class ListTransactionsUseCase {
  constructor(
    @inject("TransactionRepository")
    private transactionRepository: ITransactionRepository 
  ) {}

  async handle(): Promise<Transaction[]> {
    return await this.transactionRepository.findAll()
  }
}

export { ListTransactionsUseCase };
