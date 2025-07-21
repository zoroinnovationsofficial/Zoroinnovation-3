import { Router } from "express";
import {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";
import {
  resendEmailValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgottenPasswordValidator,
} from "../validators/auth.validators.js";
import {
  authMiddleware,
  refreshAccessTokenMiddleware,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), registerUser);

router.route("/verify/:token").post(verifyEmail);
router.route("/login").post(userLoginValidator(), loginUser);
router.route("/logout").post(authMiddleware, logoutUser);
router.route("/profile").get(authMiddleware, getCurrentUser);
router
  .route("/refreshAccessToken")
  .get(refreshAccessTokenMiddleware, refreshAccessToken);
router.route("/resendEmail").post(resendEmailValidator(), resendEmailVerification);
router
  .route("/forgotPasswordRequest")
  .post(userForgotPasswordValidator(), forgotPasswordRequest);

router
  .route("/resetForgottenPassword/:token")
  .post(userResetForgottenPasswordValidator(), resetForgottenPassword);

router
  .route("/changeCurrentPassword")
  .post(
    userChangeCurrentPasswordValidator(),
    authMiddleware,
    changeCurrentPassword
  );

export default router;
