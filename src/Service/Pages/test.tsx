import React, { useEffect } from "react";
import "animate.css";
import WOW from "wow.js";
import "wow.js/css/libs/animate.css";

import UI from "../../components/Service_Imgs/UX.png";
import Digital_Marketing from "../../components/Service_Imgs/Digital_Marketing.png";
import App_Development from "../../components/Service_Imgs/App_Development.png";
import Graphic_Design from "../../components/Service_Imgs/Graphic_Design.png";
import Logo_Design from "../../components/Service_Imgs/Logo_Design.png";
import Website_Design from "../../components/Service_Imgs/Website_Design.png";
import SEO_Branding from "../../components/Service_Imgs/SEO_​Branding.png";
import Web_Hosting from "../../components/Service_Imgs/Web_Hosting.png";

export default function What_we_d0() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div
            className="max-w-screen-md mb-8 lg:mb-16 wow fadeInDown"
            data-wow-delay="1s"
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="wow fadeInLeft" data-wow-duration="1.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={UI}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  UI/UX
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Plan it, create it, launch it. Collaborate seamlessly with all
                the organization and hit your marketing goals every month with
                our marketing plan.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="2.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={Website_Design}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  Website Design
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="3.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={App_Development}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  App Development
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="4.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={Digital_Marketing}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  Digital Marketing
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="5.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={Logo_Design}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  Logo Design
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="5.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={Graphic_Design}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  Graphic Design
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="5.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={SEO_Branding}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  SEO and Branding
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>

            <div className="wow fadeInLeft" data-wow-duration="5.5s">
              <div className="flex">
                <img
                  className="mb-2"
                  src={Web_Hosting}
                  style={{ height: "30px", width: "30px" }}
                />
                <h3 className="items-center justify-between px-2 flex text-xl font-bold dark:text-white">
                  Web Hosting
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
