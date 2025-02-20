import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1740036091132 implements MigrationInterface {
    name = 'Default1740036091132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coupon" DROP CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935"`);
        await queryRunner.query(`ALTER TABLE "coupon" DROP COLUMN "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coupon" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "coupon" ADD CONSTRAINT "FK_03de14bf5e5b4410fced2ca9935" FOREIGN KEY ("userId") REFERENCES "user_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
