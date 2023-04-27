import { useState, useMemo, useEffect } from "react";
import { Stack, Flex, HStack, Text, Box } from "@chakra-ui/react";
import AmountInput from "../components/AmountInput";
import CurrencySelector from "../components/CurrencySelector";
import ConversionTitle from "../components/conversionTitle";
import ConversionExchange from "../components/ConversionAmount";
import InformativeBanner from "../components/informativeBanner";
import useRates from "../hooks/useRates";
import { formatDate } from "../utils/formatDate";

const CurrencyChange = () => {
  const [baseAmount, setBaseAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [currencies, setCurrencies] = useState<string[]>(["USD", "EUR"]);

  const {
    response: rates,
    loading,
  } = useRates({ baseCurrency: fromCurrency });

  const rate = useMemo(() => {
    if (rates && toCurrency) {
      return rates.rates[toCurrency];
    }
    return 0;
  }, [rates, toCurrency]);

  const convertedAmount = useMemo(() => {
    if (rate) {
      return baseAmount * rate;
    }
    return null;
  }, [baseAmount, rate]);

  useEffect(() => {
    if (rates && Object.keys(rates.rates).length > 0) {
      setCurrencies([...Object.keys(rates.rates)]);
    }
  }, [rates]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const date = rates?.date;

  const formattedDate = formatDate(date);



  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <ConversionTitle
        baseAmount={baseAmount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
      <Stack borderRadius={"md"} alignItems={"center"}>
        <Flex
          width={["80%", "90%", "90%"]} // Update the width property to be responsive
          height={["484px", "400px"]} // Update the height property to be responsive
          position="absolute"
          marginTop={["-130px", "-150px"]}
          boxShadow={"0px 5px 5px rgba(0, 0, 0, 0.1);"}
          borderRadius={"8px"}
          background="#FFFF"
          padding={5}
        >
          <Stack
            flexDirection={"column"}
            gap={{ base: 0, sm: 10 }}
            justifyContent={"flex-start"}
            width="100%"
          >
            <Stack
              flexDirection={["column", "row"]}
              gap={2}
              width="100%"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <AmountInput value={baseAmount} onChange={setBaseAmount} />
              <CurrencySelector
                selectedCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                setToCurrency={setToCurrency}
                currencies={currencies}
                toCurrency={toCurrency}
                handleSwapCurrencies={handleSwapCurrencies}
              />
            </Stack>
            <HStack
              paddingTop={5}
              width="100%"
              gap={{ md: 50, lg: 150 }}
              justifyContent={"space-between"}
            >
              <ConversionExchange
                rates={rates}
                baseAmount={baseAmount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                convertedAmount={convertedAmount}
              />
              <InformativeBanner
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                formattedDate={formattedDate}
              />
            </HStack>
          </Stack>
        </Flex>
      </Stack>
      <Stack 
      display={{base:'flex', md:'none'}}
      marginTop={{base:'350', sm:'250'}}
      alignItems={'flex-start'}
      marginLeft={10}
      maxWidth={{base:'290px', sm:'max-content'}}
      >
      <Text fontSize={'12px'} lineHeight={'36px'} color={'#757575'}>
        <Box as='span' textDecoration='underline'>
          {fromCurrency}
        </Box>
        {" to "}
        <Box as='span' textDecoration='underline'>
          {toCurrency}
        </Box>
        {" conversion — Last updated "}
        {formattedDate} 19:17 UTC
      </Text>
      </Stack>
    </>
  );
};

export default CurrencyChange;
