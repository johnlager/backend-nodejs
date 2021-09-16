import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAccount1631814867021 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account',
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
            name: "account_type_id",
            type: "uuid",
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
            name: "FKAccountType",
            referencedTableName: "account_type",
            referencedColumnNames: ['id'],
            columnNames: ['account_type_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("account")
  }

}
