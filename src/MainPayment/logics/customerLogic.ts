// customerLogic.ts
import { useCallback, useEffect, useState } from 'react';
import { initiateRazorpay } from "./Razorpay_logic";
import useRazorpay from "react-razorpay";

export interface Currency {
  "Currency Name": string;
  "ISO Code": string;
}

export function useCustomerLogic() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [Razorpay, isLoaded] = useRazorpay();
  const handlePayment = useCallback(initiateRazorpay(Razorpay), [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment]);

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
  
      const response = await fetch('http://your-flask-app-url/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      // Handle the response as needed
      const data = await response.json();
      console.log('Response from server:', data);
  
      // You can perform additional actions based on the server response here
    } catch (error) {
      console.error('Error:', error);
    }
  };  

  return {
    currencies,
    selectedCurrencies,
    searchQuery,
    dropdownVisible,
    formData,
    handleSearch,
    handleDropdownClick,
    handleChange,
    handleSubmit,
    handlePayment,
    handleOrder,
    setSearchQuery, // Add setSearchQuery to the returned object
  };
}
