import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739955426090 implements MigrationInterface {
    name = 'Default1739955426090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" ADD "lbs" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "lbs"`);
    }

}
