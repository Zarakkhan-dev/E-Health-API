import {login,signup,logoutById, getAllUsers, getUserById, updateUserById, deleteUserById} from "../Controller/authController.js"
import express from "express"
import validateRequest from "../middleware/validateRequest.js";
import userValidationSchema from "../validation/userValidation.js";

const Router = express.Router();

Router.route("/").get(getAllUsers);
Router.route("/:id").get(getUserById).put(updateUserById).delete(deleteUserById)
Router.route("/signup").post( validateRequest(userValidationSchema) ,signup)
Router.route("/login").post(login);
Router.route("/logout/:id").get(logoutById);
export default  Router;