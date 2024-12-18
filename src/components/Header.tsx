import styled from "styled-components";

export const Header = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing * 2}px;
`;
