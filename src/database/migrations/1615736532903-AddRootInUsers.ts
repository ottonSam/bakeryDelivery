import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class AddRootInUsers1615736532903 implements MigrationInterface {
    name = 'AddRootInUsers1615736532903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'is_root',
            type: 'int',
            default: 0
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'is_root');
    }

}
