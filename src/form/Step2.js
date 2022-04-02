import React, { useContext } from "react";
import { stepContext } from "../FormContext";
import { Form, Button, InputGroup } from "react-bootstrap";

const Step2 = () => {
  const { step, setStep, userObj, setUserObj } = useContext(stepContext);
  return (
    <>
      <h4 style={{ textAlign: "center" }}>
        Let's set up a home for all your work
      </h4>
      <p style={{ textAlign: "center" }}>You can always change them later</p>
      <Form>
        <Form.Group className="mb-3" controlId="userWsname">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Eden"
            value={userObj.wsname}
            onChange={(e) => {
              setUserObj({ ...userObj, wsname: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Workspace URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">www.eden.com/</InputGroup.Text>
            <Form.Control
              id="wp-url"
              aria-describedby="basic-addon3"
              placeholder="Example"
              value={userObj.wsurl}
              onChange={(e) => {
                setUserObj({ ...userObj, wsurl: e.target.value });
              }}
            />
          </InputGroup>
        </Form.Group>

        <Button
          style={{ width: "100%" }}
          variant="primary"
          type="submit"
          onClick={() => {
            setStep(step + 1);
            let url = userObj.wsurl;
            setUserObj({ ...userObj, wsurl: `www.eden.com/${url}` });
          }}
        >
          Create Workspace
        </Button>
      </Form>
    </>
  );
};

export default Step2;
