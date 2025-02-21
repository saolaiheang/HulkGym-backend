import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739957372981 implements MigrationInterface {
    name = 'Default1739957372981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news_announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "content" text NOT NULL, "published_date" TIMESTAMP, "open_house" TIMESTAMP, "fitness_workshop" TIMESTAMP, "social_media_challenge" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9f9e9a7101cef77e4d5f2bb6ac8" UNIQUE ("title"), CONSTRAINT "PK_5f32c5593df8009a64ab7f7c293" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "news_announcements"`);
    }

}
