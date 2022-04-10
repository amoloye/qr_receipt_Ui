import React from "react";
import styled from "styled-components";

interface Props {
  size?: "s" | "m" | "l";
}

export const Spacer = ({ size = "m" }: Props) => {
  return <StyledSpacer $size={size} />;
};

const StyledSpacer = styled.div<{ $size?: string }>`
  display: inline-flex;
  margin: ${(props) =>
    (props.$size === "m" && "20px 0px") ||
    (props.$size === "l" && "40px 0px") ||
    "10px 0px"};
`;
