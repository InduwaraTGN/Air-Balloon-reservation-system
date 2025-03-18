const { Router } = require("express");
const { createPament } = require("../controllers/payment.controller");
const PaymentRouter = Router();

PaymentRouter.post("/add", createPament);
module.exports = PaymentRouter;
