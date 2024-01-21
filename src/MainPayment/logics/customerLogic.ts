import { useCallback, useEffect, useState } from 'react';
import { initiateRazorpay } from "./Razorpay_logic";
import useRazorpay from "react-razorpay";

export interface Currency {
  "Currency Name": string;
  "ISO Code": string;
}

interface ApiResponse {
  API_ID: string;
  Present_Order_ID: string;
  contact: string;
  email: string;
  iso_code: string;
  name: string;
  notes_key_1: string;
}

export function useCustomerLogic() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [dropdownVisible1, setDropdownVisible1] = useState<boolean>(false);
  const [Razorpay, isLoaded] = useRazorpay();
  const [responseData, setResponseData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (dropdownVisible && dropdownVisible1) {
      // Close dropdownVisible1 if it's open when opening dropdownVisible
      setDropdownVisible1(false);
    } else if (dropdownVisible1 && dropdownVisible) {
      // Close dropdownVisible if it's open when opening dropdownVisible1
      setDropdownVisible(false);
    }
  }, [dropdownVisible, dropdownVisible1]);

  const [formData, setFormData] = useState<{
    Name: string;
    Contact: string;
    Email: string;
    currency_data: Currency | null;
  }>({
    Name: '',
    Contact: '',
    Email: '',
    currency_data: null,
  });

  const fetchCurrencies = useCallback(async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_currencies');
        if (response.ok) {
            const data: Currency[] = await response.json();
            setCurrencies(data);
        } else {
            console.error('Error fetching currencies');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}, []);

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  const handleSearch = (query: string) => {
    // Filter currencies based on the search query
    const filteredCurrencies = currencies.filter((currency) =>
      currency['Currency Name'].toLowerCase().includes(query.toLowerCase()) ||
      currency['ISO Code'].toLowerCase().includes(query.toLowerCase())
    );
    setSelectedCurrencies(filteredCurrencies);
    setDropdownVisible(true);
    setSearchQuery(query);
  };

  const handleDropdownClick = (selectedCurrency: Currency) => {
    setSelectedCurrencies([]);
    setDropdownVisible(false);
    setSearchQuery('');
    setFormData((prevFormData) => ({
      ...prevFormData,
      currency_data: selectedCurrency,
    }));
    // Log the data
    console.log('Selected Currency Data:', selectedCurrency);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      Name: formData.Name,
      Contact: formData.Contact,
      Email: formData.Email,
      currency: formData.currency_data,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Customer created successfully');
      } else {
        const errorData = await response.json();
        console.error('Error creating customer:', errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOrder = async () => {
    try {
        const requestData = {
            amount: "500",
            currency: formData.currency_data?.['ISO Code'],
            email: formData.Email,
        };

        console.log('Sending to backend:', requestData);

        const response = await fetch('http://127.0.0.1:5000/razorpay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        // Handle the response as needed
        const data = await response.json();
        console.log('Response from server:', data);
        setTimeout(() => {
            payButton();
        }, 5000);

        // You can perform additional actions based on the server response here
    } catch (error) {
        console.error('Error:', error);
    }
  };

  const payButton = async () => {
    try {
      const requestData = {
        Email: formData.Email,
      };
  
      const response = await fetch('http://127.0.0.1:5000/razorpay/get_api_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestData }),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data: ApiResponse = await response.json();
      setResponseData(data);
      setError(null);
  
      // Assuming data is received from the backend and is structured accordingly
      const razorpayData = {
        key: data.API_ID, // Replace with the actual API key from the backend response
        amount: "3000", // Replace with the actual amount
        currency: data.iso_code, // Replace with the actual ISO code
        name: data.name,
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: "order_NQm6aqL38cRvkM", // Replace with the actual order ID
        customer_id: data.Present_Order_ID, // Optional: Add customer ID if available
        send_sms_hash: true,
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.contact,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      // Now call the initiateRazorpay function with the received data
      initiateRazorpay(Razorpay, razorpayData)();
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  const toggleDropdownVisibility = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
    setDropdownVisible1(false);
  };

  const toggleDropdownVisibility1 = () => {
    setDropdownVisible1((prevVisible1) => !prevVisible1);
    setDropdownVisible(false);
  };

  return {
    currencies,
    selectedCurrencies,
    searchQuery,
    dropdownVisible,
    dropdownVisible1,
    formData,
    handleSearch,
    handleDropdownClick,
    handleChange,
    handleSubmit,
    handleOrder,
    payButton,
    toggleDropdownVisibility,
    toggleDropdownVisibility1,
    setSearchQuery,
  };
}