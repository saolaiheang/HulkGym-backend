import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739865814999 implements MigrationInterface {
    name = 'Default1739865814999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "promotion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "promotion_code" character varying(255) NOT NULL, "description" text NOT NULL, "start_date" TIMESTAMP NOT NULL DEFAULT now(), "end_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membership_plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plan_name" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "features" text array, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ec3f35b7d36f6b0273c2141ffc" UNIQUE ("plan_name"), CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "UQ_03de14bf5e5b4410fced2ca9935" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "UQ_03de14bf5e5b4410fced2ca9935"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "membership_plan"`);
        await queryRunner.query(`DROP TABLE "promotion"`);
    }

}
