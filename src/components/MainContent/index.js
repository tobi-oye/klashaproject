import { VStack } from "@chakra-ui/react";

import Header from "./components/Header";

import SectionBody from "./components/Body";

const MainContent = () => {
  return (
    <VStack align="start" px="40px" pt="33px" pb="53px" spacing="50px">
      <Header />
      <SectionBody />
    </VStack>
  );
};

export default MainContent;
