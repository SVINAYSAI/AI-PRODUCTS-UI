import { useState } from "react";
import Footer from "./HomePages/Footer";
import Heading from "./pricing_page/heading";
import MonthlyPlan1 from "./pricing_page/pricing_plan/Monthly_plan/plan1";
import MonthlyPlan2 from "./pricing_page/pricing_plan/Monthly_plan/plan2";
import MonthlyPlan3 from "./pricing_page/pricing_plan/Monthly_plan/plan3";
import MonthlyPlan4 from "./pricing_page/pricing_plan/Monthly_plan/plan4";
import HalfYearPlan1 from "./pricing_page/pricing_plan/6Month_plan/plan1";
import HalfYearPlan2 from "./pricing_page/pricing_plan/6Month_plan/plan2";
import HalfYearPlan3 from "./pricing_page/pricing_plan/6Month_plan/plan3";
import HalfYearPlan4 from "./pricing_page/pricing_plan/6Month_plan/plan4";
import YearPlan1 from "./pricing_page/pricing_plan/yearly_plan/plan1";
import YearPlan2 from "./pricing_page/pricing_plan/yearly_plan/plan2";
import YearPlan3 from "./pricing_page/pricing_plan/yearly_plan/plan3";
import YearPlan4 from "./pricing_page/pricing_plan/yearly_plan/plan4";
import Plaindetails1 from "./pricing_page/plain_details/plain_details1";


type AccordionType = "Monthly" | "6Month" | "Yearly";

export default function Pricing() {
  const [activeAccordion, setActiveAccordion] =
    useState<AccordionType>("Monthly");

  const handleAccordionClick = (accordion: AccordionType) => {
    setActiveAccordion(accordion);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Heading />

          <div className="flex justify-center mb-4">
            <button
              className={`${
                activeAccordion === "Monthly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded mr-2`}
              onClick={() => handleAccordionClick("Monthly")}
            >
              Monthly
            </button>

            <button
              className={`${
                activeAccordion === "6Month"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded mr-2`}
              onClick={() => handleAccordionClick("6Month")}
            >
              6-Month
            </button>

            <button
              className={`${
                activeAccordion === "Yearly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded ml-2`}
              onClick={() => handleAccordionClick("Yearly")}
            >
              Yearly
            </button>
          </div>

          <div>
            {activeAccordion === "Monthly" && (
              <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-2 lg:space-y-0">
                <MonthlyPlan1 />
                <MonthlyPlan2 />
                <MonthlyPlan3 />
                <MonthlyPlan4 />
              </div>
            )}

            {activeAccordion === "6Month" && (
              <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-2 lg:space-y-0">
                <HalfYearPlan1 />
                <HalfYearPlan2 />
                <HalfYearPlan3 />
                <HalfYearPlan4 />
              </div>
            )}

            {activeAccordion === "Yearly" && (
              <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-2 lg:space-y-0">
                <YearPlan1 />
                <YearPlan2 />
                <YearPlan3 />
                <YearPlan4 />
              </div>
            )}
          </div>

          <Plaindetails1 />
          
        </div>
      </section>

      <Footer />
    </>
  );
}
