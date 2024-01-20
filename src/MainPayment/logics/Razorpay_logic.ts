// razorpay.ts
import { RazorpayOptions } from "react-razorpay";

interface RazorpayData {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  customer_id?: string;
  send_sms_hash: boolean;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

export const initiateRazorpay = (Razorpay: any, razorpayData: RazorpayData) => {
  const handlePayment = () => {
    try {
      const options: RazorpayOptions = {
        ...razorpayData,
        handler: (res) => {
          console.log(res);
        },
      };

      console.log("options", options);
      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };

  return handlePayment;
};
