import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonCommon = styled.button`
  margin: ${({ theme }) => theme.spacing}px;
  border-radius: 3px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textContrast};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;

const StyledButton = styled(ButtonCommon)`
  font-size: 1em;
  padding: ${({ theme }) => theme.spacing}px ${({ theme }) => theme.spacing * 2}px;
`;

export const Button = ({ onClick, children }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

const StyledIconButton = styled(ButtonCommon)`
  padding: ${({ theme }) => theme.spacing / 2}px ${({ theme }) => theme.spacing}px;
`;

export const IconButton = ({ onClick, children }: ButtonProps) => (
  <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
);
