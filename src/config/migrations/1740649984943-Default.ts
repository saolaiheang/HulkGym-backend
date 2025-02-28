import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740649984943 implements MigrationInterface {
    name = 'Default1740649984943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news_announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "content" text NOT NULL, "location" character varying(255), "description" text, "message" text, "status" boolean NOT NULL DEFAULT true, "published_date" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9f9e9a7101cef77e4d5f2bb6ac8" UNIQUE ("title"), CONSTRAINT "PK_5f32c5593df8009a64ab7f7c293" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membership_plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plan_name" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "features" text array, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ec3f35b7d36f6b0273c2141ffc" UNIQUE ("plan_name"), CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "membership_plan"`);
        await queryRunner.query(`DROP TABLE "news_announcements"`);
    }

}
