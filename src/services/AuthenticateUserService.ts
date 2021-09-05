import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email_user: string;
    password_user: string;
}

class AuthenticateUserService {
    async execute({ email_user, password_user }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email_user
        });

        const passwordMatch = await compare(password_user, user.password_user);

        if(passwordMatch) {
            const token = sign({
                email_user: user.email_user
            }, "e7aefb0d6e04a2fbdde5e9ecd01cb72d", {
                subject: user.id,
                expiresIn: "20s"
            });
            
            return token;
        }

    }
}

export { AuthenticateUserService };