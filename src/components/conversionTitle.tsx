import React from "react";
import { Stack, Text } from "@chakra-ui/react";

type Props = {
  baseAmount: number | null;
  fromCurrency: string;
  toCurrency: string;
};

const ConversionTitle: React.FC<Props> = ({
  baseAmount,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <Stack
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      height={"295px"}
      backgroundColor={"#1A8DFF"}
    >
      <Text
        width={["249px", "100%"]}
        textAlign={"center"}
        marginTop={12}
        fontSize={"32px"}
        lineHeight={"32px"}
        color={"#FFFFFF"}
      >
        {isNaN(Number(baseAmount)) ? " " : baseAmount} {fromCurrency} to{" "}
        {toCurrency} - Convert {fromCurrency} to {toCurrency}
      </Text>
    </Stack>
  );
};

export default ConversionTitle;
