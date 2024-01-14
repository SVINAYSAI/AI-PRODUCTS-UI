import { useState } from "react";
import Card from "./PaymentComponents/Card.svg";
import VisaCard from "./PaymentComponents/VisaCard.svg";
import MasterCard from "./PaymentComponents/MasterCard.svg";
import American from "./PaymentComponents/AmericanExpress.svg";
import Dicover from "./PaymentComponents/Dicover.svg";
import CardPayment from "./Pages/CardPY";
import UPI from "./PaymentComponents/bhim.svg";
import QRCode from "./Pages/QRCide";

export default function Payment1() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (option: string) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="radio1"
            name="paymentMethod"
            className="mr-2"
            checked={selectedOption === "Option1"}
            onChange={() => handleRadioChange("Option1")}
          />
          <img className="w-[10%]" src={Card} alt="Card" />
          <label htmlFor="radio2">Card</label>
          <div className="flex ml-[41%] mr-[6%]">
            <img className="w-[30%]" src={VisaCard} alt="Card" />
            <img className="w-[30%]" src={MasterCard} alt="Card" />
            <img className="w-[30%]" src={American} alt="Card" />
            <img className="w-[30%]" src={Dicover} alt="Card" />
          </div>
        </div>
        {selectedOption === "Option1" && (
          <div className="ml-6">
            <CardPayment />
          </div>
        )}
        <hr className="my-2" />

        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="radio2"
            name="paymentMethod"
            className="mr-2"
            checked={selectedOption === "Option2"}
            onChange={() => handleRadioChange("Option2")}
          />
          <img className="w-[7%]" src={UPI} alt="Card" />
          <label htmlFor="radio2">QR Code</label>
        </div>
        {selectedOption === "Option2" && (
          <div className="ml-6">
            <QRCode />
          </div>
        )}
        <hr className="my-2" />

        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="radio3"
            name="paymentMethod"
            className="mr-2"
            checked={selectedOption === "Option3"}
            onChange={() => handleRadioChange("Option3")}
          />
          <label htmlFor="radio3">Option 3</label>
        </div>
        {selectedOption === "Option3" && (
          <div className="ml-6">
            {/* Content for Option 3 */}
            Content for Option 3 goes here.
          </div>
        )}
        <hr className="my-2" />

        <div className="flex items-center">
          <input
            type="radio"
            id="radio4"
            name="paymentMethod"
            className="mr-2"
            checked={selectedOption === "Option4"}
            onChange={() => handleRadioChange("Option4")}
          />
          <label htmlFor="radio4">Option 4</label>
        </div>
        {selectedOption === "Option4" && (
          <div className="ml-6">
            {/* Content for Option 4 */}
            Content for Option 4 goes here.
          </div>
        )}
      </div>
    </div>
  );
}
