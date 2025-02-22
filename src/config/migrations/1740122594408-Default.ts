import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740122594408 implements MigrationInterface {
    name = 'Default1740122594408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "promotion_code"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "title" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "img_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "offer_description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "discount_percentage" numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "valid_until" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "valid_until"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "discount_percentage"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "offer_description"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "end_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "start_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "promotion_code" character varying(255) NOT NULL`);
    }

}
