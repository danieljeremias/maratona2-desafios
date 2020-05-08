import {MigrationInterface, QueryRunner} from "typeorm";

export class maratona1588881782845 implements MigrationInterface {
    name = 'maratona1588881782845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "aula" varchar(100) NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
