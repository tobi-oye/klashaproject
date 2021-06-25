import {
  VStack,
  HStack,
  Text,
  StackDivider,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { CalenderIcon } from "../../../../../../styles/icons";
import { tableData } from "../../_DATA";

const SectionTwo = () => {
  const headerStyle = {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
  };
  const headerTableTextStyle = {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.1px",
  };
  return (
    <VStack
      w={{ md: "100%", sm: "300px" }}
      overflowX={{ sm: "auto", md: "none" }}
      whiteSpace="nowrap"
    >
      <HStack justify="space-between" w="100%" mb="20px">
        <Text {...headerStyle}>Payout table</Text>
        <HStack spacing="13px">
          <InputGroup>
            <Input placeholder="Search something..." fontSize="14px" />
            <InputRightElement children={<Search2Icon color="#200E32" />} />
          </InputGroup>
          <InputGroup w="250px">
            <Input fontSize="14px" value="March 2020" />
            <InputRightElement children={<CalenderIcon />} />
          </InputGroup>
          <Button px="30px" py="10px" variant="solid" bg="#3D8F83">
            <Text fontSize="14px" fontWeight="700" color="white">
              Payout
            </Text>
          </Button>
        </HStack>
      </HStack>

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="10px"
        align="stretch"
        w="100%"
      >
        <HStack
          justify="space-between"
          w={{ md: "100%", sm: "700px" }}
          bg="#F5F5F5"
          px="25px"
          py="15px"
          borderRadius="5px"
        >
          <Text {...headerTableTextStyle}>Payout ID</Text>
          <Text {...headerTableTextStyle}>Source</Text>
          <Text {...headerTableTextStyle}>Date</Text>
          <Text {...headerTableTextStyle}>Amount</Text>
        </HStack>
        {tableData.map(({ payoutId, source, date, amount }) => {
          return (
            <HStack justify="space-between" w="100%" py="20px">
              <Text px="25px">{payoutId}</Text>
              <Text px="25px">{source}</Text>
              <Text px="25px">{date}</Text>
              <Text px="25px">{amount}</Text>
            </HStack>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default SectionTwo;
