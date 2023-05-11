import { useState } from "react";
import JobCard from "../../UI_components/JobCard/JobCard";
import { verifyVacansionList } from "../../config/filterFunctions/verifyVacansionList";
import "./index.scss";
import PagenationMenu from "../../UI_components/PagenetionMenu/PagenationMenu";

const JobBoard = ({ vacansionList, addFav, delFav, starDefolt }) => {
  const jobList = verifyVacansionList(vacansionList);
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 4;

  const displayedItems = jobList.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="jobBoard-wrapper">
        <ul className="jobList-wrapper">
          {displayedItems.map((el) => {
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
                  starDefolt={starDefolt}
                />
              </li>
            );
          })}
        </ul>
        <PagenationMenu
          jobList={jobList}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default JobBoard;
