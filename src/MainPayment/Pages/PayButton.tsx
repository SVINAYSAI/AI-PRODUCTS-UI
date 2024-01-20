import { useCallback, useEffect } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

// Assume you have a function to create the order asynchronously
const createOrder = async (params: any) => {
  // Your implementation to create and return an order
  // This is just a placeholder, replace it with your actual logic
  return { id: "someOrderId" };
};

export default function App() {
  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async () => {
    try {
      // Replace 'params' with your actual parameters for creating the order
      const params = {/* actual parameters */};
      const order = await createOrder(params);

      const options: RazorpayOptions = {
        key: "rzp_test_dIEAmku2P7C3UW",
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
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

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
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
