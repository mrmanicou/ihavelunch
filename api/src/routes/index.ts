import { Router } from "express";
import AuthController from "./controller/AuthController";

const router = Router();

router.use("/login", AuthController.login);

export default router;
