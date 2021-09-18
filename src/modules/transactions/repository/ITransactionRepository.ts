import { ICreateDepositTransactionDTO } from '../dto/ICreateDepositTransactionDTO';
import { ICreateWithdrawTransactionDTO } from '../dto/ICreateWithdrawTransactionDTO';
import { Transaction } from '../infra/typeorm/entity/Transaction';

interface ITransactionRepository {
  createDeposit(data: ICreateDepositTransactionDTO): Promise<Transaction>;
  createWithdraw(data: ICreateWithdrawTransactionDTO): Promise<Transaction>;
  findTransactionsByAccountId(): Promise<Transaction>;
  findOne(id: string): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
}

export { ITransactionRepository };

