  import { Router } from "express";
  import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";
  import { upload } from "../middlewares/multer.middlewares.js";
  import { verifyJWT } from "../middlewares/auth.middleware.js";

  const router = Router();

  // Registration route with file upload
  router.route("/register").post(
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
  );

  // Login route
  router.route("/login").post(loginUser);

  // Secured logout route
  router.route("/logout").post(verifyJWT, logoutUser);

  export default router;




