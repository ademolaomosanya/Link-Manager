import { Router } from "express";
import { UserController } from "../controller";

export class UserRouter {
  private usersRouter: Router;
  private userController: UserController;

  constructor(userController: UserController) {
    this.usersRouter = Router();
    this.userController = userController;
    this.initializeRoutes();
  }

  get router() {
    return this.usersRouter;
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /api/users:
     *   post:
     *     summary: Create a new User Account
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - username
     *               - email
     *               - password
     *             properties:
     *               username:
     *                 type: string
     *               email:
     *                 type: string
     *               full_name:
     *                 type: string
     *               password:
     *                 type: string
     *     tags:
     *       - Users
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       201:
     *         description: User Account created Successfully
     */
    this.usersRouter.post("/", this.userController.createUser);
  }
}
