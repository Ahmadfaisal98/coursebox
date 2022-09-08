import { FC, MouseEvent } from "react";
import styled from "@emotion/styled";

import { boxShadow, transition } from "@/components/styles";
import { Icon, Props as IconProps } from "@/components/Icon/Icon";
import { css } from "@emotion/react";

type ButtonProps = { size: string };

const Button = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}
  border-radius: 50%;
  ${transition()}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
`;

export type Props = {
  /** onClick callback */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & IconProps;

export const IconButton: FC<Props> = ({ onClick, ...props }) => (
  <Button
    onClick={onClick}
    size={`${(props.size || 2) * 2}rem`}
    title={props.name}
  >
    <Icon {...props} />
  </Button>
);
