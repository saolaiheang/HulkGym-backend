import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1741059791115 implements MigrationInterface {
    name = 'Default1741059791115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "phone_number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "phone_number" character varying(255)`);
    }

}
