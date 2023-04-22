import React from "react";
import { Input, VStack, Text } from "@chakra-ui/react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

 const AmountInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <VStack marginTop={"0.5rem"} width={["279px"]} alignItems={"start"}>
        <Text fontWeight={"bold"}>Amount</Text>
        <Input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      </VStack>
      
    </>
  );
};


export default AmountInput;
