import { Link } from "react-router-dom";
import p from "../../../../../components/assets/imgs/half3.jpeg";
import { useState, useEffect } from "react";
import PricingLogic from "../../pricing_logic/pricinglogic";

interface PricingPlan {
  price: string;
  plainid: string;
}

interface Pricing {
  currency_symbol: string;
  data: { plainid: string; price: string }[];
}

export default function Plan3() {
  const { countryPricing } = PricingLogic();
  const [priceInfo, setPriceInfo] = useState<{
    price: string;
    currency_symbol: string;
  } | null>(null);

  const findPriceById = (idToFind: string) => {
    if (
      countryPricing &&
      countryPricing.data &&
      countryPricing.currency_symbol
    ) {
      try {
        const dataArray = JSON.parse(countryPricing.data);

        if (Array.isArray(dataArray)) {
          console.log("Parsed Data Array:", dataArray);

          for (const item of dataArray) {
            const pricing = item.pricing;

            for (const plainKey in pricing) {
              const plainItem = pricing[plainKey];

              if (plainItem.plainid === idToFind) {
                console.log("Found Item:", plainItem);

                return {
                  price: plainItem.price,
                  currency_symbol: countryPricing.currency_symbol,
                };
              }
            }
          }

          console.log("Item not found for id:", idToFind);
          return "Not found";
        } else {
          console.error("Invalid data format. Expected an array.");
          return "Invalid data format";
        }
      } catch (error) {
        console.error("Error parsing data:", error);
        return "Error parsing data";
      }
    }

    console.error("Data not available.");
    return "Data not available";
  };

  useEffect(() => {
    const specificId = "158406102";
    const priceInfoResult = findPriceById(specificId);

    if (typeof priceInfoResult === "object" && "price" in priceInfoResult) {
      setPriceInfo(priceInfoResult);
      console.log(
        `Price for id ${specificId}: ${priceInfoResult.price} ${priceInfoResult.currency_symbol}`
      );
    } else {
      console.error(`Failed to get price for id ${specificId}`);
    }
  }, [countryPricing]);

  return (
    <div className="flex flex-col w-full mx-auto max-w-lg text-gray-900 bg-white rounded-md border border-gray-300 shadow dark:border-gray-600 p-4 dark:bg-gray-800 dark:text-white">
      <div
        className="container border rounded-md p-2 mb-3"
        style={{
          backgroundImage: `url(${p})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-lg text-white">Super Pack</div>
        <h3 className="text-white">
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            16000
          </span>
          <span className="ml-4">
            {priceInfo && `${priceInfo.price} ${priceInfo.currency_symbol}`}
          </span>
        </h3>

        <div className="text-xs text-white">Billed 1/2 Year</div>
      </div>

      <Link
        to="/Payment"
        className="flex text-white bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
      >
        <span className="ml-7"> Get started </span>
        <svg
          className="w-[14px] h-[14px] text-white ml-2 mt-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
      <div className="w-full h-0.5 bg-gray-400"></div>

      <div>
        <div className="mt-4">
          <h6 className="font-bold text-[19px]">Super Pack Plan Includes :</h6>
          <div className="grid grid-cols-12 mt-4">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              Image Generation upto 20000.
            </span>
          </div>

          <div className="grid grid-cols-12 mt-3">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              Chart Generation upto 200 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              25 Min Audio to Transcript upto 60 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              25 Min Video to Transcript upto 38 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              15 Min Video to Transcript on Video upto 20 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              Text to Voice Generation with 2500 characters & 22 different
              voices upto 50 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              5 Min Text to Video Generation upto 30 Times.
            </span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">3D Objects.</span>
          </div>

          <div className="mt-3 grid grid-cols-12">
            <svg
              className="w-[14px] h-[14px] mt-1 text-green-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
            <span className="text-sm col-span-11">
              Generate different AI Avatars 30sec Video upto 15 Times .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
