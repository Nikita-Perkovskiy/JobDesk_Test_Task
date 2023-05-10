import JobCard from "../../UI_components/JobCard/JobCard";
import { verifyVacansionList } from "../../config/filterFunctions/verifyVacansionList";
import "./index.scss";

const JobBoard = ({ vacansionList, addFav, delFav }) => {
  const jobList = verifyVacansionList(vacansionList);

  return (
    <ul className="jobBoard-wrapper">
      {jobList.map((el) => {
        return (
          <li key={el.id}>
            <JobCard
              postId={el.id}
              postProfeesion={el.profession}
              postType={el.type_of_work.title}
              postPayTo={el.payment_to}
              postPayFrom={el.payment_from}
              postCurr={el.currency}
              postLocation={el.town.title}
              addFav={addFav}
              delFav={delFav}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default JobBoard;
