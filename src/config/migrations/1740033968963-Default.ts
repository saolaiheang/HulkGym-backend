import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740033968963 implements MigrationInterface {
    name = 'Default1740033968963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "membership_plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plan_name" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "features" text array, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ec3f35b7d36f6b0273c2141ffc" UNIQUE ("plan_name"), CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "news_announcements" DROP COLUMN "published_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news_announcements" ADD "published_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP TABLE "membership_plan"`);
    }

}
