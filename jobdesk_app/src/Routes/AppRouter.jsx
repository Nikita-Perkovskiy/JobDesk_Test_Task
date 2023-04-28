import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import VacancyPage from "../Pages/VacancyPage/VacancyPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favoritePage" element={<FavoritePage />} />
          <Route path="/vacancyPage" element={<VacancyPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
