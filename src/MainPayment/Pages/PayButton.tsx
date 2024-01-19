import React, { useEffect } from 'react';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const PayButton: React.FC = () => {
  useEffect(() => {
    const options = {
      key: "YOUR_KEY_ID",
      amount: "50000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_9A33XWu170gUtm",
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // Check if Razorpay is available
    if (window.Razorpay) {
      const rzp1 = new window.Razorpay(options);

      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        rzp1.open();
        e.preventDefault();
      };

      const buttonElement = document.getElementById('rzp-button1') as HTMLButtonElement | null;
      if (buttonElement) {
        buttonElement.addEventListener('click', handleClick);
      }

      // Cleanup event listener when the component unmounts
      return () => {
        if (buttonElement) {
          buttonElement.removeEventListener('click', handleClick);
        }
      };
    } else {
      console.error("Razorpay script not loaded. Make sure the script is included in your HTML file.");
    }
  }, []);

  return <button id="rzp-button1">Pay</button>;
};

export default PayButton;
