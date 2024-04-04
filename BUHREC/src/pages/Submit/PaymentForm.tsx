import { useState } from "react";

const CARD_NUMBER_REGEX = /^[0-9]{16}$/; // Regex for valid credit card number
const EXPIRY_DATE_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/; // Regex for MM/YY format

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState<newErrorsProps | Record<string, string>>(
    {}
  ); // Object to store error messages

  interface newErrorsProps {
    cardNumber: string | undefined;
    cardholderName: string;
    expiryDate: string;
    cvc: string;
  }

  const validateForm = () => {
    const newErrors: newErrorsProps | Record<string, string> = {};

    if (!CARD_NUMBER_REGEX.test(cardNumber)) {
      newErrors.cardNumber = "Invalid card number. Please enter 16 digits.";
    }

    if (!cardholderName) {
      newErrors.cardholderName = "Please enter the cardholder name.";
    }

    if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
      newErrors.expiryDate = "Invalid expiry date. Please use MM/YY format.";
    }

    if (!cvc) {
      newErrors.cvc = "Please enter the CVC code.";
    } else if (cvc.length !== 3) {
      newErrors.cvc = "CVC code should be 3 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
      // Submit form data to your server (replace with your logic)
      console.log("Form submitted:", {
        cardNumber,
        cardholderName,
        expiryDate,
        cvc,
      });
      // Clear form after successful submission
      setCardNumber("");
      setCardholderName("");
      setExpiryDate("");
      setCvc("");
      setErrors({}); // Clear errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={16} // Limit input length to 16 digits
        />
        {errors.cardNumber && (
          <p className="error-message">{errors.cardNumber}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="cardholderName">Cardholder Name:</label>
        <input
          type="text"
          id="cardholderName"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
        {errors.cardholderName && (
          <p className="error-message">{errors.cardholderName}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          maxLength={5} // Limit input length to MM/YY format
        />
        {errors.expiryDate && (
          <p className="error-message">{errors.expiryDate}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="cvc">CVC:</label>
        <input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength={3} // Limit input length to 3 digits
        />
        {errors.cvc && <p className="error-message">{errors.cvc}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
