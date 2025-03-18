const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  balloon_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Balloon",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    enum: ["USD", "EUR", "GBP", "INR"],
    default: "USD",
  },
  payment_method: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "cancel", "success"],
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  card_number: {
    type: String,
    required: function () {
      return this.payment_method === "credit_card";
    },
  },
  expiry_date: {
    type: Date,
    required: function () {
      return this.payment_method === "credit_card";
    },
  },
  cvv: {
    type: Number,
    required: function () {
      return this.payment_method === "credit_card";
    },
  },
  name_on_card: {
    type: String,
    required: function () {
      return this.payment_method === "credit_card";
    },
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
