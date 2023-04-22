import {
  Container,
} from "@chakra-ui/react";
import { NavigationBar } from "./components/navBar";
import CurrencyChange from "./page/CurrencyChange";

function App() {
  return (
    <>
      <NavigationBar />
      <Container padding={0} maxW="container.2xl">
        <CurrencyChange/>
      </Container>
    </>
  );
}

export default App;
