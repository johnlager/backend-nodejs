import { Transaction } from "@modules/transactions/infra/typeorm/entity/Transaction";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

enum AccountType {
  CC = "CC",
  CP = "CP"
}

@Entity("accounts")
class Account {
  @PrimaryColumn()
  id: string;

  @Column("decimal", { precision: 6, scale: 2 })
  amount: number;

  @Column({ type: "enum", enum: AccountType })
  type: AccountType;

  @OneToMany(() => Transaction, (t) => t.account)
  transactions: Account[];

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

export { Account, AccountType };
