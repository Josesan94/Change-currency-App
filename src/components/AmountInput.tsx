import React from "react";
import {
  Input,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const AmountInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <VStack marginTop={'0.5rem'} width={['279px']} alignItems={'start'}>
        <Text fontWeight={'bold'}>Amount</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<FaDollarSign />} />
          <Input
            type='number'
            min={0}
            value={value.toString()}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            paddingLeft='2rem'
            fontWeight='bold'
          />
        </InputGroup>
      </VStack>
    </>
  );
};

export default AmountInput;
