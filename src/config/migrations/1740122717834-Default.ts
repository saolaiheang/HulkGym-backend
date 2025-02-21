import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740122717834 implements MigrationInterface {
    name = 'Default1740122717834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workout_plan" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_aea7bdb578979ab3fd974331f5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "workoutPlanId" integer, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "sets" character varying(255) NOT NULL, "lbs" character varying(255), "calories_burned" character varying(255) NOT NULL, "workoutsId" integer, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promotion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "img_url" character varying NOT NULL, "offer_description" text NOT NULL, "discount_percentage" numeric(5,2), "valid_until" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fab3630e0789a2002f1cadb7d38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coupon" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "offer" character varying NOT NULL, "valid_until" TIMESTAMP NOT NULL, "terms" character varying NOT NULL, "status" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485" FOREIGN KEY ("workoutPlanId") REFERENCES "workout_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7" FOREIGN KEY ("workoutsId") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" DROP CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485"`);
        await queryRunner.query(`DROP TABLE "coupon"`);
        await queryRunner.query(`DROP TABLE "promotion"`);
        await queryRunner.query(`DROP TABLE "exercise"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "workout_plan"`);
    }

}
