import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const curr = currency.toLowerCase();

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[curr]))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  // Optional: Log when data updates
  useEffect(() => {
    console.log("Fetched data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
