import "./index.scss";
import ActiveStar from "./svges/ActiveStar/ActiveStar";
import MapPoint from "./svges/MapPoint/MapPoint";
import NonActiveStar from "./svges/NonActiveStar/NonActiveStar";
import { paymentFilter } from "../../config/filterFunctions/paymentFilter";
import {
  myFavPosts_key,
  vacation_list_key,
} from "../../helpers/LocalStorageKeys";
import { addPost } from "../../config/postFunctions/addPost";
import { deletePost } from "../../config/postFunctions/deletePost";
import { useLocalStorage } from "../../config/customHooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

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
  addTarg,
}) => {
  const navigate = useNavigate();
  const [isActiveStar, setIsActiveStar] = useLocalStorage(
    `${postId}_key`,
    false
  );

  const toggleStar = () => {
    setIsActiveStar(!isActiveStar);
  };

  const handlClick = () => {
    navigate("/vacancyPage");
  };

  return (
    <>
      <div
        className="jobCard__container"
        onClick={() => {
          addPost(postId, vacation_list_key, addTarg);
          handlClick();
        }}
        data-elem={`vacancy-${postId}`}
      >
        <div className="jobCard__title-wrapper">
          <h3 className="jobCard__title">{postProfeesion}</h3>
          <div>
            {isActiveStar ? (
              <div
                className="jobCard__star-wrapper"
                data-elem={`vacancy-${postId}-shortlist-button`}
                onClick={async (e) => {
                  e.stopPropagation();
                  await toggleStar();
                  await deletePost(postId, myFavPosts_key, delFav);
                }}
              >
                <ActiveStar />
              </div>
            ) : (
              <div
                className="jobCard__star-wrapper"
                data-elem={`vacancy-${postId}-shortlist-button`}
                onClick={async (e) => {
                  e.stopPropagation();
                  await toggleStar();
                  await addPost(postId, vacation_list_key, addFav);
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
