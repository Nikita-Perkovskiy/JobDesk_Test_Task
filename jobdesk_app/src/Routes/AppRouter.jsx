import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import VacancyPage from "../Pages/VacancyPage/VacancyPage";
import HeaderMenu from "../UI_components/HeaderMenu/HeaderMenu";

const AppRouter = ({
  vacansionList,
  addFav,
  delFav,
  myFavoriteVacations,
  addTarg,
  targetVacantion,
  engineData,
  setEngineData,
  setNavMenuData,
}) => {
  return (
    <>
      <Router>
        <HeaderMenu />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                vacansionList={vacansionList}
                addFav={addFav}
                delFav={delFav}
                addTarg={addTarg}
                engineData={engineData}
                setEngineData={setEngineData}
                setNavMenuData={setNavMenuData}
              />
            }
          />
          <Route
            path="/favoritePage"
            element={
              <FavoritePage
                myFavoriteVacations={myFavoriteVacations}
                addFav={addFav}
                delFav={delFav}
                addTarg={addTarg}
              />
            }
          />
          <Route
            path="/vacancyPage"
            element={
              <VacancyPage
                targetVacantion={targetVacantion}
                addFav={addFav}
                delFav={delFav}
                addTarg={addTarg}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
