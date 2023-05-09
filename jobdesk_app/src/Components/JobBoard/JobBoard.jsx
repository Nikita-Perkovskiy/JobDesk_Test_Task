import JobCard from "../../UI_components/JobCard/JobCard";
import "./index.scss";
import { useState } from "react";

const JobBoard = ({ joblist, addFav, myFavoriteVacations, deleteFav }) => {
  return (
    <ul className="jobBoard-wrapper">
      {joblist.map((el) => {
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
              myFavoriteVacations={myFavoriteVacations}
              deleteFav={deleteFav}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default JobBoard;
