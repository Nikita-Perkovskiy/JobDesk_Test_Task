import "./index.scss";
import { Oval } from "react-loader-spinner";

const LouderComponent = () => {
  return (
    <>
      <div className="ovalLoading-wrapper">
        <Oval
          height={200}
          width={200}
          color="#000000"
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ffffff"
          strokeWidth={3}
          strokeWidthSecondary={4}
        />
      </div>
    </>
  );
};

export default LouderComponent;
