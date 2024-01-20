// razorpay.ts
import { RazorpayOptions } from "react-razorpay";

export const initiateRazorpay = (Razorpay: any) => {
  const handlePayment = () => {
    try {
      const options: RazorpayOptions = {
        key: "your_api_key", // Replace with your actual API key
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: "order_NQm6aqL38cRvkM", // Replace with your actual order ID
        customer_id: "", // Optional: Add customer ID if available
        send_sms_hash: true,
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
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
