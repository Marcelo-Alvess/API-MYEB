import { Request, Response } from "express";
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name_user, email_user, password_user, about_user, phone_number_user } = req.body;
        const avatar_user = req.file.filename;
        const { user_id } = req;

        const updateUserService = new UpdateUserService();

        const user = updateUserService.execute({
            id: user_id,
            name_user,
            email_user,
            password_user,
            about_user,
            phone_number_user,
            avatar_user,
        });

        return res.status(201).json(user);
    }
}

export { UpdateUserController };