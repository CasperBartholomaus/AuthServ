const apiRouter = require("express").Router();

apiRouter.use("/user", require("./user"));

module.exports = apiRouter;