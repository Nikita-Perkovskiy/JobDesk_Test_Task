import "../node_modules/scss-reset/src/scss/_reset.scss";
import "./styles/fonts.scss";
import AppRouter from "./Routes/AppRouter";
import { useEffect, useState } from "react";
import { sendRequest } from "./config/sendRequest";
import { API_URL } from "./helpers/API";
import { useLocalStorage } from "./config/customHooks/useLocalStorage";
import {
  AuthenticationParams,
  X_SECRET_KEY,
} from "./helpers/AuthenticationParams";
import {
  ass_token_key,
  engineData_key,
  myFavPosts_key,
  navMenuData_key,
  targetVacantion_key,
  vacation_list_key,
} from "./helpers/LocalStorageKeys";
import LouderComponent from "./UI_components/LouderComponent/LouderComponent";

const App = () => {
  const [myFavoriteVacations, setMyFavoriteVacations] = useLocalStorage(
    myFavPosts_key,
    []
  );
  const [vacansionList, setVacansionList] = useLocalStorage(
    vacation_list_key,
    []
  );
  // const [ass_tokenFromLS, setAss_tokenFromLS] = useLocalStorage(
  //   ass_token_key,
  //   []
  // );
  const [targetVacantion, setTargetVacantion] = useLocalStorage(
    targetVacantion_key,
    []
  );
  const [navMenuData, setNavMenuData] = useLocalStorage(navMenuData_key, {});
  const [engineData, setEngineData] = useState("");
  // useLocalStorage(engineData_key, "");
  const [loader, setLoader] = useState(true);

  const addTarg = (post) => {
    setTargetVacantion(post);
  };

  const addFav = (post) => {
    setMyFavoriteVacations([...myFavoriteVacations, post]);
  };

  const delFav = (post) => {
    setMyFavoriteVacations(post);
  };

  // useEffect(() => {
  //   setLoader(true);
  //   sendRequest(
  //     `${API_URL}/2.0/oauth2/password/?login=${AuthenticationParams.login}&password=${AuthenticationParams.password}&client_id=${AuthenticationParams.client_id}&client_secret=${AuthenticationParams.client_secret}`,
  //     {
  //       headers: {
  //         "x-secret-key": `${X_SECRET_KEY}`,
  //       },
  //     }
  //   )
  //     .then((data) => {
  //       setAss_tokenFromLS(data.access_token);
  //       setLoader(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    setLoader(true);
    sendRequest(
      `${API_URL}/2.0/oauth2/vacancies/?payment_from=${navMenuData.salaryFrom}&payment_to=${navMenuData.salaryTo}&catalogues=${navMenuData.dropDownValue}&published=1&count=500`,
      {
        method: "GET",
        headers: {
          "x-secret-key": `${X_SECRET_KEY}`,
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    )
      .then((res) => res)
      .then((data) => {
        setVacansionList(data.objects);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  }, [navMenuData]);

  useEffect(() => {
    setLoader(true);
    sendRequest(
      `${API_URL}/2.0/oauth2/vacancies/?keyword=${engineData}&published=1&count=500`,
      {
        method: "GET",
        headers: {
          "x-secret-key": `${X_SECRET_KEY}`,
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    )
      .then((res) => res)
      .then((data) => {
        setVacansionList(data.objects);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  }, [engineData]);

  //console.log(" targetVacantion in App", targetVacantion);
  //console.log(" myFavoriteVacations in App", myFavoriteVacations);
  //console.log(" vacansionList in App", vacansionList);
  // console.log("engineData", engineData);
  // console.log("navMenuData", navMenuData);

  return loader ? (
    <LouderComponent />
  ) : (
    <AppRouter
      vacansionList={vacansionList}
      setVacansionList={setVacansionList}
      myFavoriteVacations={myFavoriteVacations}
      addFav={addFav}
      delFav={delFav}
      addTarg={addTarg}
      targetVacantion={targetVacantion}
      engineData={engineData}
      setEngineData={setEngineData}
      setNavMenuData={setNavMenuData}
    />
  );
};
export default App;
