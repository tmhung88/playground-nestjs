import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTodoItemsTable1684768403484 implements MigrationInterface {
    name = 'AddTodoItemsTable1684768403484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo_items" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_7ad331e73b03da55c148c2b5595" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo_items"`);
    }

}
