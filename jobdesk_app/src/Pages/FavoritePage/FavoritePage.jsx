import "./index.scss";
import JobBoard from "../../Components/JobBoard/JobBoard";
import EmptyState from "../../UI_components/EmptyState/EmptyState";

const FavoritePage = ({ myFavoriteVacations, addFav, delFav, addTarg }) => {
  console.log(myFavoriteVacations);
  return (
    <>
      {myFavoriteVacations.length === 0 ? (
        <EmptyState />
      ) : (
        <main className="mainPage-fon">
          <section className="section__PostList">
            <JobBoard
              vacansionList={myFavoriteVacations}
              addFav={addFav}
              delFav={delFav}
              addTarg={addTarg}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default FavoritePage;
