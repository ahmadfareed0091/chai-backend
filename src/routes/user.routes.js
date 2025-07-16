import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory, 
    updateAccountDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Register user with avatar and cover image upload
router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

// Login user
router.route("/login").post(loginUser);

// Logout user (requires authentication)
router.route("/logout").post(verifyJWT, logoutUser);

// Refresh JWT token
router.route("/refresh-token").post(refreshAccessToken);

// Change user password
router.route("/change-password").post(verifyJWT, changeCurrentPassword);

// Get current authenticated user
router.route("/current-user").get(verifyJWT, getCurrentUser);

// Update user's full name and email
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

// Update user's avatar image
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

// Update user's cover image
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

// Get public channel profile by username
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

// Get user's watch history
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;
