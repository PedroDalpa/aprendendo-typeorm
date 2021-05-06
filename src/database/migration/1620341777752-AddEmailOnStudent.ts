import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEmailOnStudent1620341777752 implements MigrationInterface {
  name = 'AddEmailOnStudent1620341777752';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
  }
}
