import "./index.scss";
import JobBoard from "../../Components/JobBoard/JobBoard";

const FavoritePage = ({ myFavoriteVacations, addFav, delFav }) => {
  const starDefolt = true;
  return (
    <>
      <main className="mainPage-fon">
        <section className="section__PostList">
          <JobBoard
            vacansionList={myFavoriteVacations}
            addFav={addFav}
            delFav={delFav}
            starDefolt={starDefolt}
          />
        </section>
      </main>
    </>
  );
};

export default FavoritePage;
