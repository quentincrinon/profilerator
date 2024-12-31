import styled from "styled-components";
import { ToggleButton } from "./ToggleButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing * 2}px;
`;

interface MultiTogglesProps {
  options: {
    key: string;
    name: string;
  }[];
  handleChange: (key: string, checked: boolean) => void;
  selected: string[];
}

export const MultiToggles = ({ options, handleChange, selected }: MultiTogglesProps) => {
  return (
    <Wrapper>
      {options.map((checkbox) => (
        <ToggleButton
          key={checkbox.key}
          checked={selected.includes(checkbox.key)}
          onChange={(event) => handleChange(event.target.id, event.target.checked)}
          name={checkbox.key}
          id={checkbox.key}
          label={checkbox.name}
        />
      ))}
    </Wrapper>
  );
};
