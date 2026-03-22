import { Router } from "express";
import authController from "./auth.controller.js";

const router = Router();

router.post("/register", authController.criarConta);
router.post("/login", authController.login);
router.post("/password-reset", authController.redefinirSenha);

export default router;