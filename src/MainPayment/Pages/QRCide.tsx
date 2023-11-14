import React, { useState } from "react";
import Paytm from "../PaymentComponents/paytm.svg";
import Gpay from "../PaymentComponents/GPay.svg";
import Snap from "../PaymentComponents/Snap.jpg";
import { Link } from "react-router-dom";

export default function QRCode() {
  const [paytmOpen, setPaytmOpen] = useState(false);
  const [gpayOpen, setGpayOpen] = useState(false);

  const handlePaytmClick = () => {
    setPaytmOpen(!paytmOpen);
    setGpayOpen(false);
  };

  const handleGpayClick = () => {
    setGpayOpen(!gpayOpen);
    setPaytmOpen(false);
  };

  return (
    <>
      <div className="max-w-md mx-auto mb-4 bg-white">
        <form>
          <div className="grid grid-cols-2 gap-6 w-[35%]">
            <div>
              <img src={Paytm} alt="" onClick={handlePaytmClick} />
              {paytmOpen && (
                <div>
                  <img src={Snap} alt="" />
                </div>
              )}
            </div>
            <div>
              <img src={Gpay} alt="" onClick={handleGpayClick} />
              {gpayOpen && (
                <div>
                  <img src={Snap} alt="" />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
