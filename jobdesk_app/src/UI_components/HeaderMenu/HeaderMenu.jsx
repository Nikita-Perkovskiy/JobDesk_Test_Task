import "./index.css";
import RouterLink from "../RouterLink/RouterLink";
import LogoSvg from "./Svges/LogoSvg/LogoSvg";
const HeaderMenu = () => {
  return (
    <>
      <header className="header">
        <div className="header-content__wrapper">
          <div className="header-logo__wrapper">
            <div className="header-logo__svg">
              <LogoSvg />
            </div>
            <h1 className="header-logo__text">Jobored</h1>
          </div>
          <div className="header-nav__wrapper">
            <div>
              <RouterLink LinkText={"Поиск Вакансий"} LinkPath={"/"} />
            </div>
            <div>
              <RouterLink LinkText={"Избранное"} LinkPath={"/favoritePage"} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
