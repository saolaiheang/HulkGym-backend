import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740706225551 implements MigrationInterface {
    name = 'Default1740706225551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership_plan" DROP CONSTRAINT "PK_e270c516189a3f2609c413ca451"`);
        await queryRunner.query(`ALTER TABLE "membership_plan" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "membership_plan" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "membership_plan" ADD CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membership_plan" DROP CONSTRAINT "PK_e270c516189a3f2609c413ca451"`);
        await queryRunner.query(`ALTER TABLE "membership_plan" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "membership_plan" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "membership_plan" ADD CONSTRAINT "PK_e270c516189a3f2609c413ca451" PRIMARY KEY ("id")`);
    }

}
