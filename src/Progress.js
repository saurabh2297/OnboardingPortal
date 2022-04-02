import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import logo from "./logo.png";

import { stepContext } from "./FormContext";

const Progress = () => {
  const { step } = useContext(stepContext);
  return (
    <div>
      <img src={logo} className="center" />
      <br />
      <Stepper
        steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
        activeStep={step}
      />
    </div>
  );
};

export default Progress;
