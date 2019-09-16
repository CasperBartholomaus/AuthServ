const userRouter = require("express").Router();
const userInformation = require("./user");

userRouter.get("/get-information", userInformation.getUser);

module.exports = userRouter;