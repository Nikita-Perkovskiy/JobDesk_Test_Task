import "./index.scss";
import parse from "html-react-parser";

const VacancyDescription = ({ targetVacantionVacancyRichText }) => {
  let reactElement = parse(targetVacantionVacancyRichText);

  return (
    <>
      <div className="vacancyDescription-wrapper">{reactElement}</div>
    </>
  );
};

export default VacancyDescription;
