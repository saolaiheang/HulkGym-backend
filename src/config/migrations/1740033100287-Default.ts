import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740033100287 implements MigrationInterface {
    name = 'Default1740033100287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news_announcements" DROP COLUMN "Message"`);
        await queryRunner.query(`ALTER TABLE "news_announcements" ADD "message" text`);
        await queryRunner.query(`ALTER TABLE "news_announcements" ADD "status" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "news_announcements" ADD "published_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "news_announcements" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news_announcements" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "news_announcements" DROP COLUMN "published_date"`);
        await queryRunner.query(`ALTER TABLE "news_announcements" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "news_announcements" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "news_announcements" ADD "Message" text`);
    }

}
