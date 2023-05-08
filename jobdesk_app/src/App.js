import "../node_modules/scss-reset/src/scss/_reset.scss";
import { MantineProvider } from "@mantine/core";
import AppRouter from "./Routes/AppRouter";
import { useEffect, useState } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import {
  AuthenticationParams,
  X_SECRET_KEY,
} from "./helpers/AuthenticationParams";
import { getFromLS } from "./config/LocalStorageFunctions/getFromLS";
import { ass_token_key, vacation_list_key } from "./helpers/LocalStorageKeys";

const App = () => {
  const [myFavoriteVacations, setMyFavoriteVacations] = useState([]);

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

  const [vacansionList, setVacansionList] = useState([]);

  useEffect(() => {
    sendRequest(`${API_URL}/2.0/oauth2/vacancies/?published=1`, {
      method: "GET",
      headers: {
        "x-secret-key": `${X_SECRET_KEY}`,
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    })
      .then((res) => res)
      .then((data) =>
        localStorage.setItem(vacation_list_key, JSON.stringify(data.objects))
      )
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setVacansionList(getFromLS(vacation_list_key));
  }, []);

  const ass_tokenFromLS = getFromLS(ass_token_key);

  return (
    <MantineProvider withGlobalStyles>
      <AppRouter vacansionList={vacansionList} />
    </MantineProvider>
  );
};
export default App;
