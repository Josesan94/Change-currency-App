import React from "react";
import { Select, VStack, Text } from "@chakra-ui/react";

interface Props {
  selectedCurrency: string;
  onChange: (currency: string) => void;
  currencies: string[];
}

const CurrencySelector: React.FC<Props> = ({
  selectedCurrency,
  onChange,
  currencies,
}) => {
  return (
    <>
      <VStack width="279px" alignItems={"start"}>
        <Text fontWeight={"bold"}>From</Text>
        <Select
          value={selectedCurrency}
          onChange={(e) => onChange(e.target.value)}
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
