import React from "react";

import {
  StyledProgressWrapper,
  StyledProgressBreakpoint,
} from "./styledProgress";

const Progress = ({ value, breakpoints, setValue }) => {
  return (
    <StyledProgressWrapper value={value}>
      {breakpoints.map((breakpoint, key) => (
        <StyledProgressBreakpoint
          appearance="transparent"
          onClick={() => setValue((100 / breakpoints.length) * key)}
          key={key}
        >
          {breakpoint}
        </StyledProgressBreakpoint>
      ))}
    </StyledProgressWrapper>
  );
};

export default Progress;
