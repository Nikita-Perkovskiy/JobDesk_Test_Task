import "./index.scss";
import { Link } from "react-router-dom";

const LinkButton = () => {
  return (
    <>
      <Link className="linkButton__link" to={"/"}>
        <div className="linkButton__wrapper">
          <p className="linkButton__content">Поиск Вакансий</p>
        </div>
      </Link>
    </>
  );
};

export default LinkButton;
