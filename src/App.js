import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import theme from "./styles/theme";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <ChakraProvider theme={theme}>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Grid
        templateColumns={{ lg: "280px 1fr", sm: "300px" }}
        templateRows="auto 1fr auto"
        templateAreas={{
          md: `
        " sidebar content"
        " sidebar content"
        " sidebar content"`,
          sm: `
        "content"
        "content"
        "content"`,
        }}
        minH="900px"
      >
        <GridItem
          gridArea="sidebar"
          pos={{ sm: "absolute", md: "relative" }}
          display={{ sm: "none", md: "block" }}
        >
          <SideBar />
        </GridItem>
        <GridItem gridArea="content" bgColor="#FFFFFF">
          <Box
            p="40px"
            onClick={onOpen}
            ref={btnRef}
            display={{ sm: "block", md: "none" }}
          >
            <HamburgerIcon fontSize="40px" />
          </Box>
          <MainContent />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
