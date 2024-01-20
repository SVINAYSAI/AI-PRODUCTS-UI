import { useCallback, useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

interface Order {
  id: string;
  // Define other properties of the order as needed
}

export default function App() {
  const [Razorpay, isLoaded] = useRazorpay();

  const createOrder = async (params: any): Promise<Order> => {
    // Implement your createOrder logic here
    // For example, you might make an API call to create an order and return it
    const order: Order = {
      id: "order_NQS7xPI52kzbDg",
    };
    return order;
  };

  const handlePayment = useCallback(async () => {
    try {
      const params = {}; // Define your params object or fetch it as needed
      const order = await createOrder(params);

      const options: RazorpayOptions = {
        key: "rzp_test_dIEAmku2P7C3UW",
        amount: String(3000),
        currency: "INR",
        name: "Acme Corp",
        // description: "Test Transaction",
        // image: "https://example.com/your_logo",
        order_id: order.id,
        // customer_id:"",
        // send_sms_hash: true,
        // handler: (res) => {
        //   console.log(res);
        // },
        // prefill: {
        //   name: "Piyush Garg",
        //   email: "youremail@example.com",
        //   contact: "9999999999",
        // },
        // notes: {
        //   address: "Razorpay Corporate Office",
        // },
        // theme: {
        //   color: "#3399cc",
        // },
        
      };

      console.log("options", options)
      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  }, [Razorpay, createOrder]);

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
