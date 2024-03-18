import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";

// tagged template (feature of Javascript)
// this is react compnent that automatically retirn a div with the styled you specify applied to it
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
          {/* --- vanilla css conditional styling using backticks for dynamic values --- */}
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </Label> */}
          <Input
            label="Email"
            type="email"
            invalid={emailNotValid}
            // --- inline styling with conditionals ---
            // style={{
            //   backgroundColour: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}

            // --- vanilla css conditional styling using classes ---
            // className={emailNotValid ? "invalid" : undefined}

            // here we prefix our 'invalid' prop with a dollar sign to avoid clashes with Javascripts built-in props, such as invalid
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          {/* --- vanilla css conditional styling using backticks for dynamic values ---
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Password
          </label> */}
          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
           
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
