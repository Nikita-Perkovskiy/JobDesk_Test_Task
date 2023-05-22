import { Formik, Form, Field } from "formik";
import FormButton from "../../UI_components/FormButton/FormButton";
import "./index.scss";
import SearchIcon from "./svges/SearchIcon";

const EngineBar = ({ engineData, setEngineData }) => {
  const initialValue = {
    formData: engineData,
  };

  const handleSubmit = (value) => {
    setEngineData(value.formData);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className="engineBar__form">
        <span className="engineBar__svg-wrapper">
          <SearchIcon />
        </span>
        <Field
          className="engineBar__input"
          id="engineBar_input"
          type="text"
          name="formData"
          placeholder="Введите название вакансии?"
          data-elem="search-input"
        />
        <span className="engineBar__button-wrapper">
          <FormButton buttonText="Поиск" type="submit" />
        </span>
      </Form>
    </Formik>
  );
};

export default EngineBar;
