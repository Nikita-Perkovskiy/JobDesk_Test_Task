import getFromLS from "../../../../config/getFromLS";
import { ass_token_key } from "../../../../helpers/LocalStorageKeys";

const JobBoard = () => {
  // useEffect(() => {
  //   sendRequest(
  //     `${API_URL}vacancies/?keywords%5B0%5D%5Bkeys%5D=&keywords%5B1%5D%5Bsrws%5D=1&keywords%5B1%5D%5Bskwc%5D=and&keywords%5B1%5D%5Bkeys%5D=php&keywords%5B2%5D%5Bsrws%5D=3&keywords%5B2%5D%5Bskwc%5D=particular&keywords%5B2%5D%5Bkeys%5D=javascript`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-secret-key": `${AuthenticationParams.x_secret_key}`,
  //       },
  //     }
  //   )
  //     .then((res) => res)
  //     .then((data) => seTVac(data))
  //     .catch((error) => console.error(error));
  // }, []);

  const ass_token = getFromLS(ass_token_key);
  console.log("JobBoard", ass_token);
  return <></>;
};

export default JobBoard;
