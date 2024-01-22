import { useCallback, useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";


export default function App() {
  const [Razorpay, isLoaded] = useRazorpay();

  

  const handlePayment = useCallback(async () => {
    try {
      const options: RazorpayOptions = {
        key: "rzp_test_dIEAmku2P7C3UW",
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: "order_NQm6aqL38cRvkM",
        customer_id: "",
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
  }, [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}
