import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter";
import { Toaster } from "sonner";

const App = () => {
  return (
    <ChakraProvider>
      <Toaster richColors />
      <AppRouter />
    </ChakraProvider>

  )
};

export default App;