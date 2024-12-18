import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  top: -30px;
  right: 0;
  white-space: nowrap;
  z-index: 1;
`;

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <div onClick={handleClick}>{children}</div>
      {visible && <TooltipContent>{text}</TooltipContent>}
    </Wrapper>
  );
};
