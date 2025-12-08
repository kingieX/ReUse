import express, {Router} from "express";

// import routes from controllers
import { registerUser, loginUser } from "../controllers/authController.ts";

// Create a router instance
const router:Router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;