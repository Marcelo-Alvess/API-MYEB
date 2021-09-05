import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { ListUserController } from './controllers/ListUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserController = new UpdateUserController();
const listUserController = new ListUserController();

const router = Router();
const upload = multer(uploadConfig);

router.get("/users", listUserController.handle);
router.post("/users", createUserController.handle);
router.post("/session", authenticateUserController.handle);
router.put("/users/:id", ensureAuthenticated, upload.single('avatar_user'), updateUserController.handle);


export { router };