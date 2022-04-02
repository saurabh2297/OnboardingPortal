import React, { useContext } from "react";
import { stepContext } from "../FormContext";
import landingLogo from "../landingLogo.png";
import { Button } from "react-bootstrap";
import "../App.css";

const Final = () => {
  const { step, setStep, userObj, setUserObj } = useContext(stepContext);
  return (
    <div>
      <img src={landingLogo} className="center" />
      <h1 style={{ textAlign: "center" }}>Congratulations</h1>
      <p style={{ textAlign: "center" }}>
        You have completed Onboarding, you can start using Eden
      </p>
      <Button
        style={{ width: "100%" }}
        onClick={() => {
          alert(JSON.stringify(userObj));
        }}
      >
        Launch Eden
      </Button>
    </div>
  );
};

export default Final;
