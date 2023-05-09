import { useState } from "react";
import { paymentFilter } from "../../config/paymentFilter";
import { vacation_list_key } from "../../helpers/LocalStorageKeys";
import { addMyFavoritePost } from "../../config/myFavoritesFunctions/addMyFavoritePost";
import { deleteMyFavoritePost } from "../../config/myFavoritesFunctions/deleteMyFavoritePost";
import "./index.scss";
import ActiveStar from "./svges/ActiveStar/ActiveStar";
import MapPoint from "./svges/MapPoint/MapPoint";
import NonActiveStar from "./svges/NonActiveStar/NonActiveStar";

const JobCard = ({
  postProfeesion,
  postType,
  postPayTo,
  postPayFrom,
  postCurr,
  postLocation,
  postId,
  addFav,
  myFavoriteVacations,
  deleteFav,
}) => {
  const [isActiveStar, setIsActiveStar] = useState(false);
  const handleToggle = () => {
    setIsActiveStar(!isActiveStar);
  };

  return (
    <>
      <div className="jobCard__container">
        <div className="jobCard__title-wrapper">
          <h3 className="jobCard__title">{postProfeesion}</h3>
          <div>
            {isActiveStar ? (
              <div
                onClick={() => {
                  deleteMyFavoritePost(postId, myFavoriteVacations, deleteFav);
                  handleToggle();
                }}
              >
                <ActiveStar />
              </div>
            ) : (
              <div
                onClick={() => {
                  addMyFavoritePost(postId, vacation_list_key, addFav);
                  handleToggle();
                }}
              >
                <NonActiveStar />
              </div>
            )}
          </div>
        </div>
        <div className="jobCard__content-wrapper">
          {paymentFilter(postPayTo, postPayFrom, postCurr)}
          <p className="jobCard__workTime">{postType}</p>
        </div>
        <div className="jobCard__footer-wrapper">
          <div>
            <MapPoint />
          </div>
          <p className="jobCard__location">{postLocation}</p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
