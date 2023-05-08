export const paymentFilter = (payFrom, payTo, payCur) => {
  if (payFrom !== 0 && payTo !== 0) {
    return (
      <>
        <b className="jobCard__payment">
          з/п от {payFrom} - {payTo} {payCur}
        </b>
      </>
    );
  } else if (payFrom !== 0 && payTo === 0) {
    return (
      <>
        <b className="jobCard__payment">
          з/п {payFrom} {payCur}
        </b>
      </>
    );
  } else if (payFrom === 0 && payTo !== 0) {
    return (
      <>
        <b className="jobCard__payment">
          з/п {payTo} {payCur}
        </b>
      </>
    );
  }
};
