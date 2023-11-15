import { useState } from "react";
import Footer from "./HomePages/Footer";
import Heading from "./pricing_page/heading";
import Plain1 from "./pricing_page/pricing_plain/plain1";
import Plain2 from "./pricing_page/pricing_plain/plain2";
import Plain3 from "./pricing_page/pricing_plain/plain3";
import Plain4 from "./pricing_page/pricing_plain/plain4";
import Plaindetails1 from "./pricing_page/plain_details/plain_details1";

type AccordionType = "Monthly" | "Yearly";

export default function Pricing() {
  const [activeAccordion, setActiveAccordion] = useState<AccordionType>("Monthly");

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
              <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-2 lg:space-y-0">
                <Plain1 />
                <Plain2 />
              </div>
            )}

            {activeAccordion === "Yearly" && (
              <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-2 lg:space-y-0">
                <Plain3 />
                <Plain4 />
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
