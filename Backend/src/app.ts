import bodyParser from "body-parser";
import "dotenv/config";
import express, { Router } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { ENVIRONMENT } from "./config/env.config";
import { UserController, UrlController } from "./controller";
import { UserRouter, UrlRouter } from "./routes";
import { specs } from "./config";

class App {
  public express: express.Application;
  public userController: UserController;
  public urlController: UrlController;
  public userRouter: Router;
  public urlRouter: Router;

  constructor() {
    // initialize express
    this.express = express();

    // controllers
    this.userController = new UserController();
    this.urlController = new UrlController();

    // routers
    this.userRouter = new UserRouter(this.userController).router;
    this.urlRouter = new UrlRouter(this.urlController).router;

    this.middleware();
    this.defaultRoutes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    const env: ENVIRONMENT = process.env.ENVIRONMENT as ENVIRONMENT
    var whitelist = [
      // update to yours
      "https://example.com"
    ]
    const corsOptions: cors.CorsOptions = {
      origin: function (origin, callback) {
        if ((origin && whitelist.indexOf(origin) !== -1) || env !== 'prod') {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    };
    this.express.use(cors(corsOptions))
    this.express.use("/api-docs", swaggerUi.serve as any, swaggerUi.setup(specs) as any);
    this.express.use("/api/users", this.userRouter);
    this.express.use("/api/urls", this.urlRouter);
  }

  private defaultRoutes(): void {
    this.express.get("/api", (req, res) => {
      res.json({ message: "Hello World" });
    });

    this.express.get("*", (_req, res) => {
      res.status(404).json({
        status: 404,
        message: "Route not found",
      });
    });
  }
}
export default new App().express;
