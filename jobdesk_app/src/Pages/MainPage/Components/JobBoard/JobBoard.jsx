import { useEffect, useState } from "react";
import getFromLS from "../../../../config/getFromLS";
import { API_URL } from "../../../../helpers/API";
import { AuthenticationParams } from "../../../../helpers/AuthenticationParams";
import { sendRequest } from "../../../../config/sendRequest";

const JobBoard = () => {
  //   const [vacansionList, setVacansionList] = useState([]);
  //   console.log(AuthenticationParams.x_secret_key);
  //   useEffect(() => {
  //     sendRequest(`${API_URL}/2.0/oauth2/vacancies/`, {
  //       method: "GET",
  //       headers: {
  //         "x-secret-key": `${X_SECRET_KEY}`,
  //       },
  //     })
  //       .then((res) => res)
  //       .then((data) => setVacansionList(data))
  //       .catch((error) => console.error(error));
  //   }, []);
  //   console.log("JobBoard", vacansionList);
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "red" }}
      ></div>
    </>
  );
};

export default JobBoard;
