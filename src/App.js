import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import theme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateColumns="280px 1fr"
        templateRows="auto 1fr auto"
        templateAreas={`
        " sidebar content"
        " sidebar content"
        " sidebar content"`}
        minH="900px"
      >
        <GridItem gridArea="sidebar">
          <SideBar />
        </GridItem>
        <GridItem gridArea="content" bgColor="#FFFFFF">
          <MainContent />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
