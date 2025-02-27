import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740555909758 implements MigrationInterface {
    name = 'Default1740555909758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "sets" character varying(255) NOT NULL, "lbs" character varying(255), "calories_burned" character varying(255) NOT NULL, "workoutsId" integer, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "workoutPlanId" integer, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workout_plan" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_aea7bdb578979ab3fd974331f5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch_contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone_number" character varying(255) NOT NULL, "branchId" uuid, CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "location" text, "image" text, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "branchId" uuid, "userId" uuid, CONSTRAINT "PK_57b190f060bf7e37f63e2878b43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coupon" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "offer" character varying NOT NULL, "valid_until" TIMESTAMP NOT NULL, "terms" character varying NOT NULL, "status" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcbe9d72b60eed35f46dc35a682" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "promotion_code"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "title" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "img_url" character varying`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "offer_description" text`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "discount_percentage" numeric(5,2)`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "valid_until" date`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "promotion" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7" FOREIGN KEY ("workoutsId") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485" FOREIGN KEY ("workoutPlanId") REFERENCES "workout_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_4fc5582a332c58f523bdd537f16" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_4fc5582a332c58f523bdd537f16"`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_f9e23b6c0e611b88ed0c05f2485"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP CONSTRAINT "FK_44b6ded8860170fa493c4b6c9c7"`);
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
        await queryRunner.query(`DROP TABLE "coupon"`);
        await queryRunner.query(`DROP TABLE "branch_user"`);
        await queryRunner.query(`DROP TABLE "branch"`);
        await queryRunner.query(`DROP TABLE "branch_contact"`);
        await queryRunner.query(`DROP TABLE "workout_plan"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "exercise"`);
    }

}
