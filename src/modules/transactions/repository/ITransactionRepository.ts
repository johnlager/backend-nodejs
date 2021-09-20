import { Transaction } from '../infra/typeorm/entity/Transaction';

interface ITransactionRepository {
  create(type, value, account: any): Promise<Transaction>;
  findOne(id: string): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
}

export { ITransactionRepository };

