import React, { useState } from "react";

import VisaCard from "../../../../MainPayment/PaymentComponents/VisaCard.svg";
import MasterCard from "../../../../MainPayment/PaymentComponents/MasterCard.svg";
import American from "../../../../MainPayment/PaymentComponents/AmericanExpress.svg";
import Dicover from "../../../../MainPayment/PaymentComponents/Dicover.svg";
import "../../../../components/CSS/userdash.css"

export default function OrderSummary() {
  const [promoCodeVisible, setPromoCodeVisible] = useState(false);

  const togglePromoCode = () => {
    setPromoCodeVisible(!promoCodeVisible);
    setPromoCodeVisible(true);
  };

  const closePromoCode = () => {
    setPromoCodeVisible(false);
  };

  return (
    <>
      <div
        className=" container rounded-md"
        style={{ width: "28%", backgroundColor: "rgb(249 249 249)", marginTop:"3.6rem", height:"50%" }}
      >
        <div>
          <h5 className="text-black">Order Summary</h5>
          <h6 className="text-sm">1 item</h6>
        </div>

        <div className="w-full h-0.5 bg-gray-300"></div>

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-4">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            Subtotal (INR)
          </span>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              ₹1,337.00
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h6 className="flex justify-center text-sm">
            Subtotal does not include applicable taxes
          </h6>
          <div className="flex justify-center text-sm font-semibold mt-2">
            <span onClick={togglePromoCode} className="cursor-pointer">
              Have a coupon code?
            </span>
          </div>
          {promoCodeVisible && (
            <div className="flex justify-center mt-2 ml-10">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border border-gray-300 px-2 py-1 rounded-l-md"
              />
              <button className="bg-blue-400 text-white px-4 py-1 rounded-r-md">
                Apply
              </button>
              <button onClick={closePromoCode} className="ml-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="m-4">
            <button
              type="button"
              className="text-white w-full bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm p-2 dark:bg-blue-400 focus:outline-none"
            >
              Ready to pay
            </button>
          </div>

          <div className="flex justify-center">
            <svg
              className="w-[24px] h-[24px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"
              />
            </svg>
            <span className="pt-[2px]">Secure Payment</span>
          </div>
          <div className="ml-[31%]">
            <div className="flex w-[15%]">
              <img src={VisaCard} alt="Card" />
              <img src={MasterCard} alt="Card" />
              <img src={American} alt="Card" />
              <img src={Dicover} alt="Card" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
