import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { closableNotification } from "../notification/ClosableNotification";
import Tooltip from "@fluentui/react-components";

import { StyledCopyToClipboardWrapper } from "./styledCopyToClipboard";

const CopyValueToClipboard = ({ value, link, noWrap }) => {
  return (
    <StyledCopyToClipboardWrapper className="copy-to-clipboard" noWrap={noWrap}>
      {link || value}
      <CopyToClipboard
        text={value}
        onCopy={() => {
          closableNotification("Copied", "success");
        }}
      >
        <Tooltip
          placement="top"
          overlay="Copy"
        >
          <span className="icon-copy" />
        </Tooltip>
      </CopyToClipboard>
    </StyledCopyToClipboardWrapper>
  );
};

export default CopyValueToClipboard;