import { paymentFilter } from "../../config/paymentFilter";
import "./index.scss";
import ActiveStar from "./svges/ActiveStar/ActiveStar";
import MapPoint from "./svges/MapPoint/MapPoint";
import NonActiveStar from "./svges/NonActiveStar/NonActiveStar";

const JobCard = ({
  jobProfeesion,
  jobType,
  jobPayTo,
  jobPayFrom,
  jobCurr,
  jobLocation,
  jobId,
}) => {
  return (
    <>
      <div className="jobCard__container">
        <div className="jobCard__title-wrapper">
          <h3 className="jobCard__title">{jobProfeesion}</h3>
          <div>
            <NonActiveStar />
          </div>
        </div>
        <div className="jobCard__content-wrapper">
          {paymentFilter(jobPayTo, jobPayFrom, jobCurr)}
          <p className="jobCard__workTime">{jobType}</p>
        </div>
        <div className="jobCard__footer-wrapper">
          <div>
            <MapPoint />
          </div>
          <p className="jobCard__location">{jobLocation}</p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
