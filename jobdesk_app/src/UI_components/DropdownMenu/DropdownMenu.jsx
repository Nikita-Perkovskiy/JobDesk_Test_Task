import "./index.scss";
import { Field } from "formik";

const DropdownMenu = ({
  nameField,
  sectorsArr,
  dropdownChange,
  dropDownValue,
  placeholder,
}) => {
  return (
    <>
      <Field
        className="dropdownMenu__container"
        as="select"
        name={nameField}
        placeholder={placeholder}
        value={dropDownValue}
        onChange={dropdownChange}
      >
        <option className="dropdownMenu__placeholder">Выберете отрасль</option>
        {sectorsArr.map((element) => (
          <option
            className="dropdownMenu__item"
            key={element.key}
            value={element.key}
          >
            {element.value}
          </option>
        ))}
      </Field>
    </>
  );
};

export default DropdownMenu;
