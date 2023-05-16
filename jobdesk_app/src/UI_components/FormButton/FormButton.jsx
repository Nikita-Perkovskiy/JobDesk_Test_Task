import "./index.scss";

const FormButton = ({ buttonText }) => {
  return (
    <>
      <button type="submit" className="form-button">
        {buttonText}
      </button>
    </>
  );
};

export default FormButton;
