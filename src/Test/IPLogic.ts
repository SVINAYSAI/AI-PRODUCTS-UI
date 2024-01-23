import { useState } from "react";

export default function IPLogic(){

  const [ipInfo, setIpInfo] = useState<any>(null);
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

  return{
    ipInfo,
    error,
    setIpInfo,
    setError,
    handleGetIpInfo,
  }
}
