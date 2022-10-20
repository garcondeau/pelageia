import { regex } from "./consts";

const validator = ({ value, type, setErrors }) => {
  setErrors((prevState) => ({
    ...prevState,
    [type]: {
      state: "error",
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} is invalid`,
      value: ""
    },
  }));
  if (value.match(new RegExp(regex[type]))) {
    setErrors((prevState) => ({
      ...prevState,
      [type]: {
        state: "success",
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} is valid`,
        value: value
      },
    }));
  }
};

export default validator;
