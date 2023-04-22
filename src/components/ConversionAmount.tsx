import { VStack, Text } from "@chakra-ui/layout";
import React from "react";

interface Props  {
    baseAmount: number | null;
    fromCurrency: string;
    toCurrency:string;
    conversionAmount: number | null;
}

const ConversionAmount: React.FC<Props> = ({baseAmount, fromCurrency, toCurrency, conversionAmount}) => {


  return (
    <VStack padding={"0 !important"} alignItems={"flex-start"}>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "24px", sm: "32px" }}
        lineHeight={"36px"}
        color={"#000000"}
      >
        {baseAmount === null ? "Calculating conversion rates..." : (
          `${baseAmount.toFixed(2)} ${fromCurrency} = ${conversionAmount} ${toCurrency}`
        )}
      </Text>
      <Text fontSize={"16px"} lineHeight={"36px"} color={"#757575"}>
        {baseAmount} {toCurrency} = 0.941004 EUR
      </Text>
    </VStack>
  );
};

export default ConversionAmount;
