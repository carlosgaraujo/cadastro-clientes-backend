import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1690297342168 implements MigrationInterface {
    name = 'CreateTables1690297342168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contatos" ("id" SERIAL NOT NULL, "nomeCompleto" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "dataRegistro" date NOT NULL DEFAULT now(), "clienteId" integer, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nomeCompleto" character varying NOT NULL, "email" character varying(45) NOT NULL, "telefone" character varying NOT NULL, "password" character varying(120) NOT NULL, "dataRegistro" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_3cd5652ab34ca1a0a2c7a255313" UNIQUE ("email"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
    }

}
