"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../controllers/api");
const authMiddleware_1 = require("../middleware/authMiddleware");
const userRouter = express_1.default.Router();
userRouter.get('/fetch-user-data', authMiddleware_1.authenticateJWT, api_1.getAllUsers);
userRouter.get('/fetch-user-data/:id', authMiddleware_1.authenticateJWT, api_1.getUser);
userRouter.put('/update-user-data/:id', authMiddleware_1.authenticateJWT, api_1.updateUser);
exports.default = userRouter;
