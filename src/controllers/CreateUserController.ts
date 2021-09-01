import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name_user, email_user, password_user } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name_user,
            email_user,
            password_user
        });

        return res.status(201).json(user);
    }
}

export { CreateUserController };