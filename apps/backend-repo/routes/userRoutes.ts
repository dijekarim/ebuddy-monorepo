import express from "express";
import { getAllUsers, getUser, updateUser  } from "../controllers/api";
import { authenticateJWT } from "../middleware/authMiddleware";
const userRouter = express.Router();

userRouter.get('/fetch-user-data', authenticateJWT, getAllUsers);
userRouter.get('/fetch-user-data/:id', authenticateJWT, getUser);
userRouter.put('/update-user-data/:id', authenticateJWT, updateUser);

export default userRouter;