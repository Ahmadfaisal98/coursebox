import { FC } from "react";
import styled from "@emotion/styled";
import { boxShadow, borderRadius } from "@/components/styles";

type Props = {
  /** Header string */
  header: string;
};

const Section = styled.section`
  padding: 1vmin 4vmin 4vmin;
  ${borderRadius};
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
`;

export const Tile: FC<Props> = ({ children, header }) => (
  <Section>
    <h2>{header}</h2>
    {children}
  </Section>
);
