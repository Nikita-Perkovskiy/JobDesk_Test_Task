import "./index.scss";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import JobBoard from "../../Components/JobBoard/JobBoard";
import EngineBar from "../../Components/EngineBar/EngineBar";
import { useLocalStorage } from "../../config/customHooks/useLocalStorage";
import { sectorsArray_key } from "../../helpers/LocalStorageKeys";
import { sendRequest } from "../../config/sendRequest";
import { useEffect } from "react";
import { API_URL } from "../../helpers/API";
import { X_SECRET_KEY } from "../../helpers/AuthenticationParams";

const MainPage = ({
  vacansionList,
  addFav,
  delFav,
  addTarg,
  engineData,
  setEngineData,
}) => {
  const [sectorsArr, setSectorsArr] = useLocalStorage(sectorsArray_key, []);

  useEffect(() => {
    sendRequest(`${API_URL}/2.0/catalogues/`, {
      method: "GET",
      headers: {
        "x-secret-key": `${X_SECRET_KEY}`,
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      },
    })
      .then((res) => res)
      .then((data) => setSectorsArr(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("sectorsArr", sectorsArr);

  return (
    <>
      <main className="mainPage-fon">
        <div className="mainPage__content-wrapper">
          <section className="section__nav">
            <NavigationMenu />
          </section>
          <section className="section__jobList">
            <EngineBar engineData={engineData} setEngineData={setEngineData} />
            <JobBoard
              vacansionList={vacansionList}
              addFav={addFav}
              delFav={delFav}
              addTarg={addTarg}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
