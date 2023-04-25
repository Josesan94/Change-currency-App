import { Stack, VStack, Text, Box } from "@chakra-ui/react";
import React from "react";
import useRates from "../hooks/useRates";
import { formatDate } from "../utils/formatDate";

type Props = {
  fromCurrency: string;
  toCurrency: string;
};

const InformativeBanner: React.FC<Props> = ({ fromCurrency, toCurrency }) => {
  const { response } = useRates({ baseCurrency: fromCurrency });

  const date = response?.date;

  const formattedDate = formatDate(date);

  return (
    <VStack
      alignItems={"flex-end"}
      display={{ base: "none", sm: "none", md: "flex" }}
    >
      <Stack
        padding={"10px"}
        background={"#E8F3FF"}
        boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.05)"}
        borderRadius={"8px"}
        maxWidth="500px"
        minHeight="105px"
      >
        <Text fontSize={"14px"} lineHeight={"36px"} color={"#000000"}>
          {" "}
          We use the mid-market rate for our Converter. This is for
          informational purposes only. You won’t receive this rate when sending
          money.{" "}
        </Text>
      </Stack>
      <Text fontSize={"12px"} lineHeight={"36px"} color={"#757575"}>
        <Box as="span" textDecoration="underline">
          {fromCurrency}
        </Box>
        {" to "}
        <Box as="span" textDecoration="underline">
          {toCurrency}
        </Box>
        {" conversion — Last updated "}
        {formattedDate} 19:17 UTC
      </Text>
    </VStack>
  );
};

export default InformativeBanner;
