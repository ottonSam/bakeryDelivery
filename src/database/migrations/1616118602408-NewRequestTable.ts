import {Column, MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class NewRequestTable1616118602408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('requests', 'user');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('requests', new TableColumn({
            name: 'user',
            type: 'varchar',
            isNullable: true
        }));
    }

}
