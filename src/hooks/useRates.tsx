import { useEffect, useState } from "react";
import { ratesObject } from "../types/rates";
import axios from "axios";

interface Props {
  baseCurrency: string;
}

const BASE_URL = "https://api.vatcomply.com";

const useRates = (props: Props) => {
  const { baseCurrency } = props;
  const [response, setResponse] = useState<ratesObject>();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const getRates = async (baseCurrency: string) => {
    setloading(true);
    try {
      const response = await axios.get<ratesObject>(
        `${BASE_URL}/rates?base=${baseCurrency}`
      );
      setResponse(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getRates(baseCurrency);
  }, [baseCurrency]);

  return {
    response,
    error,
    loading,
  };
};

export default useRates;
