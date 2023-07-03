import React, { useState } from "react";
import {
  TooltipContainer,
  TooltipContentContainer,
  TooltipMessageContainer,
  TooltipWrapper,
} from "./styles";
import { ITooltipProps } from "./interfaces";

function Tooltip({ children, text, timeToDisappear = 3000 }: ITooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [interval, setInterval] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  const handleMouseOver = () => {
    clearTimeout(interval);

    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowTooltip(false);
    }, timeToDisappear);

    setInterval(timeout);
  };

  return (
    <TooltipWrapper>
      {showTooltip && <TooltipMessageContainer>{text}</TooltipMessageContainer>}
      {children ? (
        <TooltipContainer
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </TooltipContainer>
      ) : (
        <TooltipContainer
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <TooltipContentContainer>?</TooltipContentContainer>
        </TooltipContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
