import { useEffect, useState } from "react";
interface Pricing {
    currency_symbol: string;
    data: string; // Assuming 'data' is a string containing a JSON array
  }
export default function PricingLogic(){
  const [ipInfo, setIpInfo] = useState<any>(null);
  const [countryPricing, setCountryPricing] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleGetIpInfo();
  }, []);

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
  const findPriceByPlanId = (countryPricing: Pricing | undefined, planId: string) => {
    const pricingData = countryPricing?.data || '[]';
  
    try {
      const parsedData = JSON.parse(pricingData);
  
      if (Array.isArray(parsedData)) {
        // Find the item with the matching plainid
        const matchingItem = parsedData.find(item => item.pricing && item.pricing[planId]);
  
        // If found, return the price
        if (matchingItem) {
          const price = matchingItem.pricing[planId].price;
          return price || null;
        }
      }
    } catch (error) {
      console.error('Error parsing pricing data:', error);
    }
  
    return null;
  };
  
  // Example usage:
  const planIdToMatch = "907181013";
  console.log(`Matching price for PlanId '${planIdToMatch}':`, findPriceByPlanId(countryPricing, planIdToMatch));
  

  
  
  return{
    ipInfo,
    error,
    countryPricing,
    setIpInfo,
    setError,
    handleGetIpInfo,
  }
}
