import { Account } from "@modules/accounts/infra/typeorm/entity/Account";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW"
}

@Entity("transactions")
class Transaction {
  @PrimaryColumn()
  id: string;

  @Column("decimal", { precision: 5, scale: 2 })
  amount: number;

  @Column({ type: "enum", enum: TransactionType })
  type: TransactionType;

  @ManyToOne(() => Account, (ac) => ac.transactions)
  account: Account;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Transaction, TransactionType };
