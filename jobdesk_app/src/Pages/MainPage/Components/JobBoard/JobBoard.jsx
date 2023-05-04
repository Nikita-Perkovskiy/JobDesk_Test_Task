import JobCard from "./JobCard/JobCard";
import "./index.scss";
import { useState } from "react";

const JobBoard = (joblist) => {
  console.log(joblist);

  return (
    <div className="jobBoard-wrapper">
      <JobCard />
    </div>
  );
};

export default JobBoard;
