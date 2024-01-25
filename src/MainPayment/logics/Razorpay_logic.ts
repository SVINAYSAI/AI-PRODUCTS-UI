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
        handler: async (res) => {
          console.log(res);

          // Check if the payment was successful
          if (res.razorpay_payment_id) {
            try {
              // Send the razorpay_payment_id to the backend
              const backendResponse = await fetch('http://127.0.0.1:5000/paymentid', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  payment_Id: res.razorpay_payment_id,
                  email: razorpayData.prefill.email,
                  // Add any other required data
                }),
              });

              if (backendResponse.ok) {
                const backendData = await backendResponse.json();
                console.log('Backend response:', backendData);
                // Perform any additional actions based on the backend response
              } else {
                console.error('Error connecting to /paymentid endpoint');
              }
            } catch (error) {
              console.error('Error connecting to the backend:', error);
            }
          } else {
            console.error('Payment failed or was canceled');
            // Handle payment failure or cancellation
          }
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
