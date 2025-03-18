const { Router } = require("express");
const PaymentRouter = require("./payment.routes");
const router = Router();

router.use("/payment", PaymentRouter);
module.exports = router;
