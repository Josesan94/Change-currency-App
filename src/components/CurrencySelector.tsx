import React from "react";
import { Select, VStack, Text, Stack } from "@chakra-ui/react";
import SwapCurrencyButton from "./SwapCurrencyButton";

interface Props {
  selectedCurrency: string;
  setFromCurrency: (currency: string) => void;
  setToCurrency: (currency: string) => void;
  currencies: string[];
  toCurrency: string;
  handleSwapCurrencies: () => void;
}

const CurrencySelector: React.FC<Props> = ({
  selectedCurrency,
  setFromCurrency,
  setToCurrency,
  currencies,
  toCurrency,
  handleSwapCurrencies,
}) => {
  return (
    <>
      <VStack width="279px" alignItems={"start"}>
        <Text fontWeight={"bold"}>From</Text>
        <Select
          value={selectedCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          fontWeight={"bold"}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </VStack>
      <SwapCurrencyButton onClick={() => handleSwapCurrencies()} />
      <VStack width="279px" alignItems={"start"}>
        <Text fontWeight={"bold"}>To</Text>
        <Select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          fontWeight={"bold"}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </VStack>
    </>
  );
};

export default CurrencySelector;
