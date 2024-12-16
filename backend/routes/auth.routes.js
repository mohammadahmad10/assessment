import express from "express";
import { login, signup } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validate.js";
import { signupSchema, loginSchema } from "../models/auth.models.js";
const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

export default router;
