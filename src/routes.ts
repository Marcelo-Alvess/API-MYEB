import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const router = Router();

router.post("/users", createUserController.handle);
router.post("/session", authenticateUserController.handle);


export { router };