import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";
import { useEffect } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import {
  AuthenticationParams,
  X_SECRET_KEY,
} from "./helpers/AuthenticationParams";
import getFromLS from "./config/getFromLS";
import { ass_token_key } from "./helpers/LocalStorageKeys";
// import { customTheme } from "./styles/customTheme";
// import { customGlobalStyles } from "./styles/customGlobalStyles";

const App = () => {
  useEffect(() => {
    sendRequest(
      `${API_URL}/2.0/oauth2/password/?login=${AuthenticationParams.login}&password=${AuthenticationParams.password}&client_id=${AuthenticationParams.client_id}&client_secret=${AuthenticationParams.client_secret}`,
      {
        headers: {
          "x-secret-key": `${X_SECRET_KEY}`,
        },
      }
    )
      .then((data) =>
        localStorage.setItem(ass_token_key, JSON.stringify(data.access_token))
      )
      .catch((error) => console.error(error));
  }, []);

  const ass_tokenFromLS = getFromLS(ass_token_key);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
};
export default App;
