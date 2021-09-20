import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTransaction1631832519371 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 5,
            scale: 2,
            isNullable: false
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'accountId',
            type: 'uuid',
            isNullable: false
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['DEPOSIT', 'WITHDRAW']
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true
          },
        ],
        foreignKeys: [
          {
            name: 'FKAccountTransactions',
            referencedTableName: 'accounts',
            referencedColumnNames: ['id'],
            columnNames: ['accountId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions')
  }

}
