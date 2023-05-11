import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import VacancyPage from "../Pages/VacancyPage/VacancyPage";
import HeaderMenu from "../UI_components/HeaderMenu/HeaderMenu";

const AppRouter = ({ vacansionList, addFav, delFav, myFavoriteVacations }) => {
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
              />
            }
          />
          <Route path="/vacancyPage" element={<VacancyPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
