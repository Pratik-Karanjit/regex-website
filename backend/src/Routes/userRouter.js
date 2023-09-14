import { Router } from "express";
import { filterPatternsByRequirements, getAllPatterns } from "../controller/userController.js";

let userRouter = Router();


userRouter.route("/regex-patterns").get(getAllPatterns)
userRouter.route("/search").get(filterPatternsByRequirements)

export default userRouter;
