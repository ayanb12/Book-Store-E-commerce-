import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  console.log(otherProps);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
