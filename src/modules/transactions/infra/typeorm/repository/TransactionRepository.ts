import { Account } from "@modules/accounts/infra/typeorm/entity/Account";
import { ITransactionRepository } from "@modules/transactions/repository/ITransactionRepository";
import { getRepository, Repository } from "typeorm";
import { Transaction } from "../entity/Transaction";

class TransactionRespository implements ITransactionRepository {
  private transactionRepository: Repository<Transaction>;
  private accountRepository: Repository<Account>;

  constructor() {
    this.transactionRepository = getRepository(Transaction)
    this.accountRepository = getRepository(Account)
  }

  async create(type: any, value: any, account: any): Promise<Transaction> {
    const transaction = this.transactionRepository.create({account, amount: value, type})
    return this.transactionRepository.save(transaction)
  }

  async findOne(id: string): Promise<Transaction> {
    return await this.transactionRepository.findOne(id)
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find()
  }

}

export { TransactionRespository };

