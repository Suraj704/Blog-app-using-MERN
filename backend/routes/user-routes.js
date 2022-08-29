// import express from "express";
// import { getAllUser, login, signup } from "../controllers/user-controller";
const express=require('express')
const controller=require('../controller/user-controller')
const router = express.Router();

router.get("/", controller.getAllUser);
router.post("/signup", controller.signup);
router.post("/login", controller.login);
// export default router;
module.exports=router
