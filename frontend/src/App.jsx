import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import Router from "./router";

const customTheme = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#E16A15",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
