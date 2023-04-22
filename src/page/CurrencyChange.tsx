import {useState} from 'react';
import {
  Stack,
  Text,
  Flex,
  Input,
  Select,
  VStack,
  HStack,
} from "@chakra-ui/react";
import AmountInput from '../components/AmountInput'
import CurrencySelector from '../components/CurrencySelector';
import SwapCurrencyButton from '../components/SwapCurrencyButton';

const CurrencyChange = () => {

  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<string[]>(['USD', 'EUR']);



  return (
    <>
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
            100 EUR to USD - Convert Euros to US Dollars
          </Text>
        </Stack>
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
                <AmountInput value={amount} onChange={setAmount}/>
                <CurrencySelector 
                  selectedCurrency={fromCurrency}
                  onChange={setFromCurrency}
                  currencies={currencies}
                />
                <SwapCurrencyButton onClick={()=> ""}/>
                <VStack width="279px" alignItems={"start"}>
                  <Text fontWeight={"bold"}>To</Text>

                  <Select>
                    <option value="DOL">DOL</option>
                  </Select>
                </VStack>
              </Stack>
              <HStack
                paddingTop={5}
                width="100%"
                gap={{ md: 50, lg: 150 }}
                justifyContent={"space-between"}
              >
                <VStack padding={"0 !important"} alignItems={"flex-start"}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "24px", sm: "32px" }}
                    lineHeight={"36px"}
                    color={"#000000"}
                  >
                    1.00 Euro = 1.0627478 US Dollars
                  </Text>
                  <Text fontSize={"16px"} lineHeight={"36px"} color={"#757575"}>
                    1 USD = 0.941004 EUR
                  </Text>
                </VStack>
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
                    <Text
                      fontSize={"14px"}
                      lineHeight={"36px"}
                      color={"#000000"}
                    >
                      {" "}
                      We use the mid-market rate for our Converter. This is for
                      informational purposes only. You won’t receive this rate
                      when sending money.{" "}
                    </Text>
                  </Stack>
                  <Text fontSize={"12px"} lineHeight={"36px"} color={"#757575"}>
                    Euro to US Dollar conversion — Last updated Dec 15, 2022,
                    19:17 UTC
                  </Text>
                </VStack>
              </HStack>
            </Stack>
          </Flex>
        </Stack>
    </>
  );
};

export default CurrencyChange;
