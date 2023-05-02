import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";
import { useEffect, useState } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import {
  AuthenticationParams,
  X_SECRET_KEY,
} from "./helpers/AuthenticationParams";
import getFromLS from "./config/getFromLS";
import { ass_token_key } from "./helpers/LocalStorageKeys";

const App = () => {
  const [ass_token, setAss_token] = useState(null);
  // useEffect(() => {
  //   sendRequest(
  //     `${API_URL}/2.0/oauth2/password/?login=${AuthenticationParams.login}&password=${AuthenticationParams.password}&client_id=${AuthenticationParams.client_id}&client_secret=${AuthenticationParams.client_secret}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-secret-key": `${X_SECRET_KEY}`,
  //       },
  //     }
  //   )
  //     .then(
  //       (data) => setAss_token(data.access_token)
  //       //localStorage.setItem(ass_token_key, JSON.stringify(data.access_token))
  //     )
  //     .catch((error) => console.error(error));
  // }, []);

  const ass_tokenFromLS = getFromLS(ass_token_key);

  console.log("App, ass_token", ass_token);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      globalStyles={{
        body: {
          fontFamily: "'Inter', sans-serif",
        },
        h1: {
          fontFamily: "'Poppins', sans-serif",
        },
      }}
    >
      <AppRouter />
    </MantineProvider>
  );
};
export default App;
