import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739862691183 implements MigrationInterface {
    name = 'Default1739862691183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "phone_number" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "image" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "description" text`);
    }

}
