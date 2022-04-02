import React, { useState } from "react";
import App from "./App";

export const stepContext = React.createContext();

const FormContext = () => {
  const [step, setStep] = useState(0);
  const [userObj, setUserObj] = useState({
    fname: "",
    dname: "",
    wsname: "",
    wsurl: "",
    use: "",
  });
  return (
    <stepContext.Provider value={{ step, setStep, userObj, setUserObj }}>
      <App />
    </stepContext.Provider>
  );
};

export default FormContext;
