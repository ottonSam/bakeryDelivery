import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class NewRequestColumn1616123357962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('requests', new TableColumn({
            name: 'quantidade',
            type: 'int',
            default: 1,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('requests', 'quantidade');
    }

}
