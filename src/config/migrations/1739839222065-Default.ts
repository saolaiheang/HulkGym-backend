import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739839222065 implements MigrationInterface {
    name = 'Default1739839222065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "promotion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "promotion_code" character varying(255) NOT NULL, "description" text NOT NULL, "start_date" TIMESTAMP NOT NULL DEFAULT now(), "end_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "promotion"`);
    }

}
