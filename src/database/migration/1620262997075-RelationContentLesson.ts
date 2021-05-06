import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationContentLesson1620262997075 implements MigrationInterface {
  name = 'RelationContentLesson1620262997075';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" varchar`);
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" UNIQUE ("lessonId")`
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d"`
    );
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
  }
}
