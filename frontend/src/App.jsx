import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
