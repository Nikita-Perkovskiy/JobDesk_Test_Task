import "./App.css";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";
import { useEffect, useState } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import { AuthenticationParams } from "./helpers/AuthenticationParams";

const App = () => {
  const [assToken, setAssToken] = useState(null);
  const [vac, seTVac] = useState([]);

  // useEffect(() => {
  //   sendRequest(
  //     `${API_URL}oauth2/password/?login=${AuthenticationParams.login}&password=${AuthenticationParams.password}&client_id=${AuthenticationParams.client_id}&client_secret=${AuthenticationParams.client_secret}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-secret-key": `${AuthenticationParams.x_secret_key}`,
  //       },
  //     }
  //   )
  //     .then((res) => res)
  //     .then((data) => setAssToken(data.access_token))
  //     .catch((error) => console.error(error));
  // }, []);

  console.log(assToken);

  useEffect(() => {
    sendRequest(`${API_URL}vacancies/100000/`, {
      method: "GET",
      headers: {
        "x-secret-key": `${AuthenticationParams.x_secret_key}`,
      },
    })
      .then((res) => res)
      .then((data) => seTVac(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
};
export default App;
