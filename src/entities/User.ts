import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    email_user: string;
    
    @Column()
    name_user: string;
    
    @Column()
    password_user: string;
    
    @Column()
    about_user: string;
    
    @Column()
    avatar_user: string;
    
    @Column()
    phone_number_user: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
    
}

export { User }