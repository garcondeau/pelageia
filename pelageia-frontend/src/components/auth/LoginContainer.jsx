import React, { useState } from "react";
import axios from "axios";
import validator from "../../utils/validator";

import { Title2, Button, Link } from "@fluentui/react-components";
import { InputField } from "@fluentui/react-components/unstable";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";

const LoginContainer = () => {
  const [type, setType] = useState("password");
  const [errors, setErrors] = useState({
    email: {
      state: "",
      message: "",
      value: "",
    },
    password: {
      state: "",
      message: "",
      value: "",
    },
  });

  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const validate = ({ value, type }) => {
    validator({
      value: value,
      type: type,
      setErrors: setErrors,
    });
  };

  const tryLogin = () => {
    if (errors.email.value != "" && errors.password.value != "") {
      axios
        .post(`/api/Auth/login?email=${errors.email.value}&password=${errors.password.value}`)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data}`
          localStorage.setItem("Bearer", response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Title2 className="auth__title">
        Sign in with your <b>Pelageia</b> account
      </Title2>
      <div className="auth__input">
        <InputField
          onChange={(event) =>
            validate({ value: event.target.value, type: "email" })
          }
          validationState={errors.email.state}
          validationMessage={errors.email.message}
          className="auth_input"
          label="Email"
          appearance="underline"
          type="email"
        />
      </div>
      <div className="auth__input">
        <InputField
          onChange={(event) =>
            validate({ value: event.target.value, type: "password" })
          }
          validationState={errors.password.state}
          validationMessage={errors.password.message}
          className="auth_input"
          label="Password"
          appearance="underline"
          type={type}
        />
        <div className="show-pswd" onClick={() => showPassword()}>
          {type === "password" ? <Eye24Regular /> : <EyeOff24Regular />}
        </div>
      </div>
      <div className="auth__actions">
        <Button
          onClick={() => tryLogin()}
          className="auth__btn"
          appearance="primary"
        >
          Sign in
        </Button>
        <Link href="/register">Not registered? Sign up now</Link>
      </div>
    </>
  );
};

export default LoginContainer;
