import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationClassStudent1620341221606 implements MigrationInterface {
    name = 'RelationClassStudent1620341221606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "class_students_student" ("classId" integer NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_558e17b8f77b57ac296620828cf" PRIMARY KEY ("classId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4e482f4aed887e568fd3a08153" ON "class_students_student" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb12ba41786ba651ccf23e3df0" ON "class_students_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_4e482f4aed887e568fd3a081539" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08"`);
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_4e482f4aed887e568fd3a081539"`);
        await queryRunner.query(`DROP INDEX "IDX_cb12ba41786ba651ccf23e3df0"`);
        await queryRunner.query(`DROP INDEX "IDX_4e482f4aed887e568fd3a08153"`);
        await queryRunner.query(`DROP TABLE "class_students_student"`);
    }

}
