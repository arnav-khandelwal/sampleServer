import { Router } from "express"; 
import * as controllers from "../controllers/user.js";

const router = Router();

// api end points 
router.route("/")
    .get(controllers.handleGetAllUsers)
    .post(controllers.handlePostUser);

router.route("/:id")
    .get(controllers.getUsersById)
    .patch(controllers.patchUsersById)
    .delete(controllers.deleteUsersById);

export default router;