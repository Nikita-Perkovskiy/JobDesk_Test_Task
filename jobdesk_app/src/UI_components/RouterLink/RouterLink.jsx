import "./index.scss";
import { Link } from "react-router-dom";

const RouterLink = ({ LinkText, LinkPath }) => {
  return (
    <>
      <Link className="routerLink" to={LinkPath}>
        {LinkText}
      </Link>
    </>
  );
};

export default RouterLink;
