import React, { useContext } from "react";
import { stepContext } from "../FormContext";
import { Form, Button } from "react-bootstrap";

const Welcome = () => {
  const { step, setStep, userObj, setUserObj } = useContext(stepContext);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Welcome! First things first...</h3>
      <p style={{ textAlign: "center" }}>You can always change them later</p>
      <Form>
        <Form.Group className="mb-3" controlId="userFname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Steve Jobs"
            value={userObj.fname}
            onChange={(e) => {
              setUserObj({ ...userObj, fname: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userDname">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Steve"
            value={userObj.dname}
            onChange={(e) => {
              setUserObj({ ...userObj, dname: e.target.value });
            }}
          />
        </Form.Group>

        <Button
          style={{ width: "100%" }}
          variant="primary"
          type="submit"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default Welcome;
