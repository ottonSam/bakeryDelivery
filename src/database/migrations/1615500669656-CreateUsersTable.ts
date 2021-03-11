import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1615500669656 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'cpf',
                    type: 'varchar(11)',
                    isUnique: true,
                },
                {
                    name: 'telefone',
                    type: 'varchar(11)',
                },
                {
                    name: 'data_de_nascimento',
                    type: 'date',
                },
                {
                    name: 'logadouro',
                    type: 'varchar',
                },
                {
                    name: 'numero',
                    type: 'varchar(5)',
                },
                {
                    name: 'estado',
                    type: 'varchar',
                },
                {
                    name: 'cidade',
                    type: 'varchar',
                },
                {
                    name: 'usuario',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'ponto_de_referencia',
                    type: 'varchar',
                },
                {
                    name: 'senha',
                    type: 'varchar',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
