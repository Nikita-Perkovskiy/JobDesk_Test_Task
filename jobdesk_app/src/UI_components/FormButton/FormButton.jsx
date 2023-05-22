import "./index.scss";

const FormButton = ({ buttonText }) => {
  return (
    <>
      <button data-elem="search-button" type="submit" className="form-button">
        {buttonText}
      </button>
    </>
  );
};

export default FormButton;
