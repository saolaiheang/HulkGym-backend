import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740127517949 implements MigrationInterface {
    name = 'Default1740127517949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935"`);
        await queryRunner.query(`CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "sets" character varying(255) NOT NULL, "lbs" character varying(255), "calories_burned" character varying(255) NOT NULL, "workoutsId" integer, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "workoutPlanId" integer, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout_plan" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_aea7bdb578979ab3fd974331f5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "promotion_code"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "expiry_date"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "UQ_03de14bf5e5b4410fced2ca9935"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "title" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "img_url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "offer_description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "discount_percentage" numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "valid_until" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "offer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "valid_until" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "terms" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7" FOREIGN KEY ("workoutsId") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485" FOREIGN KEY ("workoutPlanId") REFERENCES "workout_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "terms"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "valid_until"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "offer"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "valid_until"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "discount_percentage"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "offer_description"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "UQ_03de14bf5e5b4410fced2ca9935" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "expiry_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD "discount" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "end_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "start_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "promotion_code" character varying(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE "workout_plan"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "exercise"`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
