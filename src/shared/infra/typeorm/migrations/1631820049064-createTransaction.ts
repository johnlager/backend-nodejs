import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTransaction1631820049064 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: "amount",
            type: "decimal",
            precision: 5,
            scale: 2,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: 'transaction_type_id',
            type: 'uuid',
          },
          {
            name: 'account_id',
            type: 'uuid',
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
          },
        ],
        foreignKeys: [
          {
            name: "FKTransactionType",
            referencedTableName: "transaction_type",
            referencedColumnNames: ['id'],
            columnNames: ['transaction_type_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: "FKAccount",
            referencedTableName: "account",
            referencedColumnNames: ['id'],
            columnNames: ['account_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transaction")
  }
}
