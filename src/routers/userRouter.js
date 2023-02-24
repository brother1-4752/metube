import express from "express";
import getUser from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/users", getUser);

export default userRouter;
