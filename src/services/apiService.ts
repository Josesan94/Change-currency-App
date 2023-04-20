import axios from "axios";

const BASE_URL = "https://api.vatcomply.com";

export const getRates = async (baseCurrency: string, wantedCurrency: string) => {
  const response = await axios.get(`${BASE_URL}/exchange?base=${baseCurrency}&to=${wantedCurrency}`);
  return response.data;
};
