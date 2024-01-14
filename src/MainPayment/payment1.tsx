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
  const [selectedOption, setSelectedOption] = useState<string>("Option1");

  const handleRadioChange = (option: string) => {
    setSelectedOption((prevOption) => (prevOption === option ? "" : option));
  };

  return (
    <>
      <div className="flex w-full">
        <section className="bg-white w-3/5 border border-gray-300 mt-5 ml-6 mb-6 rounded-md shadow-sm">
          <div className="flex justify-between items-center">
            <div className="text-gray-600" style={{ fontSize: "1.2rem" }}>
              Payment Options
            </div>
            <div className="flex text-gray-400">
              <svg
                className="w-[14px] h-[14px] mt-[3%] mr-1 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                />
              </svg>
              Secure server
            </div>
          </div>

          <div className="mx-auto bg-gray-50 mt-4 p-4 border rounded-md">
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
                <img className="w-[8%]" src={Card} alt="Card" />
                <label htmlFor="radio2" className="mt-[1rem] flex">
                  Card
                </label>
                <div className="flex ml-[52%] mr-[6%]">
                  <img className="w-[30%]" src={VisaCard} alt="Card" />
                  <img className="w-[30%]" src={MasterCard} alt="Card" />
                  <img className="w-[30%]" src={American} alt="Card" />
                  <img className="w-[30%]" src={Dicover} alt="Card" />
                </div>
              </div>
              <div className="ml-[2rem] text-gray-400">
                Secure transfer using your bank account
              </div>

              {selectedOption === "Option1" && (
                <div className="ml-6">
                  <hr className="my-4 border-t-2 border-dotted border-gray-300" />
                  <CardPayment />
                </div>
              )}

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
        </section>
        {/* <section className="w-2/5 bg-white border mt-6 mb-8 mr-4 border-gray-300 rounded-md shadow-md"></section> */}
      </div>
    </>
  );
}
