import { Router } from 'express';

// import Auth from '@middlewares/jwt_auth/auth';

// import CtrlUsers from '@controllers/users';
// import CtrlUserMe from '@controllers/users_me';
import CtrlUserAuth from '@controllers/users_auth.controller';

const router = Router();

// User Signup
router.post('/auth/signup', CtrlUserAuth.signup);
router.get('/auth/signup/confirmation', CtrlUserAuth.signupConfirm);

// User Signin/Signout
router.post('/auth/signin', CtrlUserAuth.signin);
router.get('/auth/signout', CtrlUserAuth.signout);

// User Forgot Password
// router.post('/auth/forgotpassword/request', CtrlUserAuth.forgotPasswordRequest);
// router.post('/auth/forgotpassword/reset', CtrlUserAuth.forgotPasswordReset);

// User Profile
// router.get('/me/show', Auth.jwtUsers, CtrlUserMe.showMe);
// router.patch('/me/update', Auth.jwtUsers, CtrlUserMe.updateMe);
// router.patch('/me/delete', Auth.jwtUsers, CtrlUserMe.deleteMe);

// List of All Users
// router.get('/users', CtrlUsers.showAll);

export default router;
