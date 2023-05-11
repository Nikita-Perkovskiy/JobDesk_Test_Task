import { useState } from "react";
import "./index.scss";
import ActiveStar from "./svges/ActiveStar/ActiveStar";
import MapPoint from "./svges/MapPoint/MapPoint";
import NonActiveStar from "./svges/NonActiveStar/NonActiveStar";
import { addMyFavoritePost } from "../../config/myFavoritesFunctions/addMyFavoritePost";
import { paymentFilter } from "../../config/filterFunctions/paymentFilter";
import {
  myFavPosts_key,
  vacation_list_key,
} from "../../helpers/LocalStorageKeys";
import { deleteMyFavoritePost } from "../../config/myFavoritesFunctions/deleteMyFavoritePost";

const JobCard = ({
  postProfeesion,
  postType,
  postPayTo,
  postPayFrom,
  postCurr,
  postLocation,
  postId,
  addFav,
  delFav,
  starDefolt,
}) => {
  const [isActiveStar, setIsActiveStar] = useState(starDefolt);
  const toggleStar = () => {
    setIsActiveStar(!isActiveStar);
  };

  return (
    <>
      <div
        className="jobCard__container"
        onClick={() => {
          console.log(postId);
        }}
      >
        <div className="jobCard__title-wrapper">
          <h3 className="jobCard__title">{postProfeesion}</h3>
          <div>
            {isActiveStar ? (
              <div
                onClick={() => {
                  deleteMyFavoritePost(postId, myFavPosts_key, delFav);
                  toggleStar();
                }}
              >
                <ActiveStar />
              </div>
            ) : (
              <div
                onClick={() => {
                  addMyFavoritePost(postId, vacation_list_key, addFav);
                  toggleStar();
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
