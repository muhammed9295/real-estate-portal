import { Router } from "express";
import { addProperties, deleteSingleProperties, getProperties, getSingleProperties } from "../controllers/property.controllers.js";
import { verifyAgentJWT } from "../middlewares/agent.auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/add-properties").post(verifyAgentJWT, upload.array("propertyImages"), addProperties);

router.route("/get-properties").get(getProperties);
router.route("/get-singleProperty/:id").get(getSingleProperties);
router.route("/delete-singleProperty/:id").delete(verifyAgentJWT, deleteSingleProperties);

export default router;