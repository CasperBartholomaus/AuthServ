const userRouter = require("express").Router();
const userInformation = require("./user");

userRouter.post("/set-information", userInformation.setUser);

module.exports = userRouter;