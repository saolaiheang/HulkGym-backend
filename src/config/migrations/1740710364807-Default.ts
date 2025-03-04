import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740710364807 implements MigrationInterface {
    name = 'Default1740710364807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news_announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "content" text NOT NULL, "location" character varying(255), "description" text, "message" text, "status" boolean NOT NULL DEFAULT true, "published_date" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9f9e9a7101cef77e4d5f2bb6ac8" UNIQUE ("title"), CONSTRAINT "PK_5f32c5593df8009a64ab7f7c293" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membership_plan" ("id" SERIAL NOT NULL, "plan_name" character varying(255) NOT NULL, "price" numeric(10,2) NOT NULL, "features" text array, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ec3f35b7d36f6b0273c2141ffc" UNIQUE ("plan_name"), CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "userEmail"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "userContact"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "first" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "last" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "PK_2e39f426e2faefdaa93c5961976"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "PK_2e39f426e2faefdaa93c5961976"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "last"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "first"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "userContact" character varying`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "userEmail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "membership_plan"`);
        await queryRunner.query(`DROP TABLE "news_announcements"`);
    }

}
