import React, { useEffect, useState } from "react";
import "animate.css"; // Import Animate.css
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

export default function AboutCounter() {
  const [counters, setCounters] = useState({
    clients: 0,
    members: 0,
    awards: 0,
    experience: 0,
  });

  useEffect(() => {
    const updateCounters = () => {
      const elements = document.querySelectorAll(".fables-counter-value");

      elements.forEach((element, index) => {
        const countValue = element.getAttribute("data-count");

        // Add a null check
        if (countValue !== null) {
          const currentValue =
            counters[Object.keys(counters)[index] as keyof typeof counters];

          if (currentValue < parseInt(countValue)) {
            setCounters((prevCounters) => {
              const counterKey = Object.keys(prevCounters)[
                index
              ] as keyof typeof prevCounters;
              return {
                ...prevCounters,
                [counterKey]: currentValue + 1,
              };
            });
          }
        }
      });
    };

    // Set up a timer to update counters after 6 seconds
    const timer = setTimeout(() => {
      updateCounters();
    }, 50);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [counters]); // Include counters in the dependency array

  return (
    <>
      <div className="border fables-after-overlay my-3 my-md-5 pt-4 pb-0 py-md-5 bg-rules">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2
                  className="fables-counter-value font-40 font-weight-bold text-black border fables-second-border-color d-inline-block px-4 py-2 mb-4"
                  data-count="200"
                >
                  {counters.clients}
                </h2>
                <div className="font-14 semi-font text-black">
                  SATISFIED CLIENTS
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2
                  className="fables-counter-value font-40 font-weight-bold text-black border fables-second-border-color d-inline-block px-4 py-2 mb-4"
                  data-count="38"
                >
                  {counters.members}
                </h2>
                <div className="font-14 semi-font text-black">
                  COMPANY MEMBERS
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2
                  className="fables-counter-value font-40 font-weight-bold text-black border fables-second-border-color d-inline-block px-4 py-2 mb-4"
                  data-count="50"
                >
                  {counters.awards}
                </h2>
                <div className="font-14 semi-font text-black">AWWARDS WIN</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2
                  className="fables-counter-value font-40 font-weight-bold text-black border fables-second-border-color d-inline-block px-4 py-2 mb-4"
                  data-count="1"
                >
                  {counters.experience}
                </h2>
                <div className="font-14 semi-font text-black">
                  YEARS EXPIRIENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
