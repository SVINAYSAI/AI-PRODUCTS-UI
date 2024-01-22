import React, { useState } from "react";

const CardPayment: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const cleanedValue = e.target.value.replace(/\D/g, "");

    // Ensure the card number has a maximum length of 16
    if (cleanedValue.length <= 16) {
      // Add spaces after every four digits
      const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

      setCardNumber(formattedValue);
    }
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const cleanedValue = e.target.value.replace(/\D/g, "");

    // Format the input as MM/YY
    let formattedValue = cleanedValue;

    if (cleanedValue.length > 2) {
      formattedValue =
        cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4);
    }

    setExpiryDate(formattedValue);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const cleanedValue = e.target.value.replace(/\D/g, "");

    // Limit the length to three digits
    const formattedValue = cleanedValue.slice(0, 3);

    setCvv(formattedValue);
  };

  return (
    <div className="max-w-md mx-auto mb-4 bg-gray-50">
      <form>
        <div className="mb-4">
          <label
            htmlFor="cardHolder"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Card Holder
          </label>
          <input
            type="text"
            id="cardHolder"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter card holder's name"
            value={cardHolder}
            onChange={handleCardHolderChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CardPayment;
