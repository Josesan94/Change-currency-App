import { VStack, Text } from "@chakra-ui/layout";
import React from "react";
import { ratesObject } from "../types/rates";

interface Props {
  baseAmount: number | null;
  fromCurrency: string;
  toCurrency: string;
  convertedAmount: number | null;
  rates: ratesObject | undefined;
}

const ConversionExchange: React.FC<Props> = ({
  baseAmount,
  fromCurrency,
  toCurrency,
  convertedAmount,
  rates,
}) => {
  const currencyRates: number | undefined = rates?.rates[toCurrency];

  return (
    <VStack padding={'0 !important'} alignItems={'flex-start'}>
      <Text
        fontWeight={'bold'}
        fontSize={{ base: '24px', sm: '32px' }}
        lineHeight={'36px'}
        color={'#000000'}
        maxWidth={{base:'250px', sm:'300px'}}
      >
        {baseAmount === null
          ? "Calculating conversion rates..."
          : isNaN(baseAmount) || isNaN(Number(convertedAmount))
          ? "You need to introduce a value in the input"
          : `${baseAmount.toFixed(2)} ${fromCurrency} = ${convertedAmount === null ? "calculating..." :  `${convertedAmount.toFixed(7)} ${toCurrency}`
        } `}
      </Text>
      <Text fontSize={'16p'} lineHeight={'36px'} color={'rgba(117, 117, 117, 1)'}>
        1 {fromCurrency} = {currencyRates?.toFixed(6)} {toCurrency}
      </Text>
    </VStack>
  );
};

export default ConversionExchange;
