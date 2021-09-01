import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email_user, password_user } = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email_user,
            password_user
        });

        return res.json(token);
    }
}

export { AuthenticateUserController };