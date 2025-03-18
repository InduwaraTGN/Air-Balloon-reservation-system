const Payment = require("../models/payment");

const createPament = async (req, res) => {
  try {
    //check required fields
    if (
      !req.body.balloon_id ||
      !req.body.user_id ||
      !req.body.amount ||
      !req.body.payment_method
    ) {
      return res.status(400).send({
        message: "Please fill all required fields",
        data: {},
        code: 0, // 0 : system error
      });
    }

    const payment = new Payment(req.body);
    await payment.save();


    res.status(201).send({
      message: "Payment created successfully",
      data: payment,
      code: 1, // 1 : success
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: {},
      code: 0, // 0 : system error
    });
  }
};

module.exports = {
  createPament,
};
