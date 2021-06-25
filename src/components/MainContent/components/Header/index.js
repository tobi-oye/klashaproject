import { VStack, HStack, Text, Circle, Image } from "@chakra-ui/react";
import { NotificationIcon } from "../../../../styles/icons";
import avi from "../../../../assets/avi.png";

const Header = () => {
  const headerStyle = {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
  };

  const headerTextStyle = {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#A6ABB2",
  };
  return (
    <HStack justify="space-between" w="100%">
      <VStack align="start">
        <Text {...headerStyle}>Balances</Text>
        <Text {...headerTextStyle}>Today, 19th October 2020</Text>
      </VStack>

      <HStack>
        <Circle
          bg="rgba(245, 245, 245, 1)"
          h="50px"
          w="50px"
          border="1px solid rgba(245, 245, 245, 1)"
          pos="relative"
        >
          <Circle
            pos="absolute"
            bg="rgba(255, 0, 0, 1)"
            w="15px"
            h="15px"
            top="0px"
            right="2px"
          />
          <NotificationIcon />
        </Circle>

        <Circle
          border=" 1px solid #FF8377"
          bg="rgba(255, 131, 119, 0.1)"
          h="50px"
          w="50px"
        >
          <Image src={avi} alt="avi pic" />
        </Circle>
      </HStack>
    </HStack>
  );
};
export default Header;
