import React from "react";

import { Button } from "@fluentui/react-components";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "@fluentui/react-components/unstable";

const Modal = ({
  title,
  content,
  visible,
  setVisible,
  action,
  setOptional,
}) => {
  const submitAction = () => {
    action();
    setOptional && setOptional(true);
    setVisible(false);
  };

  return (
    <Dialog open={visible} modalType="alert">
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogActions>
            <DialogTrigger>
              <Button onClick={() => submitAction()} appearance="secondary">
                Submit
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default Modal;
