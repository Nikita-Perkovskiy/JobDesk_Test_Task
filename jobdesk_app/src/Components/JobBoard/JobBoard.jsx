import JobCard from "../../UI_components/JobCard/JobCard";
import "./index.scss";
import { useState } from "react";

const JobBoard = (joblist) => {
  const jobListData = joblist.joblist;

  return (
    <ul className="jobBoard-wrapper">
      {jobListData.map((el) => {
        return (
          <li key={el.id}>
            <JobCard
              jobId={el.id}
              jobProfeesion={el.profession}
              jobType={el.type_of_work.title}
              jobPayTo={el.payment_to}
              jobPayFrom={el.payment_from}
              jobCurr={el.currency}
              jobLocation={el.town.title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default JobBoard;
