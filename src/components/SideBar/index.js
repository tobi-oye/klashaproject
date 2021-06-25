import {
  VStack,
  Text,
  Image,
  HStack,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import {
  ActivityIcon,
  BalancesIcon,
  ContactIcon,
  CustomersIcon,
  DashboardIcon,
  LogoutIcon,
  TeamIcon,
  SetIcon,
} from "../../styles/icons";

const SideBar = ({ onClose }) => {
  const fontWeightSideBarTextHeaders = { fontWeight: 600, fontSize: "14px" };
  const marginLeftSideBarContent = { pl: "45px" };
  const sideBarText = {
    fontSize: "14px",
    letterSpacing: "0.1px",
    lineHeight: "17px",
    color: "#A6ABB2",
  };

  return (
    <VStack
      align="start"
      bg="rgb(234,234,234)"
      backdropFilter="blur(20px)"
      h="100%"
      pos="relative"
    >
      <Box
        pos="absolute"
        right="0px"
        m="10px"
        display={{ sm: "block", md: "none" }}
        onClick={onClose}
      >
        <CloseButton />
      </Box>
      <Box pl="40px" pt="40px" pb="50px">
        <Image src={logo} />
      </Box>

      <Box {...marginLeftSideBarContent}>
        <Text mb="13px" {...fontWeightSideBarTextHeaders}>
          Main Pages
        </Text>
      </Box>
      <HStack {...marginLeftSideBarContent} py="18px" bg="white" w="100%">
        <DashboardIcon />
        <Text {...sideBarText}>Dashboard</Text>
      </HStack>
      <HStack {...marginLeftSideBarContent} bg="#F5F5F5" py="18px" w="100%">
        <BalancesIcon />
        <Text {...fontWeightSideBarTextHeaders}>Balances</Text>
      </HStack>
      <VStack pl="40px" align="start" spacing="45px">
        <HStack pt="18px">
          <CustomersIcon />
          <Text {...sideBarText}>Customers</Text>
        </HStack>
        <HStack>
          <ActivityIcon />
          <Text {...sideBarText}>Analytics</Text>
        </HStack>

        <Text {...fontWeightSideBarTextHeaders} {...sideBarText}>
          General
        </Text>
        <HStack>
          <SetIcon />
          <Text {...sideBarText}>Settings</Text>
        </HStack>
        <HStack>
          <TeamIcon />
          <Text {...sideBarText}>Team</Text>
        </HStack>
        <HStack>
          <ContactIcon />
          <Text {...sideBarText}>Contact </Text>
        </HStack>
        <HStack>
          <LogoutIcon />
          <Text {...sideBarText}>Logout </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SideBar;
