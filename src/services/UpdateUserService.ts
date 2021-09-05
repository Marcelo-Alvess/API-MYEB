import { compare, hash } from 'bcryptjs';
import fs from 'fs';
import path from 'path'
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserUpdate {
    id: string;
    name_user: string;
    email_user: string;
    password_user: string;
    about_user: string;
    phone_number_user: string;
    avatar_user: string;
}

class UpdateUserService {
    async execute({ id, name_user, email_user, password_user, about_user, phone_number_user, avatar_user }: IUserUpdate) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const pathAvatarUser =  path.resolve('tmp/uploads/', `${avatar_user}`)

        const userAlreadyExists = await usersRepository.findOne({
            id,
        });

        const passwordMatch = await compare(password_user, userAlreadyExists.password_user);

        
        if(userAlreadyExists.name_user !== name_user && name_user.length > 0) {
            usersRepository.update(userAlreadyExists.id, { name_user });
        }

        if(userAlreadyExists.email_user !== email_user && email_user.length > 0) {
            usersRepository.update(userAlreadyExists.id, { email_user });
        }
        
        if(!passwordMatch) {
            if(password_user.length > 0) {
                const passwordHash = await hash(password_user, 8);
                
                usersRepository.update(userAlreadyExists.id, { password_user: passwordHash });
            }
        }
        
        if(userAlreadyExists.about_user !== about_user && about_user.length > 0) {
            usersRepository.update(userAlreadyExists.id, { about_user });
        }

        if(userAlreadyExists.phone_number_user !== phone_number_user && phone_number_user.length > 0) {
            usersRepository.update(userAlreadyExists.id, { phone_number_user });
        }
        
        if(userAlreadyExists.avatar_user !== avatar_user && avatar_user.length > 0) {
            try {
                if(userAlreadyExists.avatar_user){
                    fs.unlink(`tmp/uploads/${userAlreadyExists.avatar_user}`, err => {});
                }

                usersRepository.update(userAlreadyExists.id, { avatar_user });
            } catch (err) {
                fs.unlink(`tmp/uploads/${pathAvatarUser}`, err => {});
            }
        }
        
        return 
    }
}

export { UpdateUserService };