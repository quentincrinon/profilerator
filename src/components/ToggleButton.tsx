import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing / 2}px;

  font-size: 0.75em;

  cursor: pointer;
`;

const StyledTogglerWrapper = styled.div<{ checked: boolean }>`
  text-indent: -9999px;
  width: ${({ theme }) => theme.toggleSize * 2}px;
  height: ${({ theme }) => theme.toggleSize}px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.secondary : theme.colors.primaryLight};
  display: block;
  border-radius: ${({ theme }) => theme.toggleSize}px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${({ checked, theme }) =>
      checked
        ? `${theme.spacing / 4}px`
        : `calc(100% - ${theme.toggleSize - theme.spacing / 2 + theme.spacing / 4}px)`};
    top: ${({ theme }) => theme.spacing / 4}px;
    width: ${({ theme }) => theme.toggleSize - theme.spacing / 2}px;
    height: ${({ theme }) => theme.toggleSize - theme.spacing / 2}px;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

interface ToggleProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
}

export const ToggleButton = ({ id, label, checked, onChange }: ToggleProps) => {
  return (
    <StyledLabel htmlFor={id}>
      <span>{label}</span>
      <StyledTogglerWrapper checked={checked}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      </StyledTogglerWrapper>
    </StyledLabel>
  );
};
