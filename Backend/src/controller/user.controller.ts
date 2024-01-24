/**
 *
 * Responsible for coordinating the neccesary services needed to achieve a goal
 */

import { Request, Response } from "express";
import { UserModel } from "../models";

export class UserController {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  createUser = (req: Request, res: Response) => {
    const user = req.body;
    this.userModel.createUser(user, (err, result) => {
      if (err) {
        console.error("Error inserting data into MySQL database:", err);
        res.status(500).json({
          success: true,
          message: "Internal server error",
          data: null,
        });
        return;
      }
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user
      });
    });
  };
}
