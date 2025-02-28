import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740702904142 implements MigrationInterface {
    name = 'Default1740702904142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "userContact"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "userEmail"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "first" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "last" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "PK_2e39f426e2faefdaa93c5961976"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "offer_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "img_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotion" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coupon" ALTER COLUMN "valid_until" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch" DROP CONSTRAINT "PK_2e39f426e2faefdaa93c5961976"`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "branch" ADD CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ALTER COLUMN "phone_number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "last"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "first"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "userEmail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "userContact" character varying`);
    }

}
