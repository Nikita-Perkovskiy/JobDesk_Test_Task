import { Field } from "formik";
import ArrowUP from "./svges/ArrowUP/ArrowUP";
import ArrowDown from "./svges/ArrowDown/ArrowDown";
import "./index.scss";

const SalaryInput = ({
  nameField,
  salaryInit,
  salaryDecrease,
  salaryIncrease,
  placeholder,
}) => {
  return (
    <>
      <div className="salaryInput__container">
        <Field
          className="salaryInput__input"
          name={nameField}
          placeholder={placeholder}
          value={salaryInit}
        />
        <span className="salaryInput__button-wrapper">
          <button
            type="button"
            className="salaryInput__button"
            onClick={() => salaryIncrease()}
          >
            <ArrowUP />
          </button>
          <button
            type="button"
            className="salaryInput__button"
            onClick={() => salaryDecrease()}
          >
            <ArrowDown />
          </button>
        </span>
      </div>
    </>
  );
};

export default SalaryInput;
