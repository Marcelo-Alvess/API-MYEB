import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name_user: string;
    email_user: string;
    password_user: string;
}

class CreateUserService {
    async execute({ name_user, email_user, password_user }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const passwordHash = await hash(password_user, 8);

        const user = usersRepository.create({
            name_user,
            email_user,
            password_user: passwordHash
        });

        await usersRepository.save(user);

        return user
    }
}

export { CreateUserService };