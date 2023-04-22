import axios from "axios";

const BASE_URL = "https://api.vatcomply.com";

export interface ratesObjectInterface {
  base:  string;
  date:  Date;
  rates: { [key: string]: number };
 }

export const getRates = async (baseCurrency: string) => {
  const response = await axios.get<ratesObjectInterface>(`${BASE_URL}/rates?base=${baseCurrency}`);
  return response.data;
};
