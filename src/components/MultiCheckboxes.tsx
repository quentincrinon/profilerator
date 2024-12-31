import styled from "styled-components";
import { Checkbox } from "./Checkbox";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing * 2}px;
`;

interface MultiCheckboxesProps {
  options: {
    key: string;
    name: string;
  }[];
  handleChange: (key: string, checked: boolean) => void;
  selected: string[];
}

export const MultiCheckboxes = ({ options, handleChange, selected }: MultiCheckboxesProps) => {
  return (
    <Wrapper>
      {options.map((checkbox) => (
        <Checkbox
          key={checkbox.key}
          value={checkbox.key}
          checked={selected.includes(checkbox.key)}
          onChange={(event) => handleChange(event.target.value, event.target.checked)}
          name={checkbox.key}
          id={checkbox.key}
          label={checkbox.name}
        />
      ))}
    </Wrapper>
  );
};
