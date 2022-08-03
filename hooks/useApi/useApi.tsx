import React, { useState, useEffect } from "react";

interface useApiProps {
  apiEndpoint: string;
}

export const useApi = ({ apiEndpoint }: useApiProps) => {
  const [apiData, setApiData] = useState<{ name: string }>();

  useEffect(() => {
    let isMounted = true;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        if (isMounted) {
          setApiData(data);
        }
      });
    return () => {
      // cleanup function
      isMounted = false;
    };
  }, [apiEndpoint]);

  return apiData;
};
