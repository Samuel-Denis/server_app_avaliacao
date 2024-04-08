import { Router } from "express";
import { CreateUserController } from "@modules/user/useCases/Create/createUserController";

//import multer from "multer";
import { ensureAuthenticated } from "../middlewares/ensureAthenticare";
import { GetUserController } from "@modules/user/useCases/getUser/getUserController";
import { RefreshTokenController } from "@modules/user/useCases/refreshToken/RefreshTokenController";
const usersRoutes = Router();

const userControler = new CreateUserController()
const getUser = new GetUserController();
const refreshTokenController = new RefreshTokenController();

usersRoutes.post('/', userControler.handler)

usersRoutes.get('/', ensureAuthenticated, getUser.handler);

usersRoutes.post('/refresh', refreshTokenController.handle);

export { usersRoutes };
