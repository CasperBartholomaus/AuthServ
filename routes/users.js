const userRouter = require("express").Router();
const registrerController = require("./../controllers/users/registrer");

userRouter.post("/users/register", registrerController.registrerUser);

module.exports = userRouter;