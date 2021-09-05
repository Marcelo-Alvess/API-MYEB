import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = usersRepository.find();

        const user = (await users).map(users => {
            return {
                ...users,
                avatar_user: `http://localhost:3333/tmp/uploads/${users.avatar_user}`
            }
        })

        return user;
    }
}

export { ListUserService };