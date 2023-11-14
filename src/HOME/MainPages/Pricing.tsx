
import { Link } from "react-router-dom";
import Footer from "./HomePages/Footer";
import Heading from "./pricing_page/heading";
import Plain1 from "./pricing_page/pricing_plain/plain1";
import Plain2 from "./pricing_page/pricing_plain/plain2";
import Plain3 from "./pricing_page/pricing_plain/plain3";
import Plain4 from "./pricing_page/pricing_plain/plain4";
import Plaindetails1 from "./pricing_page/plain_details/plain_details1";
export default function Pricing() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

          <Heading/>

          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-2 lg:space-y-0">
            <Plain1/>

            <Plain2/>

            <Plain3/>

            <Plain4/>
          </div>

          <Plaindetails1/>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
