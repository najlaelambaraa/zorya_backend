import { MigrationInterface, QueryRunner } from "typeorm"

export class AddBlogTable1719301032403 implements MigrationInterface {
name = 'AddBlogTable1719301032403'
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "blog" (
              "id" character varying NOT NULL,
              "title" character varying NOT NULL,
              "content" text NOT NULL,
              "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
              "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
              CONSTRAINT "PK_blog_id" PRIMARY KEY ("id")
            )
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
    }

}
