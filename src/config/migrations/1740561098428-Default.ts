import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740561098428 implements MigrationInterface {
    name = 'Default1740561098428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "branch" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "location" text, "image" text, CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" integer`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "FK_ec311067d61faf57a3e46ce254e" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "FK_ec311067d61faf57a3e46ce254e"`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "branch_contact" ADD CONSTRAINT "PK_36e353e3a82a12cf8ea9ce2d4fc" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "branch"`);
    }

}
