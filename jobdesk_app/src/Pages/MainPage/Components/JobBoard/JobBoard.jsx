import { useEffect, useState } from "react";
import getFromLS from "../../../../config/getFromLS";
import { API_URL } from "../../../../helpers/API";
import {
  AuthenticationParams,
  X_SECRET_KEY,
} from "../../../../helpers/AuthenticationParams";
import { sendRequest } from "../../../../config/sendRequest";

const JobBoard = () => {
  const [vacansionList, setVacansionList] = useState([]);

  useEffect(() => {
    sendRequest(
      `${API_URL}/2.0/oauth2/vacancies/?keyword=%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80&order_field=payment&order_direction=asc&payment_from=10000&payment_to=300000&no_agreement=1&town=4&catalogues=33%2C151%2C11%2C438%2C327%2C306%2C478%2C86&place_of_work=1&moveable=1&agency=1&type_of_work=6&age=30&gender=2&education=2&experience=3&driving_licence%5B0%5D=B&driving_licence%5B1%5D=C&language=1&lang_level=3&languages_particular=1`,
      {
        method: "GET",
        headers: {
          "x-secret-key": `${X_SECRET_KEY}`,
        },
      }
    )
      .then((res) => res)
      .then((data) => setVacansionList(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("JobBoard", vacansionList);
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "red" }}
      ></div>
    </>
  );
};

export default JobBoard;
