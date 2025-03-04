import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740995527246 implements MigrationInterface {
    name = 'Default1740995527246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "first"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "last"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "chatId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "chatId"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "last" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "first" character varying NOT NULL`);
    }

}
