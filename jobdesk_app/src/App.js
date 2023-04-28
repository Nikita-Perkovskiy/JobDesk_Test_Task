import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";
import { useEffect } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import { AuthenticationParams } from "./helpers/AuthenticationParams";
import getFromLS from "./config/getFromLS";
import { ass_token_key } from "./helpers/LocalStorageKeys";

const App = () => {
  // const [ass_token, setAssToken] = useState(null);

  useEffect(() => {
    sendRequest(
      `${API_URL}oauth2/password/?login=${AuthenticationParams.login}&password=${AuthenticationParams.password}&client_id=${AuthenticationParams.client_id}&client_secret=${AuthenticationParams.client_secret}`,
      {
        method: "GET",
        headers: {
          "x-secret-key": `${AuthenticationParams.x_secret_key}`,
        },
      }
    )
      .then((res) => res)
      .then((data) =>
        localStorage.setItem(ass_token_key, JSON.stringify(data.access_token))
      )
      .catch((error) => console.error(error));
  }, []);

  const ass_token = getFromLS(ass_token_key);

  console.log("App, ass_token", ass_token);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
};
export default App;
