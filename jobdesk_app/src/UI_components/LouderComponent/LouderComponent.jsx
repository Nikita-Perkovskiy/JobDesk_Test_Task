import "./index.scss";
import { Oval } from "react-loader-spinner";

const LouderComponent = () => {
  return (
    <>
      <div className="ovalLoading-wrapper">
        <Oval
          height={250}
          width={250}
          color="#000000"
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ffffff"
          strokeWidth={2}
          strokeWidthSecondary={3}
        />
      </div>
    </>
  );
};

export default LouderComponent;
