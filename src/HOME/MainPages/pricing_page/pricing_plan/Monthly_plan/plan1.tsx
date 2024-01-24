import { Link } from "react-router-dom";
import p from "../../../../../components/assets/imgs/pr.jpg";
import PricingLogic from "../../pricing_logic/pricinglogic"
interface Pricing {
  currency_symbol: string;
  data: string; // Assuming 'data' is a string containing a JSON array
}

export default function Plan1() {
  const { countryPricing } = PricingLogic();

  const pricingPlans = [
    {
      PlanId: "789552312",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "749463201",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "385536748",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "645644228",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "211809878",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "158406102",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "134681180",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "799033885",
      Amount: "500",
      Currency: "$",
    },
    {
      PlanId: "907181013",
      Amount: "500",
      Currency: "$",
    },
  ];

  // Function to find the price based on PlanId
  const findPriceByPlanId = (countryPricing: Pricing | undefined, planId: string) => {
    const pricingData = countryPricing?.data || '[]';
  
    try {
      const parsedData = JSON.parse(pricingData);
  
      if (Array.isArray(parsedData)) {
        // Find the item with the matching plainid
        const matchingItem = parsedData.find(item => item.pricing && item.pricing[planId]);
  
        // If found, return the price
        if (matchingItem) {
          const price = matchingItem.pricing[planId].price;
          return price || null;
        }
      }
    } catch (error) {
      console.error('Error parsing pricing data:', error);
    }
  
    return null;
  };
  
  // Example usage:
  const planIdToMatch = "907181013";
  console.log(`Matching price for PlanId '${planIdToMatch}':`, findPriceByPlanId(countryPricing, planIdToMatch));
  
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
        <div className="text-lg text-white">Starter</div>
        <h3 className="text-white">
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            499
          </span>
          <span className="ml-3"> 249₹ </span>
        </h3>

        <div className="text-xs text-white">Billed Monthly</div>
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
          <h5 className="font-bold">Starter Plan Includes :</h5>
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
              Image Generation upto 500.
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
              Chart Generation upto 20 Times.
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
              5 Min Audio Transcript upto 15 Times.
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
              Text to Voice Generation with 500 characters & 3 different voices
              upto 15 Times.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
