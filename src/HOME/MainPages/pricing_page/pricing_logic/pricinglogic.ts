import { useEffect, useState } from "react";

interface Pricing {
  currency_symbol: string;
  data: string; // Assuming 'data' is a string containing a JSON array
}

export default function PricingLogic() {
  const [ipInfo, setIpInfo] = useState<any>(null);
  const [countryPricing, setCountryPricing] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipResponse = await fetch("http://127.0.0.1:5000/ip-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          setIpInfo(ipData);
          setError(null);

          if (ipData && ipData.country) {
            fetchCountryPricing(ipData.country);
          }
        } else {
          const errorData = await ipResponse.json();
          setError(`Error: ${errorData.error}`);
          setIpInfo(null);
        }
      } catch (error) {
        console.error("Error fetching IP information:", error);
        setError("Unable to fetch IP information.");
        setIpInfo(null);
      }
    };

    fetchData();
  }, []);

  const fetchCountryPricing = async (country: string) => {
    try {
      const pricingResponse = await fetch("http://127.0.0.1:5000/pricing/package/countrypricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: country,
        }),
      });

      if (pricingResponse.ok) {
        const pricingData = await pricingResponse.json();
        console.log("Country Pricing Response:", pricingData);
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

  

  return {
    ipInfo,
    error,
    countryPricing,
    setIpInfo,
    setError,
    fetchCountryPricing,
  };
}
