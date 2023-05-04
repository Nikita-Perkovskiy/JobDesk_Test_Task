import "./index.scss";
import JobBoard from "./Components/JobBoard/JobBoard";
import HeaderMenu from "../../UI_components/HeaderMenu/HeaderMenu";
import { useEffect, useState } from "react";
import { API_URL } from "../../helpers/API";
import { sendRequest } from "../../config/sendRequest";
import { X_SECRET_KEY } from "../../helpers/AuthenticationParams";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import getFromLS from "../../config/getFromLS";
import { vacation_list_key } from "../../helpers/LocalStorageKeys";

const MainPage = () => {
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
        localStorage.setItem("vacation_list", JSON.stringify(data.objects))
      )
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setVacansionList(getFromLS(vacation_list_key));
  }, []);

  return (
    <>
      <HeaderMenu />
      <main className="mainPage-fon">
        <div className="mainPage__content-wrapper">
          <section className="mainPage__section-left">
            <NavigationMenu />
          </section>
          <section className="mainPage__section-right">
            <JobBoard joblist={vacansionList} />
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
