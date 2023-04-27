import "./App.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
};
export default App;
