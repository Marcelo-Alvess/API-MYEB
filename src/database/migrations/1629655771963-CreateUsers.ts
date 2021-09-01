import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1629655771963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email_user",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "name_user",
                        type: "varchar"
                    },
                    {
                        name: "password_user",
                        type: "varchar"
                    },
                    {
                        name: "about_user",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "avatar_user",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "phone_number_user",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
