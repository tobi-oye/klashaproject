import { VStack, HStack, Text, StackDivider } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const SectionOne = () => {
  const cardHeader = {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
  };
  const textStyleCountry = {
    pl: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "22px",
  };
  const amountTextStyle = {
    fontWeight: "700",
    fontSize: "36px",
    letterSpacing: "0.1px",
    lineHeight: "43px",
    color: "#2A2A2A",
  };
  return (
    <HStack
      w="685px"
      align="start"
      border="1px solid #EBEBEB"
      borderRadius="10px"
    >
      <VStack align="start" w="385px" p="20px">
        <HStack justify="space-between" w="100%">
          <Text color="rgba(44, 102, 93, 1)" {...cardHeader}>
            Total account balance
          </Text>
          <HStack bg="#F5F5F5" p="10px" borderRadius="4px">
            <Text {...cardHeader}>USD </Text>
            <ChevronDownIcon color="rgba(44, 102, 93, 1)" />
          </HStack>
        </HStack>
        <HStack justify="space-between" w="100%">
          <VStack align="start">
            <Text {...amountTextStyle}>$5,332.18</Text>
            <Text
              fontSize="16px"
              lineHeight="19px"
              letterSpacing="0.1px"
              fontWeight="400"
              color="#A6ABB2"
            >
              1 USD = 381.97 NGN
            </Text>
          </VStack>

          <VStack
            align="start"
            border="1px solid #EBEBEB"
            borderRadius="4px"
            boxSize="97px"
            spacing="5px"
            divider={<StackDivider borderColor="gray.200" />}
          >
            <Text {...textStyleCountry} pt="5px">
              KES
            </Text>
            <Text {...textStyleCountry}>NGN</Text>
            <Text {...textStyleCountry} pb="5px">
              GHC
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack
        align="start"
        w="320px"
        p="25px"
        bg="#F5F5F5"
        h="190px"
        borderRadius="10px"
      >
        <Text {...cardHeader} mb="51px">
          Funds on hold
        </Text>
        <Text {...amountTextStyle}>$5,332.18</Text>
      </VStack>
    </HStack>
  );
};
export default SectionOne;
