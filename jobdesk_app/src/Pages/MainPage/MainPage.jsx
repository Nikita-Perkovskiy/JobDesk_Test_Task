import "./index.scss";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import JobBoard from "../../Components/JobBoard/JobBoard";

const MainPage = ({ vacansionList, addFav, delFav, addTarg }) => {
  return (
    <>
      <main className="mainPage-fon">
        <div className="mainPage__content-wrapper">
          <section className="section__nav">
            <NavigationMenu />
          </section>
          <section className="section__jobList">
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
