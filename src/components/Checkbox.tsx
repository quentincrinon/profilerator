import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 5px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${Indicator} {
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:checked + ${Indicator}:after {
    display: block;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing}px;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 0.75rem;
`;

interface CheckboxProps {
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
}

export const Checkbox = ({ value, checked, onChange, name, id, label }: CheckboxProps) => {
  return (
    <Label htmlFor={id}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
};
