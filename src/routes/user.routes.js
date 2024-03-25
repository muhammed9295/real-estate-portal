import {Router} from "express";
import { registerUser, loginUser, logoutUser, getCurrentUser, updateUser } from "../controllers/user.controllers.js";
import {verifyJWT} from "../middlewares/auth.middlewares.js"
import {upload} from "../middlewares/multer.middlewares.js"

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-profile").patch(verifyJWT, upload.single("avatar"),updateUser)
export default router;