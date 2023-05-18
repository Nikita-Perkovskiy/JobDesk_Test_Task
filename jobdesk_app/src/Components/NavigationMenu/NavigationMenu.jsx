import "./index.scss";
import { Formik, Field, Form } from "formik";
import CrossIcon from "./svges/CrossIcon";
import DropdownMenu from "../../UI_components/DropdownMenu/DropdownMenu";
import { useLocalStorage } from "../../config/customHooks/useLocalStorage";
import {
  dropDownValue_key,
  salaryFrom_key,
  salaryTo_key,
} from "../../helpers/LocalStorageKeys";
import SalaryInput from "../../UI_components/SalaryInput/SalaryInput";
import FormButton from "../../UI_components/FormButton/FormButton";

const NavigationMenu = ({ sectorsArr, setNavMenuData }) => {
  const [salaryFrom, setSalaryFrom] = useLocalStorage(salaryFrom_key, 0);
  const [salaryTo, setSalaryTo] = useLocalStorage(salaryTo_key, 0);
  const [dropDownValue, setDropDownValue] = useLocalStorage(
    dropDownValue_key,
    ""
  );

  const initialValues = {
    dropdownMenu: dropDownValue,
    salaryTo: salaryTo,
    salaryFrom: salaryFrom,
  };

  const handleSubmit = (values) => {
    setNavMenuData(values);
  };

  const salaryFromDecrease = () => {
    if (salaryFrom !== 0) {
      setSalaryFrom((salaryFrom) => salaryFrom - 500);
    }
  };

  const salaryFromIncrease = () => {
    setSalaryFrom((salaryFrom) => salaryFrom + 500);
  };

  const salaryToDecrease = () => {
    if (salaryTo !== 0) {
      setSalaryTo((setSalaryTo) => setSalaryTo - 500);
    }
  };

  const salaryToIncrease = () => {
    setSalaryTo((setSalaryTo) => setSalaryTo + 500);
  };

  const dropdownChange = (event) => {
    const selectedValue = event.target.value;
    setDropDownValue(selectedValue);
  };

  console.log("dropDownValue", dropDownValue);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <div className="sidebar__wrapper">
          <Form>
            <div className="slidebar__header">
              <h2 className="slidebar__title">Фильтры</h2>
              <button
                type="button"
                className="slidebar__button"
                onSubmit={handleSubmit}
              >
                <p className="slidebar__button-text">Сбросить все</p>
                <CrossIcon />
              </button>
            </div>
            <div className="slidebar__dropdownMenu-wrapper">
              <label className="slidebar__label-text" htmlFor="dropdownMenu">
                Отрасль
              </label>
              <DropdownMenu
                nameField={"dropdownMenu"}
                sectorsArr={sectorsArr}
                dropdownChange={dropdownChange}
                dropDownValue={dropDownValue}
                placeholder={"Выберете отрасль"}
              />
              <div className="slidebar__label-wrapper">
                <label className="slidebar__label-text" htmlFor="dropdownMenu">
                  Оклад
                </label>
              </div>
              <SalaryInput
                nameField={"salaryFrom"}
                salaryInit={salaryFrom}
                salaryDecrease={salaryFromDecrease}
                salaryIncrease={salaryFromIncrease}
                placeholder={"От"}
              />

              <SalaryInput
                nameField={"salaryTo"}
                salaryInit={salaryTo}
                salaryDecrease={salaryToDecrease}
                salaryIncrease={salaryToIncrease}
                placeholder={"До"}
              />
            </div>
            <span className="sidebar__button-wrapper">
              <FormButton buttonText="Применить" type="submit" />
            </span>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default NavigationMenu;
