import "./index.scss";
import HeaderMenu from "../../UI_components/HeaderMenu/HeaderMenu";
import NavigationMenu from "../../Components/NavigationMenu/NavigationMenu";
import JobBoard from "../../Components/JobBoard/JobBoard";

const MainPage = ({ vacansionList, addFav, delFav }) => {
  return (
    <>
      <HeaderMenu />
      <main className="mainPage-fon">
        <div className="mainPage__content-wrapper">
          <section className="mainPage__section-left">
            <NavigationMenu />
          </section>
          <section className="mainPage__section-right">
            <JobBoard
              vacansionList={vacansionList}
              addFav={addFav}
              delFav={delFav}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
