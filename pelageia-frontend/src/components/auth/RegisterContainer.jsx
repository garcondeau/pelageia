import React, { useState } from "react";
import axios from "axios";
import Progress from "../elements/progress/Progress";
import Modal from "../elements/modal/Modal";
import validator from "../../utils/validator";

import { Title2, Button, Link, Spinner } from "@fluentui/react-components";
import { InputField } from "@fluentui/react-components/unstable";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";

const RegisterContainer = () => {
  const breakpoints = ["Personal", "Email", "Number", "Password"];
  const [progress, setProgress] = useState(0);
  const [submitCode, setSubmitCode] = useState();
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("password");
  const [data, setData] = useState({
    email: "",
    number: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const tryRegister = () => {
    let filter = Object.values(errors).filter((obj) =>
      Object.keys(obj).some((key) => obj[key].includes("error"))
    );
    filter.length < 1 && registrationRequest();
  };

  const registrationRequest = () => {
    setDisabled(true);
    axios
      .post("/api/Auth/register", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        phone: data.phone,
      })
      .then((response) => {
        response.status == 200 && setVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = ({ value, type, key }) => {
    validator({
      key: key,
      value: value,
      type: type,
      setErrors: setErrors,
    });
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const addProgress = () => {
    setProgress(progress + 25);
  };

  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const submitEmail = () => {
    axios
      .post(`/api/Auth/activate?userEmail=${data.email}&code=${submitCode}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Modal
        title="Confirm email"
        content={
          <InputField onChange={(event) => setSubmitCode(event.target.value)} />
        }
        visible={visible}
        setVisible={setVisible}
        action={submitEmail}
        setOptional={setSubmitCode}
      />
      <Title2 className="auth__title">Registration</Title2>
      <Progress
        value={(progress / 100) * breakpoints.length}
        breakpoints={breakpoints}
        setValue={setProgress}
      />
      {disabled ? (
        <Spinner labelPosition="below" label="Registration in progress..." />
      ) : (
        <>
          {progress === 0 && (
            <div className="auth__input">
              <InputField
                disabled={disabled}
                value={data.firstName}
                className="auth_input"
                label="Enter your first name"
                appearance="underline"
                type="text"
                onChange={(event) =>
                  validate({
                    value: event.target.value,
                    type: "firstName",
                    key: "firstName",
                  })
                }
              />
              <InputField
                disabled={disabled}
                value={data.lastName}
                onChange={(event) =>
                  validate({
                    value: event.target.value,
                    type: "lastName",
                    key: "lastName",
                  })
                }
                className="auth_input"
                label="Enter your last name"
                appearance="underline"
                type="text"
              />
            </div>
          )}
          {progress === 25 && (
            <div className="auth__input">
              <InputField
                disabled={disabled}
                value={data.email}
                onChange={(event) =>
                  validate({
                    value: event.target.value,
                    type: "email",
                    key: "email",
                  })
                }
                className="auth_input"
                label="Enter your email"
                appearance="underline"
                type="email"
              />
            </div>
          )}
          {progress === 50 && (
            <div className="auth__input">
              <InputField
                disabled={disabled}
                value={data.phone}
                onChange={(event) =>
                  validate({
                    value: event.target.value,
                    type: "phone",
                    key: "phone",
                  })
                }
                className="auth_input"
                label="Enter your phone number"
                appearance="underline"
                type="text"
              />
            </div>
          )}
          {progress === 75 && (
            <>
              <div className="auth__input">
                <InputField
                  disabled={disabled}
                  className="auth_input"
                  label="Enter your password"
                  appearance="underline"
                  type={type}
                  onChange={(event) =>
                    validate({
                      value: event.target.value,
                      type: "password",
                      key: "password",
                    })
                  }
                />
                <div className="show-pswd" onClick={() => showPassword()}>
                  {type === "password" ? <Eye24Regular /> : <EyeOff24Regular />}
                </div>
              </div>
            </>
          )}
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
          <Button
            onClick={() => tryRegister()}
            className="auth__btn"
            appearance="primary"
          >
            Register
          </Button>
        )}
        <Link href="/register">Already have account? Sign in</Link>
      </div>
    </>
  );
};

export default RegisterContainer;
