import {
	Box,
	Flex,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';


export const NavigationBar = () => {

	return (
		<Box zIndex='1000'>
			<Flex
				bg={useColorModeValue('rgba(14, 19, 66, 1)', 'gray.100')}
				color={useColorModeValue('rgba(255, 255, 255, 1)', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				align={'center'}
                margin={0}
			>
				<Flex flex={{ base: 1 }} justify={{ base: 'flex-start', md: 'start' }}>
					<Text>Currency Change</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

