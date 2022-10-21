import React, { useEffect, useState } from "react";
import Progress from "../elements/progress/Progress";

import { Title2, Button, Link } from "@fluentui/react-components";
import { InputField } from "@fluentui/react-components/unstable";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";

const RegisterContainer = () => {
  const breakpoints = ["Email", "Number", "Personal", "Password"];
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    email: "",
    number: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const addProgress = () => {
    setProgress(progress + 25);
  };
  return (
    <>
      <Title2 className="auth__title">Registration</Title2>
      <Progress
        value={(progress / 100) * breakpoints.length}
        breakpoints={breakpoints}
        setValue={setProgress}
      />
      {progress === 0 && (
        <div className="auth__input">
          <InputField
            className="auth_input"
            label="Enter your email"
            appearance="underline"
            type="email"
          />
        </div>
      )}
      {progress === 25 && (
        <div className="auth__input">
          <InputField
            className="auth_input"
            label="Enter your phone number"
            appearance="underline"
            type="text"
          />
        </div>
      )}
      {progress === 50 && (
        <div className="auth__input">
          <InputField
            className="auth_input"
            label="Enter your first name"
            appearance="underline"
            type="text"
          />
          <InputField
            className="auth_input"
            label="Enter your last name"
            appearance="underline"
            type="text"
          />
        </div>
      )}
      {progress === 75 && (
        <>
          <div className="auth__input">
            <InputField
              className="auth_input"
              label="Enter your password"
              appearance="underline"
            />
            <div className="show-pswd">
              {"password" ? <Eye24Regular /> : <EyeOff24Regular />}
            </div>
          </div>
          <div className="auth__input">
            <InputField
              className="auth_input"
              label="Enter your password"
              appearance="underline"
            />
            <div className="show-pswd">
              {"password" ? <Eye24Regular /> : <EyeOff24Regular />}
            </div>
          </div>
        </>
      )}
      <div className="auth__actions">
        {progress < 100 && (
          <Button
            onClick={() => addProgress()}
            className="auth__btn"
            appearance="primary"
          >
            Next
          </Button>
        )}
        {progress === 100 && (
          <Button className="auth__btn" appearance="primary">
            Sign in
          </Button>
        )}
        <Link href="/register">Already have account? Sign in</Link>
      </div>
    </>
  );
};

export default RegisterContainer;
