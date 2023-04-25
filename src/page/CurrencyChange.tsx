import { useState, useMemo, useEffect } from "react";
import { Stack, Flex, HStack } from "@chakra-ui/react";
import AmountInput from "../components/AmountInput";
import CurrencySelector from "../components/CurrencySelector";
import ConversionTitle from "../components/conversionTitle";
import ConversionExchange from "../components/ConversionAmount";
import InformativeBanner from "../components/informativeBanner";
import useRates from "../hooks/useRates";

const CurrencyChange = () => {
  const [baseAmount, setBaseAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [currencies, setCurrencies] = useState<string[]>(["USD", "EUR"]);

  const {
    response: rates,
    error,
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

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              />
            </HStack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default CurrencyChange;
