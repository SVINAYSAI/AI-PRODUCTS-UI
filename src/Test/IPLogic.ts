import { useState } from "react";

export default function IPLogic(){

  const [ipInfo, setIpInfo] = useState<any>(null);
  const [countryPricing, setCountryPricing] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetIpInfo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ip-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIpInfo(data);
        setError(null);

        // Fetch country pricing using the country from the IP information
        setTimeout(() => {
            if (data && data.country) {
              fetchCountryPricing(data.country);
            }
          }, 2000);
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.error}`);
        setIpInfo(null);
      }
    } catch (error) {
      console.error("Error fetching IP information:", error);
      setError("Unable to fetch IP information.");
      setIpInfo(null);
    }
  };

  const fetchCountryPricing = async (country: string) => {
    try {
      const pricingResponse = await fetch(
        "http://127.0.0.1:5000/pricing/package/countrypricing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: country,
          }),
        }
      );
  
      if (pricingResponse.ok) {
        const pricingData = await pricingResponse.json();
        console.log("Country Pricing Response:", pricingData); // Log the response
        setCountryPricing(pricingData);
      } else {
        const pricingErrorData = await pricingResponse.json();
        console.error("Error fetching country pricing:", pricingErrorData.error);
        setError(`Error fetching country pricing: ${pricingErrorData.error}`);
        setCountryPricing(null);
      }
    } catch (error) {
      console.error("Error fetching country pricing:", error);
      setError("Unable to fetch country pricing.");
      setCountryPricing(null);
    }
  };
  


  return{
    ipInfo,
    error,
    countryPricing,
    setIpInfo,
    setError,
    handleGetIpInfo,
  }
}
