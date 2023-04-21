import { Container, Stack, Text, Flex, Input, Select, VStack, HStack, Box } from "@chakra-ui/react"
import { NavigationBar } from "./navBar"

function App() {


  return (
    <>
      <NavigationBar/>
      <Container padding={0} maxW='container.2xl'>
        <Stack  flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} height={'295px'} backgroundColor={'#1A8DFF'} >
          <Text width={['249px', '100%']}  textAlign={'center'} marginTop={12}  fontSize={'32px'} lineHeight={'32px'} color={'#FFFFFF'}>
          100 EUR to USD - Convert Euros to US Dollars
          </Text>
        </Stack>
        <Stack  borderRadius={'md'} alignItems={"center"} >
        <Flex
          width={["80%","90%", "90%"]} // Update the width property to be responsive
          height={["484px","400px"]} // Update the height property to be responsive
          position="absolute"
          marginTop={["-130px", "-150px"]}
          boxShadow={'0px 5px 5px rgba(0, 0, 0, 0.1);'}
          borderRadius={'8px'}
          background="#FFFF"
          padding={5}
        >
          <Stack flexDirection={'column'} gap={{base:0, sm: 10}} justifyContent={'flex-start'} width="100%" >
            <Stack flexDirection={['column', 'row']} gap={2}  width="100%" alignItems={'center'} justifyContent={'space-between'}>
              <VStack marginTop={'0.5rem'} width={["279px"]} alignItems={'start'} >
              <Text fontWeight={'bold'}>Amount</Text>
              <Input/>
              </VStack>
              <VStack width="279px" alignItems={'start'}>

              <Text fontWeight={'bold'}>From</Text>
              <Select>
                <option value="EUR">EUR</option>
              </Select>
              </VStack>
              <VStack  alignItems={'flex-start'} width={["95%", 'auto']} paddingTop={{base:0,sm:5}} >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="20.5" fill="white" stroke="#177FE5"/>
                <g clip-path="url(#clip0_1_19383)">
                <path d="M29.9101 23.6259L28.7412 21.7855C28.6963 21.6958 28.5614 21.606 28.3816 21.606C28.2018 21.5611 28.0219 21.606 27.977 21.6958L26.1787 22.9526C26.0439 23.0424 25.954 23.1771 25.909 23.3117C25.8641 23.4464 25.909 23.581 25.9989 23.7157C26.0888 23.8504 26.2237 23.9402 26.3586 23.985C26.4934 24.0299 26.6283 23.985 26.7632 23.8953L27.3926 23.4464L27.3026 23.7157C26.6283 26.6783 23.9759 28.7431 20.9639 28.7431C18.0417 28.7431 15.4792 26.813 14.715 24.0299C14.67 23.8504 14.5801 23.7606 14.4453 23.7157C14.3553 23.6708 14.2654 23.6259 14.1306 23.6259C14.0856 23.6259 13.9957 23.6259 13.9957 23.6708H13.9507C13.8159 23.7157 13.681 23.8055 13.5911 23.985C13.5012 24.1197 13.5012 24.2544 13.5461 24.389C14.4453 27.6658 17.4573 30 20.9189 30C24.5154 30 27.6623 27.4414 28.4265 23.9401L28.5165 23.7157L28.966 24.2993C29.0559 24.4339 29.1908 24.5237 29.3257 24.5686C29.4605 24.6135 29.5954 24.5686 29.7303 24.4788C29.8651 24.389 29.955 24.2544 30 24.1197C30 23.8953 30 23.8055 29.9101 23.6259Z" fill="#034EEF"/>
                <path d="M14.2205 20.2145L15.9738 18.9576C16.1086 18.8678 16.1985 18.7332 16.2435 18.5985C16.2884 18.4638 16.2435 18.3292 16.1536 18.1945C16.0637 18.0599 15.9288 17.9701 15.7939 17.9252C15.6591 17.8803 15.5242 17.9252 15.3893 18.015L14.7599 18.4638L14.8499 18.1496C15.4343 15.2768 18.0417 13.1671 21.0987 13.1671C24.0209 13.1671 26.5834 15.0973 27.3476 17.8803C27.3926 18.0599 27.4825 18.1496 27.6173 18.1945C27.7522 18.2843 27.932 18.2843 28.0669 18.2394C28.2018 18.1945 28.3366 18.1047 28.4265 17.9252C28.5165 17.7905 28.5165 17.6559 28.4715 17.5212C27.5724 14.2893 24.5154 12 21.0987 12C17.5023 12 14.3553 14.5586 13.5911 18.0599L13.5012 18.2843L13.0516 17.7007C12.9617 17.5661 12.8268 17.4763 12.692 17.4314H12.6021C12.4672 17.4314 12.3323 17.4763 12.2874 17.5661C12.1525 17.6559 12.0626 17.7905 12.0176 17.9252C11.9727 18.0599 12.0176 18.1945 12.1075 18.3292L13.3663 20.1247C13.4113 20.2145 13.5461 20.3042 13.726 20.3042C13.9058 20.3491 14.0856 20.3042 14.2205 20.2145Z" fill="#034EEF"/>
                <path d="M20.784 26.5885C20.9189 26.7232 21.0538 26.7681 21.1886 26.7681C21.3235 26.7681 21.5033 26.6783 21.6382 26.5885C21.7731 26.4539 21.818 26.3641 21.818 26.1845V25.197L22.0428 25.1521C22.6272 25.0175 23.1667 24.7481 23.6163 24.2993C24.0209 23.8953 24.2456 23.3566 24.2456 22.7731C24.2906 22.1895 24.1108 21.6958 23.7511 21.3367C23.3915 20.9776 22.852 20.7082 22.0428 20.5287L21.818 20.4838V17.611L22.2226 17.7007C22.7171 17.8354 23.1217 18.1047 23.3016 18.2394C23.4364 18.3741 23.7062 18.3292 23.886 18.1496C23.9759 18.0599 24.0658 17.9252 24.0658 17.7905C24.0658 17.5661 23.9759 17.4314 23.7511 17.2519C23.2566 16.8479 22.7171 16.6234 22.0428 16.4888L21.818 16.4439V15.8155C21.818 15.6359 21.7731 15.5012 21.6382 15.4115C21.5033 15.2768 21.3685 15.2319 21.2336 15.2319C21.0987 15.2319 20.9189 15.2768 20.784 15.4115C20.6941 15.5461 20.6492 15.6808 20.6492 15.8155V16.399L20.4244 16.4439C19.7051 16.5337 19.1207 16.803 18.6711 17.2519C18.2216 17.7007 17.9968 18.2394 17.9968 18.8678C17.9968 20.1696 18.761 20.9327 20.3794 21.2469L20.6042 21.2918V24.2544L20.2895 24.2095C19.9748 24.1646 19.7051 24.0748 19.4803 23.9402C19.2555 23.8504 19.0757 23.7157 18.8509 23.5362C18.806 23.4913 18.7161 23.4464 18.6711 23.4015C18.5812 23.3117 18.4913 23.2668 18.3564 23.2668C18.1766 23.2668 18.0867 23.3117 17.9968 23.4015C17.8619 23.5362 17.8169 23.6259 17.8169 23.7606C17.8169 23.985 17.9069 24.1197 18.1316 24.2993C18.4913 24.6135 18.8509 24.8379 19.2106 24.9726C19.5702 25.1072 19.9748 25.197 20.3794 25.2419H20.6042V26.1397C20.6042 26.3192 20.6492 26.4539 20.784 26.5885ZM21.818 21.5162L22.2226 21.6958C22.4924 21.8304 22.6722 21.9651 22.852 22.1446C23.0768 22.414 23.0768 22.6833 23.0768 22.9077C23.0768 23.1322 22.9869 23.4015 22.8071 23.6259C22.6722 23.7606 22.4924 23.8953 22.2676 24.0299L21.863 24.2095V21.5162H21.818ZM20.2895 20.0798C20.0198 19.99 19.7051 19.8105 19.4803 19.6309C19.2555 19.4065 19.1656 19.1372 19.1656 18.7781C19.1656 18.4638 19.2555 18.1945 19.4803 17.9701C19.6601 17.7905 19.9299 17.6559 20.3345 17.5661L20.6941 17.5212V20.2145L20.2895 20.0798Z" fill="#034EEF"/>
                </g>
                <defs>
                <clipPath id="clip0_1_19383">
                <rect width="18" height="18" fill="white" transform="translate(12 12)"/>
                </clipPath>
                </defs>
                </svg>
              </VStack>
              <VStack width="279px" alignItems={'start'}>
              <Text fontWeight={'bold'}>To</Text>
              
              <Select>
              <option value="DOL">DOL</option>
              </Select>
              </VStack>
            </Stack>
            <HStack paddingTop={5} width="100%" gap={{md:50, lg:150}} justifyContent={'space-between'}>
              <VStack padding={'0 !important'}  alignItems={'flex-start'}>
                <Text fontWeight={'bold'} fontSize={{base:'24px', sm:'32px'}} lineHeight={'36px'} color={'#000000'}>
                1.00 Euro =
                1.0627478 US Dollars
                </Text>
                <Text  fontSize={'16px'} lineHeight={'36px'} color={'#757575'}>
                1 USD = 0.941004 EUR
                </Text>
              </VStack>
              <VStack   alignItems={'flex-end'} display={{base:'none',sm:'none', md:'flex'}}>
                <Stack padding={'10px'} background={'#E8F3FF'} boxShadow={'0px 2px 4px rgba(0, 0, 0, 0.05)'} borderRadius={'8px'} maxWidth="500px" minHeight="105px">
                  <Text  fontSize={'14px'} lineHeight={'36px'} color={'#000000'}> We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. </Text>
                </Stack>
                <Text fontSize={'12px'} lineHeight={'36px'} color={'#757575'}>Euro to US Dollar conversion — Last updated Dec 15, 2022, 19:17 UTC</Text>
              </VStack>
            </HStack>
          </Stack>
        </Flex>
      </Stack>         
      </Container>
    </>
  )
}

export default App
