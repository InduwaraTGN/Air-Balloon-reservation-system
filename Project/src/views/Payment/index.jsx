import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Payment = () => {
  const [formData, setFormData] = useState({
    balloon_id: "660b1eae3f1c4b001f5a3d1a",
    user_id: "660b1ebd3f1c4b001f5a3d1b",
    amount: "",
    currency: "USD",
    payment_method: "credit_card",
    card_number: "",
    expiry_date: "",
    cvv: "",
    name_on_card: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currencies = [
    { value: "USD", label: "US Dollar (USD)" },
    { value: "EUR", label: "Euro (EUR)" },
    { value: "GBP", label: "British Pound (GBP)" },
    { value: "JPY", label: "Japanese Yen (JPY)" },
  ];

  const paymentMethods = [
    { value: "credit_card", label: "Credit Card" },
    { value: "debit_card", label: "Debit Card" },
    { value: "paypal", label: "PayPal" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (!formData.currency) {
      newErrors.currency = "Currency is required";
    }

    if (!formData.payment_method) {
      newErrors.payment_method = "Payment method is required";
    }

    if (
      formData.payment_method === "credit_card" ||
      formData.payment_method === "debit_card"
    ) {
      if (!formData.card_number) {
        newErrors.card_number = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.card_number.replace(/\s/g, ""))) {
        newErrors.card_number = "Please enter a valid 16-digit card number";
      }

      if (!formData.expiry_date) {
        newErrors.expiry_date = "Expiry date is required";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date)) {
        newErrors.expiry_date = "Please use MM/YY format";
      }

      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 or 4 digits";
      }

      if (!formData.name_on_card) {
        newErrors.name_on_card = "Name on card is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const res = await axios.post(
        "http://localhost:5000/api/payment/add",
        formData
      );

      console.log(res);

      // Simulate API call
      setTimeout(() => {
        console.log("Payment processed:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after success
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            amount: "",
            currency: "USD",
            payment_method: "credit_card",
            card_number: "",
            expiry_date: "",
            cvv: "",
            name_on_card: "",
          });
        }, 3000);
      }, 1500);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData({
      ...formData,
      card_number: formattedValue,
    });

    if (errors.card_number) {
      setErrors({
        ...errors,
        card_number: "",
      });
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-form-wrapper">
        <h2>Payment Details</h2>
        <p className="form-subtitle">
          Please enter your payment information to complete your air balloon
          reservation
        </p>

        {isSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Payment Successful!</h3>
            <p>Your air balloon reservation has been confirmed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <div className="input-with-icon">
                <span className="currency-symbol">$</span>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className={errors.amount ? "error" : ""}
                />
              </div>
              {errors.amount && (
                <span className="error-message">{errors.amount}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className={errors.currency ? "error" : ""}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.currency && (
                <span className="error-message">{errors.currency}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="payment_method">Payment Method</label>
              <select
                id="payment_method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                className={errors.payment_method ? "error" : ""}
              >
                {paymentMethods.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.payment_method && (
                <span className="error-message">{errors.payment_method}</span>
              )}
            </div>

            {(formData.payment_method === "credit_card" ||
              formData.payment_method === "debit_card") && (
              <div className="card-details">
                <div className="form-group">
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    type="text"
                    id="card_number"
                    name="card_number"
                    value={formData.card_number}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className={errors.card_number ? "error" : ""}
                  />
                  {errors.card_number && (
                    <span className="error-message">{errors.card_number}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="expiry_date">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry_date"
                      name="expiry_date"
                      value={formData.expiry_date}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={errors.expiry_date ? "error" : ""}
                    />
                    {errors.expiry_date && (
                      <span className="error-message">
                        {errors.expiry_date}
                      </span>
                    )}
                  </div>

                  <div className="form-group half">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength="4"
                      className={errors.cvv ? "error" : ""}
                    />
                    {errors.cvv && (
                      <span className="error-message">{errors.cvv}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="name_on_card">Name on Card</label>
                  <input
                    type="text"
                    id="name_on_card"
                    name="name_on_card"
                    value={formData.name_on_card}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name_on_card ? "error" : ""}
                  />
                  {errors.name_on_card && (
                    <span className="error-message">{errors.name_on_card}</span>
                  )}
                </div>
              </div>
            )}

            {formData.payment_method === "paypal" && (
              <div className="paypal-info">
                <p>
                  You will be redirected to PayPal to complete your payment.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Complete Payment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;
