import "./index.scss";
import HeaderMenu from "../../UI_components/HeaderMenu/HeaderMenu";
import { useEffect, useState } from "react";
import { API_URL } from "../../helpers/API";
import { sendRequest } from "../../config/sendRequest";
import { X_SECRET_KEY } from "../../helpers/AuthenticationParams";
import getFromLS from "../../config/LocalStorageFunctions/getFromLS";
import { vacation_list_key } from "../../helpers/LocalStorageKeys";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import JobBoard from "../../Components/JobBoard/JobBoard";

const MainPage = ({ vacansionList }) => {
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
