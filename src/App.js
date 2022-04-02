import "./App.css";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./Progress";
import Welcome from "./form/Welcome";
import Step2 from "./form/Step2";
import Step3 from "./form/Step3";
import Final from "./form/Final";

import { stepContext } from "./FormContext";

function App() {
  const { step, setStep } = useContext(stepContext);
  return (
    <div className="content">
      <Progress />
      <br />
      {step === 0 ? <Welcome /> : null}
      {step === 1 ? <Step2 /> : null}
      {step === 2 ? <Step3 /> : null}
      {step === 3 ? <Final /> : null}
    </div>
  );
}

export default App;
