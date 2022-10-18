import React, { useState } from "react";
import { regex } from "../../utils/consts";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { Title2, Label, Button, Link } from "@fluentui/react-components";
import { InputField } from "@fluentui/react-components/unstable";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";

const LoginContainer = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [type, setType] = useState("password");
  const [errors, setErrors] = useState({
    email: { state: "", message: "" },
    password: { state: "", message: "" },
  });

  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const validator = ({ value, type }) => {
    if (type === "email") {
      setErrors((prevState) => ({
        ...prevState,
        email: { state: "error", message: "Incorrect email" },
      }));
      if (value.match(new RegExp(regex.email))) {
        setErrors((prevState) => ({
          ...prevState,
          email: { state: "success", message: "Email is valid" },
        }));
      }
    }
    if (type === "password") {
      setErrors((prevState) => ({
        ...prevState,
        password: { state: "error", message: "иди нахуй" },
      }));
      if (value.match(new RegExp(regex.password))) {
        setErrors((prevState) => ({
          ...prevState,
          password: { state: "success", message: "Password is valid" },
        }));
      }
    }
  };
  const handleSubmit = async (data) => {
    try {
      const newToken = executeRecaptcha("MS_Pyme_DatosEmpresa");
      console.log({ data, newToken });
    } catch (err) {
      throw new Error("Token error");
    }
  };

  return (
    <GoogleReCaptchaProvider
      language="en-US"
      reCaptchaKey="6Lf80Y0iAAAAAE2Tj0yU59exizBuchx9rr7MJEWT"
    >
      <Title2 className="auth__title">
        Sign in with your <b>Pelageia</b> account
      </Title2>
      <div className="auth__input">
        <InputField
          className="auth_input"
          label="Email"
          validationState={errors.email.state}
          validationMessage={errors.email.message}
          onChange={(event) =>
            validator({ value: event.target.value, type: "email" })
          }
          appearance="underline"
          type="email"
        />
      </div>
      <div className="auth__input">
        <InputField
          className="auth_input"
          label="Password"
          validationState={errors.password.state}
          validationMessage={errors.password.message}
          onChange={(event) =>
            validator({ value: event.target.value, type: "password" })
          }
          appearance="underline"
          type={type}
        />
        <div className="show-pswd" onClick={() => showPassword()}>
          {type === "password" ? <Eye24Regular /> : <EyeOff24Regular />}
        </div>
      </div>
      <div className="auth__actions">
        <GoogleReCaptcha onVerify={(t) => console.log({ t })} />
        <Button
          onClick={() => handleSubmit}
          className="auth__btn"
          appearance="primary"
        >
          Sign in
        </Button>
        <Link href="/register">Not registered? Sign up now</Link>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default LoginContainer;
