import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1739958355182 implements MigrationInterface {
    name = 'Default1739958355182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "phone_number" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone_number" character varying(255) NOT NULL, "branchId" uuid, CONSTRAINT "PK_c16f58426537a660b3f2a26e983" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "branchId" uuid, "userId" uuid, CONSTRAINT "PK_57b190f060bf7e37f63e2878b43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "branch" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "phone_number" ADD CONSTRAINT "FK_709bc53e5640fda412fb2c97a81" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_300b707993271c17440b26b5abd" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branch_user" ADD CONSTRAINT "FK_4fc5582a332c58f523bdd537f16" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_4fc5582a332c58f523bdd537f16"`);
        await queryRunner.query(`ALTER TABLE "branch_user" DROP CONSTRAINT "FK_300b707993271c17440b26b5abd"`);
        await queryRunner.query(`ALTER TABLE "phone_number" DROP CONSTRAINT "FK_709bc53e5640fda412fb2c97a81"`);
        await queryRunner.query(`ALTER TABLE "branch" ADD "phone_number" character varying(20) NOT NULL`);
        await queryRunner.query(`DROP TABLE "branch_user"`);
        await queryRunner.query(`DROP TABLE "phone_number"`);
    }

}
